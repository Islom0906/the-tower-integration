import {useDispatch} from "react-redux";
import {changleCountChildrenBooking, changleCountOlderBooking, changleCountRoomBooking} from "@/slice/booking";

const InputUl = ({type,  placeholder, labelText, id, changleName,  infoInput, formname , value}) => {

    const dispatch = useDispatch()
    const changleSetValue  = (e) => {
        if(e.target.value >=0) {
        if(changleName === 'room') {
            dispatch(changleCountRoomBooking(e.target.value))
        }else  if(changleName === 'old') {
            dispatch(changleCountOlderBooking(e.target.value))
        }else  if(changleName === 'childer') {
            dispatch(changleCountChildrenBooking(e.target.value))
        }
        }
    }


    return (
        <div className='space-y-3 flex flex-col w-full relative justify-end'>
            {
                labelText && <label htmlFor={id} className='font-roboto font-light tracking-[0.4px] md:text-lg xl:text-xl text-black   '>{labelText}</label>
            }


            {

                <div className='relative flex flex-col justify-center'>

                    <input type={type} {...formname}  value={value} placeholder={placeholder}
                           onChange={(e) =>  changleSetValue(e)}
                       className={'cursor-pointer border border-black rounded-none outline-none p-3 lg:p-5 w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown'}/>

                </div>
            }
            <p className='font-roboto font-light text-sm tracking-[0.32px] text-customGrey absolute -bottom-5'>{infoInput}</p>

        </div>
    )
}

export default InputUl