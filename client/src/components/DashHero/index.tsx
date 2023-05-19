import { useEffect } from 'react'

// eslint-disable-next-line no-var
var Graph = require('p2p-graph')

const DashHero = () => {
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
    graph.add({
      id: 'peer2',
      name: '65.168.42.129'
    })
    graph.add({
      id: 'peer3',
      name: '122.171.23.156'
    })
    graph.add({
      id: 'peer4',
      name: '95.317.02.98'
    })
    graph.add({
      id: 'peer5',
      name: '188.217.190.86'
    })
    graph.add({
      id: 'peer6',
      name: '91.237.27.81'
    })
    graph.connect('peer1', 'peer2')
    graph.connect('peer1', 'peer3')
    graph.connect('peer1', 'peer4')
    graph.connect('peer1', 'peer5')
    graph.connect('peer1', 'peer6')
  }, [])

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
