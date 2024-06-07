import {DropdownUI} from "@/components";
import {formatPhoneNumber, langSelect} from "@/helper";
import {useTranslation} from "react-i18next";
import {FaFacebookSquare, FaTelegram} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import BeReputationForm from "../be-forms/be-reputation-form";
import {useRouter} from "next/router";


const TopNav = ({contact}) => {
    const {t, i18n} = useTranslation();
    const handleChangleLang = (lang) => {
        i18n.changeLanguage(lang.value)
    }

    const router = useRouter();



    const langList = [
        {
            title: t('lang.ru'),
            value: 'ru',
            id: 1
        },
        {
            title: t('lang.en'),
            value: 'en',
            id: 2
        },
        {
            title: t('lang.uz'),
            value: 'uz',
            id: 3
        }
    ]
    return (
        <div className='bg-brown w-full '>
            <div className='container flex justify-between gap-x-3 xl:gap-x-10 items-center text-white'>
                {router.pathname !== '/reservation' &&
                <div className='flex items-center gap-1 xl:gap-2.5'>
                    <a href={contact?.instagram} target='_blank'><RiInstagramFill className='text-xl' /></a>
                    <a href={contact?.youtube} target='_blank'> <FaTelegram className='text-xl' /></a>
                    <a href={contact?.facebook} target='_blank'><FaFacebookSquare className='text-xl' /></a>
                </div>}
                <BeReputationForm/>
                <div className='flex justify-end gap-x-2 xl:gap-x-10 items-center font-roboto text-sm text-white  '>
                    <DropdownUI list={langList} onClick={handleChangleLang}/>
                    <a href={`tel:${contact?.phone}`} className='hidden sm:block'>{
                        formatPhoneNumber(contact?.phone)
                    }</a>
                    <p className='hidden lg:block'> {langSelect(i18n.language, contact?.address_ru, contact?.address_en, contact?.address_uz)}</p>
                </div>
            </div>
        </div>
    )
}
export default TopNav
