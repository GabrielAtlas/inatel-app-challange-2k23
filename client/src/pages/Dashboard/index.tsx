import DashContent from '../../components/DashContent'
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
      <DashContent />
    </DashLayout>
  )
}

export default Dashboard
