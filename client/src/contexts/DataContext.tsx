import React, { createContext, useState, useEffect } from 'react'

import { ProcessData } from '../@types/types'
import { connect } from '../libs/SocketApi'

type Props = { children: React.ReactNode }

interface DataContextProps {
  responseData: ProcessData[]
  totalDownloadDataReceived: string
  totalUploadDataReceived: string
}

interface Units {
  [key: string]: number
}

export const DataContext = createContext({} as DataContextProps)

export const DataContextProvider: React.FC<Props> = ({ children }) => {
  const [responseData, setResponseData] = useState<ProcessData[]>([])
  const [totalDownloadDataReceived, setTotalDownloadDataReceived] =
    useState<string>('0B')
  const [totalUploadDataReceived, setTotalUploadDataReceived] =
    useState<string>('0B')

  useEffect(() => {
    connect(
      () => {
        console.log('connected')
      },
      (data: any) => {
        let totalDownloadBytes = 0,
          totalUploadBytes = 0
        for (const obj of data) {
          const downloadMatches = obj.download.match(/(\d+)([a-z]+)/i)
          const uploadMatches = obj.upload.match(/(\d+)([a-z]+)/i)
          if (downloadMatches && downloadMatches.length === 3) {
            const size = parseInt(downloadMatches[1])
            const unit = downloadMatches[2]
            const bytes = convertToBytes(size, unit)
            totalDownloadBytes += bytes
          }
          if (uploadMatches && uploadMatches.length === 3) {
            const size = parseInt(uploadMatches[1])
            const unit = uploadMatches[2]
            const bytes = convertToBytes(size, unit)
            totalUploadBytes += bytes
          }
        }
        const formattedTotalDownloadBytes = formatBytes(totalDownloadBytes)
        const formattedTotalUploadBytes = formatBytes(totalUploadBytes)
        setTotalDownloadDataReceived(formattedTotalDownloadBytes)
        setTotalUploadDataReceived(formattedTotalUploadBytes)
        setResponseData(data)
        console.log(data)
      }
    )
  }, [])

  function convertToBytes(size: number, unit: string): number {
    const units: Units = {
      b: 1,
      kb: 1024,
      mb: 1024 * 1024,
      gb: 1024 * 1024 * 1024
    }

    const lowercaseUnit = unit.toLowerCase()
    if (lowercaseUnit in units) {
      return size * units[lowercaseUnit]
    }

    throw new Error('Invalid unit: ' + unit)
  }

  function formatBytes(bytes: number): string {
    const units = ['B', 'KB', 'MB', 'GB', 'TB']
    let size = bytes
    let unitIndex = 0

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024
      unitIndex++
    }

    const formattedSize = size.toFixed(1)
    const formattedUnit = units[unitIndex]

    return `${formattedSize}${formattedUnit.toLowerCase()}`
  }

  return (
    <DataContext.Provider
      value={{
        responseData,
        totalDownloadDataReceived,
        totalUploadDataReceived
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
