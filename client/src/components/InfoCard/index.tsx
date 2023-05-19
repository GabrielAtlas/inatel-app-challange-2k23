type InfoCardProps = {
  title: string
  icon: any
  info: string
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, info }) => {
  const matchResult = info.match(/(\d+(?:\.\d+)?)(\D+)/)

  return (
    <div className="bg-[#282828]/60 h-[136px] max-w-[240px] w-full px-6 py-4 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-3">
        <h6 className="text-[#A5A5A5] text-sm">{title}</h6>
        {icon}
      </div>
      {matchResult && matchResult.length === 3 ? (
        <h3 className="text-white text-5xl">
          {matchResult[1]}
          <span className="text-white/40">{matchResult[2]}</span>
        </h3>
      ) : (
        <h3 className="text-white text-5xl">{info}</h3>
      )}
    </div>
  )
}

export default InfoCard
