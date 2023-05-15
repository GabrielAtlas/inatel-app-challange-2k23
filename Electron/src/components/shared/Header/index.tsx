import { FiChevronDown } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineLanguage } from 'react-icons/md'

export const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="w-32">
        <button>
          <GiHamburgerMenu color="white" size={28} />
        </button>
      </div>
      <img src="/assets/neter-logo.svg" alt="Logo" />
      <div
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="flex items-center text-white justify-center gap-2 w-32"
      >
        <MdOutlineLanguage color="white" size={28} />
        <span>Português</span>
        <FiChevronDown size={18} />
      </div>
    </div>
  )
}
