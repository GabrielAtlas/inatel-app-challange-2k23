import { FiChevronDown } from 'react-icons/fi'

import { AssistancePill } from '../../AssistancePill'

export const Header = () => {
  return (
    <div
      className="flex items-center justify-between"
      // @ts-ignore
      style={{ WebkitAppRegion: 'drag' }}
    >
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-3 h-3 bg-[#ED6A5E] rounded-full"
          ></button>
          <button
            type="button"
            className="w-3 h-3 bg-[#F4BF4F] rounded-full"
          ></button>
          <button
            type="button"
            className="w-3 h-3 bg-[#61C554] rounded-full"
          ></button>
        </div>
        <AssistancePill />
      </div>
      <img src="/assets/logo-neter.svg" alt="Neter" />
      <div className="w-50 ml-8 text-xs bg-white/5 py-2 px-3 text-white flex gap-2 items-center rounded-full">
        <span className="flex w-6 h-6 justify-center items-center bg-gradient-to-r from-[#6D43C5] to-[#FCA311] rounded-full">
          J
        </span>
        Autenticado como <b>João</b>
        <FiChevronDown />
      </div>
    </div>
  )
}
