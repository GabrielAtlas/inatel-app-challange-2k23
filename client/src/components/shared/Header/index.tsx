import { Menu, Text } from '@mantine/core'
import ReactCountryFlag from 'react-country-flag'
import { Trans, useTranslation } from 'react-i18next'
import { FiChevronDown, FiLogOut, FiSettings } from 'react-icons/fi'

import { AssistancePill } from '../../AssistancePill'

export const Header = () => {
  const { t, i18n } = useTranslation()

  // Get the current language
  const currentLanguage = i18n.language

  const handleLanguageChange = () => {
    i18n.changeLanguage(currentLanguage == 'pt' ? 'en' : 'pt')
  }

  return (
    <>
      <div
        className="flex items-center justify-between"
        // @ts-ignore
      >
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="close-window-button"
              className="w-3 h-3 bg-[#ED6A5E] rounded-full"
            ></button>
            <button
              type="button"
              className="w-3 h-3 bg-[#F4BF4F] rounded-full"
            ></button>
            <button
              type="button"
              className="w-3 h-3 bg-[#61C554] rounded-full"
            ></button>
          </div>
          <AssistancePill />
        </div>
        <img src="/assets/logo-neter.svg" alt="Neter" />
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <div
              className="ml-8 text-xs bg-white/5 py-2 px-3 text-white flex gap-2 items-center rounded-full cursor-pointer"
              onClick={() => {
                console.log('hello')
              }}
            >
              <span className="flex w-6 h-6 font-sora font-bold justify-center items-center bg-gradient-to-r from-[#6D43C5] to-[#FCA311] rounded-full">
                J
              </span>
              <span>
                <Trans i18nKey="authenticatedAs" values={{ name: 'João' }} />
              </span>
              <FiChevronDown size={16} />
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item icon={<FiSettings size={14} />}>
              {t('userSettings.settings')}
            </Menu.Item>
            <Menu.Item
              rightSection={
                <Text size="xs" color="dimmed">
                  {t('userSettings.languageSelected')}
                </Text>
              }
              onClick={handleLanguageChange}
              icon={
                <ReactCountryFlag
                  countryCode={currentLanguage == 'pt' ? 'BR' : 'US'}
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title={currentLanguage == 'pt' ? 'BR' : 'US'}
                />
              }
            >
              {currentLanguage == 'pt' ? 'Português' : 'English'}
            </Menu.Item>

            <Menu.Divider />

            <Menu.Item color="red" icon={<FiLogOut size={14} />}>
              {t('userSettings.logout')}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </>
  )
}
