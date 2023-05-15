const TitleBar = () => {
  return (
    <div
      className="relative z-10 w-full py-3 px-4 flex flex-row items-center justify-between"
      // @ts-ignore
      style={{ WebkitAppRegion: 'drag' }}
    >
      <div className="flex-1" />
      <div className="flex-1 font-bold text-white text-center text-xs select-none">
        LaraBroker
      </div>
      <div className="flex-1" />
    </div>
  )
}

export default TitleBar
