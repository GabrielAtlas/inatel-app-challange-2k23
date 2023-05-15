import { Header } from '../../components/shared/Header'
import { connect } from '../../libs/SocketApi'

const Dashboard = () => {
  const initialize = () => {
    document.body.classList.toggle('gradient-run')
    connect(
      () => {
        console.log('conectado com websocket')
      },
      (data: any) => {
        console.log(data)
      }
    )
  }

  return (
    <div className="flex flex-col items-stretch justify-between h-screen">
      <div className="flex-1 overflow-y-auto max-h-max py-6 px-8">
        <Header />
        <div className="flex items-center justify-center h-full w-full">
          <button onClick={initialize}>Click me</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
