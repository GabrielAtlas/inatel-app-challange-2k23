import React from 'react'

import { Header } from '../../components/shared/Header'

type Props = {
  children?: React.ReactNode
}

const DashLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen py-6 px-8">
      <div className="overflow-y-auto max-h-max">
        <Header />
      </div>
      <main>{children}</main>
    </div>
  )
}

export default DashLayout
