import { useContext } from 'react'

import { useTranslation } from 'react-i18next'
import {
  FiArrowDownLeft,
  FiArrowUpRight,
  FiBox,
  FiCloudDrizzle,
  FiCrosshair,
  FiMeh
} from 'react-icons/fi'

import { DataContext } from '../../contexts/DataContext'
import InfoCard from '../InfoCard'

const DashContent = () => {
  const { responseData, totalDownloadDataReceived, totalUploadDataReceived } =
    useContext(DataContext)

  const { t } = useTranslation()

  return (
    <div className="flex gap-3 mt-8">
      <div id="left-column" className="w-full">
        <div className="mb-3">&nbsp;</div>
        <div id="top-left-cards" className="flex gap-2">
          <div className="w-full max-w-[240px] h-[136px] flex items-end text-end">
            <h3 className="mb-3 font-sora text-lg leading-6 font-extralight text-[#D1D1D1]">
              {t('analytics.dataConsumption')}
            </h3>
          </div>
          <InfoCard
            title={t('analytics.receivedData')}
            icon={<FiArrowDownLeft size={32} color="#00FFA3" />}
            info={totalDownloadDataReceived}
          />
        </div>
        <div id="bottom-left-cards" className="flex gap-2 mt-2">
          <InfoCard
            title={t('analytics.connectedApps')}
            icon={<FiBox size={32} color="#FCA311" />}
            info={responseData.length.toString()}
          />
          <InfoCard
            title={t('analytics.sentData')}
            icon={<FiArrowUpRight size={32} color="#00FFA3" />}
            info={totalUploadDataReceived}
          />
        </div>
      </div>
      <div id="right-column" className="w-full">
        <h3 className="mb-3 font-sora text-lg leading-6 font-extralight text-[#D1D1D1]">
          Analytics
        </h3>
        <div id="top-right-cards" className="flex gap-2">
          <InfoCard
            title={t('analytics.protocolsUsed')}
            icon={<FiCloudDrizzle size={32} color="#0085FF" />}
            info="59"
          />
          <InfoCard
            title={t('analytics.threatsDetected')}
            icon={<FiMeh size={32} color="#FF5B5B" />}
            info="0"
          />
        </div>
        <div id="bottom-right-cards" className="flex gap-2 mt-2">
          <div className="w-full max-w-[240px]"></div>
          {
            <InfoCard
              title={t('analytics.reportDesc')}
              icon={<FiCrosshair size={32} color="#FA7429" />}
              info={t('analytics.report')}
              report
              reportText={t('analytics.reportDesc')}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default DashContent
