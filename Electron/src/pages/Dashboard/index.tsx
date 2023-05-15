import { FiUsers } from 'react-icons/fi'

import TitleBar from '../../components/shared/Titlebar'

const Dashboard = () => {
  return (
    <div className="flex flex-col items-stretch justify-between h-screen">
      <TitleBar />
      <div className="flex-1 overflow-y-auto max-h-max py-6 px-8">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-3xl font-medium text-white">Contas bancárias</h1>
          <button className="py-2 px-4 rounded-full text-sm bg-green-700 text-white transition-all ease-in hover:bg-green-800">
            Nova conta
          </button>
        </div>
        <div className="h-[500px] flex flex-col items-center justify-center">
          <div className="text-9xl text-neutral-700">
            <FiUsers />
          </div>
          <div className="text-center text-neutral-700 max-w-sm mt-10 select-none">
            Não há contas cadastradas no momento
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
