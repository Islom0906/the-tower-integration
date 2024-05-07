import moment from "moment";
import {IoCalendarOutline} from "react-icons/io5";
import DatePicker from "react-datepicker";
import {changleEndTimeBooking, changleStartTimeBooking} from "@/slice/booking";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const InputDateUI = ({ startDateUpdate  , labelText,setSelectOptionName  }) => {
    const [openDropdown, setOpenDropdown] = useState(false)

    const dispatch = useDispatch()
    moment.locale('uz');
    const inputHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setOpenDropdown(!openDropdown)
    }
    const handleDateChange = (date) => {
        if(setSelectOptionName === 'startDay') {
            dispatch(changleStartTimeBooking(`${date}`))
        }else if(setSelectOptionName === 'endDay') {
            dispatch(changleEndTimeBooking(`${date}`))
        }
    };

    useEffect(() => {
        const handleWindow = () => {
            setOpenDropdown(false)
        }
        window.addEventListener('click', handleWindow)
        return () => {
            window.removeEventListener('click', handleWindow)
        }


    }, [openDropdown]);


    return (
        <div className={'relative space-y-3 flex flex-col w-full  justify-end'} >
            {
                labelText && <label className='font-roboto font-light tracking-[0.4px] md:text-lg xl:text-xl text-black   '>{labelText}</label>
            }

                    <div className='relative flex flex-col justify-center'>

                        <p onClick={inputHandler} className={'cursor-pointer border border-black rounded-none outline-none p-3 lg:p-5 w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown'}>
                            {startDateUpdate ?    moment(startDateUpdate).add(0, 'days').calendar(): labelText}
                        </p>
                             <IoCalendarOutline onClick={inputHandler} className={`absolute duration-200 right-5 text-2xl cursor-pointer   ${openDropdown ? 'text-brown' : 'text-black' }`} />
                    </div>
                    {
                         <div className={`inline absolute top-28 z-10 left-0 ${openDropdown ? 'block' : 'hidden'} `}>{ <DatePicker
                            selected={startDateUpdate}
                            onChange={handleDateChange}
                            startDate={startDateUpdate}
                            onCalendarClose
                            onCalendarOpen
                            dataFormat={'dd/MM/yyyy'}
                            inline
                            monthsShown={1}
                            minDate={moment().add(0, 'days').toDate()}
                        />}</div>
                    }
        </div>
    );
};

export default InputDateUI;