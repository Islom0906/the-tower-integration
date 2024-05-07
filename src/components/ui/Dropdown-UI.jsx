import {useEffect, useState} from "react"
import { FaAngleDown } from "react-icons/fa6";
import {useTranslation} from "react-i18next";

const DropdownUl = ({ list  ,  onClick}) => {
    const  [dropdown , setDropdown] = useState(false)
    const [changleLang , setChangleLang] = useState('lang.ru')
    const { t,i18n  } = useTranslation();
    const openDropdown  = () => {
        setDropdown(!dropdown)
    }

    useEffect(() => {
        if(i18n.language === 'uz'){
            setChangleLang("lang.uz")
        }else if(i18n.language === 'ru'){
            setChangleLang("lang.ru")
        }else if(i18n.language === 'en'){
            setChangleLang("lang.en")
        }
    }, [i18n.language]);

    const selectedLang = (item) => {
        setDropdown(!dropdown)
        onClick(item)

    }
    return (
        <div className="relative">

            <button onClick={openDropdown} className="py-2 text-white flex items-center gap-2">
      <span className={'text-sm'}>
      {
          t(`${changleLang}`)
      }
      </span>
                <FaAngleDown className={`${dropdown && "-rotate-180 " } duration-500`} />

            </button>

            <div className={`grid ${dropdown ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} -mr-10 absolute left-0 rounded-b top-[36px] bg-brown z-[101] border-light transition-all ease duration-500`}>
             <div className=" text-base overflow-hidden">
              <div className=" px-3 py-1 flex flex-col gap-2">
              {
                    list?.map(item => (
                        <div onClick={() => {
                            selectedLang(item)
                        }} key={item.id} className="cursor-pointer text-xs md:text-sm"  >
                            {item?.title}
                        </div>
                    ))
                }
              </div>
            </div>
          </div>
          
        </div>

    )
}

export default DropdownUl
