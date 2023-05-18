import DashHero from '../../components/DashHero'
import DashLayout from '../../layouts/DashLayout'
import { connect } from '../../libs/SocketApi'

const Dashboard = () => {
  const initialize = () => {
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
    <DashLayout>
      <DashHero />
    </DashLayout>
  )
}

export default Dashboard
