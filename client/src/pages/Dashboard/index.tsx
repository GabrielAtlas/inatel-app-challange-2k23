import DashContent from '../../components/DashContent'
import DashHero from '../../components/DashHero'
import { DataContextProvider } from '../../contexts/DataContext'
import DashLayout from '../../layouts/DashLayout'

const Dashboard = () => {
  return (
    <DashLayout>
      <DataContextProvider>
        <DashHero />
        <DashContent />
      </DataContextProvider>
    </DashLayout>
  )
}

export default Dashboard
