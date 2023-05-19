import { useState, useEffect, useContext } from 'react'

import { Host, ProcessData } from '../../@types/types'
import { DataContext } from '../../contexts/DataContext'

// eslint-disable-next-line no-var
var Graph = require('p2p-graph')

const DashHero = () => {
  const { responseData } = useContext(DataContext)
  const [graph, setGraph] = useState<typeof Graph>()

  useEffect(() => {
    const graph = new Graph('.graph-root')
    graph.on('select', function (id: any) {
      console.log(id + ' selected!')
    })

    // Add two peers
    graph.add({
      id: 'peer1',
      me: true,
      name: 'Você'
    })
    setGraph(graph)
  }, [])

  useEffect(() => {
    if (graph && graph.list().length < 2) {
      responseData
        .reduce((hosts: string[], processData: ProcessData) => {
          const hostTraffic = processData.host_traffic.map(
            (host: Host) => host.host
          )
          return [...hosts, ...hostTraffic]
        }, [])
        .slice(0, 5)
        .forEach((host, index) => {
          const hostId = `peer${index + 2}`
          graph.add({
            id: hostId,
            name: host
          })

          graph.connect('peer1', hostId)
        })
      console.log(graph.list().length)
    }
  }, [graph, responseData])

  return (
    <div className="w-100 flex h-64 mt-6 bg-[#101A30]/100 rounded-3xl px-8">
      <div className="text-white flex flex-1 items-end h-full pb-12">
        <h1 className="text-4xl text-bold font-sora">
          Tudo certo,
          <br />{' '}
          <b>
            sua rede está <span className="text-[#14F195]">segura</span>.
          </b>
        </h1>
      </div>
      <div className="graph-root h-full flex items-center justify-center">
        {/* GRAPH */}
      </div>
    </div>
  )
}

export default DashHero
