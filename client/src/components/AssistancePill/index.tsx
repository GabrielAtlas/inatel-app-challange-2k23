import { useTranslation } from 'react-i18next'

export const AssistancePill = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-black/20 leading-3 text-xs min-w-fit items-center gap-3 py-2 px-3 text-white flex rounded-full">
      <span className="w-2 h-2 bg-[#FCA311] rounded-full outline outline-[#FCA311]/30"></span>
      {t('assistant')}
    </div>
  )
}
