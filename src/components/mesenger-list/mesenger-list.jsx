import { FaInstagram, FaFacebookF,FaTelegramPlane  } from "react-icons/fa";
import {ButtonUI} from "@/components";


const MesengerList = ({instagram , facebook , youtube}) => {
  return (
    <div className='flex gap-4 items-center max-md:justify-center '>
      <ButtonUI stylePadding={'p-2 '} href={instagram} target={'_blank'} icon={<FaInstagram className="md:text-2xl"  />}/>
      <ButtonUI stylePadding={'p-2 '} href={facebook} target={'_blank'} icon={<FaFacebookF className="md:text-2xl"  />}/>
      <ButtonUI stylePadding={'p-2 '} href={youtube} target={'_blank'} icon={<FaTelegramPlane className="md:text-2xl"  />}/>
    </div>
  )
}

export default MesengerList