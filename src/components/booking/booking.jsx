import {ButtonUI, DropdownBooking, NumberGuests, TypeRoom} from "@/components";
import {useEffect, useState} from "react";
import DatePicker from 'react-datepicker'
import moment from "moment";
import 'moment/locale/uz'
import { useTranslation } from 'react-i18next'
import {useDispatch, useSelector} from "react-redux";
import { changleTimeBooking } from "@/slice/booking";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {langSelect} from "@/helper";





const Booking = () => {
    moment.locale('uz')
    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)
    const dispatch = useDispatch();
    const { timeBooking ,typeBooking ,countRoomBooking ,countOlderBooking ,countChildrenBooking} = useSelector(
        (state) => state.bookingSlice);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const { data: typeRoom  , refetch: typeRoomRefetch} = useQuery("typeRoom", () =>
        apiService.getData( 'rooms-simple/') , { enabled: false}
    );

    useEffect(() =>{
        typeRoomRefetch()
    } , [])




    const handleDateChange = (date) => {
        dispatch(changleTimeBooking([`${date[0]}` ,`${date[1]}`]))
        setStartDate(date[0])
        setEndDate(date[1])
    };

    return (
        <div
            className={'container z-100  absolute bottom-10 md:bottom-[125px] left-1/2 -translate-x-1/2   z-10  '}>
    <div className={'bg-white py-2 shadow-xl md:py-4 lg:py-6 px-5 sm:px-[35px] md:px-[50px]  xl:px-[70px] flex lg:flex-row flex-col items-center justify-center gap-2 md:gap-5 xl:gap-12'}>

            <DropdownBooking
                title={t('index.headerBooking.checkIn')}
                subTitle={timeBooking[0] ? moment(timeBooking[0]).format('ll') : t('index.headerBooking.entryDay')}
                titleSecond={t('index.headerBooking.departure')}
                subTitleSecond={timeBooking[1] ? moment(timeBooking[1]).format('ll') : t('index.headerBooking.departureDay')}>
                <DatePicker
                    selected={null}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    dataFormat={'dd/MM/yyyy'}
                    inline
                    monthsShown={2}
                    minDate={moment().add(0, 'days').toDate()}
                />
            </DropdownBooking>
            <div className={'bg-brown w-full lg:w-[2px] h-[1px] md:h-0.5 lg:h-6 relative z-10'}/>

            <DropdownBooking
                title={t('index.headerBooking.numberOfGuests')}
                subTitle={`${countRoomBooking} ${t('index.headerBooking.room')} ${countOlderBooking} ${t('index.headerBooking.adults')}, ${countChildrenBooking} ${t('index.headerBooking.children')}`}
            >
                <NumberGuests  />
            </DropdownBooking>
            <div className={'bg-brown w-full lg:w-[2px] h-[1px] md:h-0.5 lg:h-6 relative z-10'}/>
            <DropdownBooking
                title={t('index.headerBooking.typeOfNumber')}
                subTitle={ langSelect(lang, typeBooking?.title_ru ,typeBooking?.title_en ,typeBooking?.title_uz)|| t('index.headerBooking.choose')}
            >
                <TypeRoom type={typeRoom} />
            </DropdownBooking>
            <div >
                <ButtonUI text={t('btn.booking')} href={'/booking'} />
            </div>
    </div>
        </div>
    )
        ;
};

export default Booking;
