import { useContext } from 'react'

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

  return (
    <div className="flex gap-3 mt-8">
      <div id="left-column" className="w-full">
        <div className="mb-3">&nbsp;</div>
        <div id="top-left-cards" className="flex gap-2">
          <div className="w-full max-w-[240px] h-[136px] flex items-end text-end">
            <h3 className="mb-3 font-sora text-lg leading-6 font-extralight text-[#D1D1D1]">
              Consumo
            </h3>
          </div>
          <InfoCard
            title="Dados recebidos"
            icon={<FiArrowDownLeft size={32} color="#00FFA3" />}
            info={totalDownloadDataReceived}
          />
        </div>
        <div id="bottom-left-cards" className="flex gap-2 mt-2">
          <InfoCard
            title="Apps conectados"
            icon={<FiBox size={32} color="#FCA311" />}
            info={responseData.length.toString()}
          />
          <InfoCard
            title="Dados enviados"
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
            title="Protocolos utilizados"
            icon={<FiCloudDrizzle size={32} color="#0085FF" />}
            info="59"
          />
          <InfoCard
            title="Ameaças detectadas"
            icon={<FiMeh size={32} color="#FF5B5B" />}
            info="0"
          />
        </div>
        <div id="bottom-right-cards" className="flex gap-2 mt-2">
          <div className="w-full max-w-[240px]"></div>
          {
            <InfoCard
              title="Encontrou algo suspeito?"
              icon={<FiCrosshair size={32} color="#FA7429" />}
              info="Reportar"
              report
            />
          }
        </div>
      </div>
    </div>
  )
}

export default DashContent
