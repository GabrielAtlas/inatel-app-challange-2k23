const DashHero = () => {
  return (
    <div className="w-100 h-64 mt-6 bg-[#101A30]/100 rounded-3xl px-8 pb-12">
      <div className="text-white flex items-end h-full">
        <h1 className="text-4xl text-bold font-sora">
          Tudo certo,
          <br />{' '}
          <b>
            sua rede está <span className="text-[#14F195]">segura</span>.
          </b>
        </h1>
      </div>
      <div>{/* GRAPH */}</div>
    </div>
  )
}

export default DashHero
