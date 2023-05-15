import osn from 'obs-studio-node'
import path from 'path'
import { Subject } from 'rxjs'
import { v4 } from 'uuid'

import { fixPathWhenPackaged } from '../../utils/packager'

const videoPath = require('electron').app.getPath('videos')

class OBS {
  private initialized = false

  private signals = new Subject()

  public initialize(): void {
    if (this.initialized) {
      throw new Error('OBS is already initialized.')
    }

    this.start()
    this.config()
  }

  private start() {
    console.log('Starting OBS...')

    const host = `obs-studio-larabroker-${v4()}`

    osn.NodeObs.IPC.host(host)
    osn.NodeObs.SetWorkingDirectory(
      fixPathWhenPackaged(
        path.join(__dirname, 'node_modules', 'obs-studio-node')
      )
    )

    const obsDataPath = fixPathWhenPackaged(path.join(__dirname, 'osn-data'))

    const initResult = osn.NodeObs.OBS_API_initAPI(
      'en-US',
      obsDataPath,
      '1.0.0'
    )

    if (initResult !== 0) {
      const errorReasons = {
        '-2': 'DirectX could not be found on your system. Please install the latest version of DirectX for your machine here <https://www.microsoft.com/en-us/download/details.aspx?id=35?> and try again.',
        '-5': 'Failed to initialize OBS. Your video drivers may be out of date, or Streamlabs OBS may not be supported on your system.'
      }

      const errorMessage =
        errorReasons[initResult.toString() as never] ||
        `An unknown error #${initResult} was encountered while initializing OBS.`

      console.error('OBS init failure', errorMessage)

      this.shutdown()

      throw Error(errorMessage)
    }

    osn.NodeObs.OBS_service_connectOutputSignals((signalInfo: any) => {
      this.signals.next(signalInfo)
    })

    console.debug('OBS initialized')
  }

  private config() {
    console.debug('Configuring OBS')

    this.setSetting('Output', 'Mode', 'Advanced')

    const availableEncoders = this.getAvailableValues(
      'Output',
      'Recording',
      'RecEncoder'
    )

    this.setSetting(
      'Output',
      'RecEncoder',
      availableEncoders.slice(-1)[0] || 'x264'
    )
    this.setSetting('Output', 'RecFilePath', videoPath)
    this.setSetting('Output', 'RecFormat', 'mkv')
    this.setSetting('Output', 'VBitrate', 10000)
    this.setSetting('Video', 'FPSCommon', 60)

    console.debug('OBS Configured')
  }

  private setSetting(category: string, parameter: any, value: any) {
    let oldValue

    const settings = osn.NodeObs.OBS_settings_getSettings(category).data

    settings.forEach((subCategory: any) => {
      subCategory.parameters.forEach((param: any) => {
        if (param.name === parameter) {
          oldValue = param.currentValue
          param.currentValue = value
        }
      })
    })

    if (value != oldValue) {
      osn.NodeObs.OBS_settings_saveSettings(category, settings)
    }
  }

  private getAvailableValues(
    category: string,
    subcategory: string,
    parameter: string
  ) {
    const categorySettings = osn.NodeObs.OBS_settings_getSettings(category).data
    if (!categorySettings) {
      console.warn(`There is no category ${category} in OBS settings`)
      return []
    }

    const subcategorySettings = categorySettings.find(
      (sub: any) => sub.nameSubCategory === subcategory
    )
    if (!subcategorySettings) {
      console.warn(
        `There is no subcategory ${subcategory} for OBS settings category ${category}`
      )
      return []
    }

    const parameterSettings = subcategorySettings.parameters.find(
      (param: any) => param.name === parameter
    )
    if (!parameterSettings) {
      console.warn(
        `There is no parameter ${parameter} for OBS settings category ${category}.${subcategory}`
      )
      return []
    }

    return parameterSettings.values.map((value: any) => Object.values(value)[0])
  }

  private shutdown() {
    if (!this.initialized) {
      console.debug('OBS is already shut down!')
      return false
    }

    console.debug('Shutting down OBS...')

    try {
      osn.NodeObs.OBS_service_removeCallback()
      osn.NodeObs.IPC.disconnect()

      this.initialized = false
    } catch (e) {
      throw Error('Exception when shutting down OBS process' + e)
    }

    console.debug('OBS shutdown successfully')

    return true
  }
}

export default OBS
