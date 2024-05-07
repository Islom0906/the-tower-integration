import {LittleTitleUI, SectionTitle, SectionUI, InputUI,InputDateUI, ButtonUI, SelectOptionUI, Modal} from '@/components/'
import { useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changleTypeBooking, clearBooking} from "@/slice/booking";
import SEO from '@/SEO/SEO';
import {bookingSEO} from "@/SEO/SEO.config"
import { t } from 'i18next';
import {useMutation} from "react-query";
import apiService from "@/service/axois";
import moment from "moment";
import axios from "axios";
import {langSelect} from "@/helper";
import {useRouter} from "next/router";

const Booking = ({roomsTypeGet}) => {
  const {timeBooking ,typeBooking ,countRoomBooking ,countOlderBooking ,countChildrenBooking} = useSelector(state => state.bookingSlice)
  const router = useRouter();
  const dispatch = useDispatch()
  const {register,reset,
    handleSubmit
  } = useForm();

  const {
    mutate: userPost,
    isSuccess: userPostSuccess,
  } = useMutation(({url, data}) => apiService.postData(url, data));
const [selectOptionName , setSelectOptionName] = useState(null)


useEffect(() => {
  if(selectOptionName?.name === 'typeNomer') {
    dispatch(changleTypeBooking(selectOptionName?.value))
  }
}, [selectOptionName])

  const {lang} = useSelector(state => state.langSlice)



  const onSubmit = (data) => {
    const bookingUser = {
         check_in_date: moment(timeBooking[0]).format('L') ,
      check_out_date: moment(timeBooking[1]).format('L'),
       room_type: typeBooking.slug,
       rooms_count: countRoomBooking,
        adults_count: countOlderBooking,
        children_count: countChildrenBooking,
        first_name: data.firstName,
        last_name: data.surName,
        phone: data.phoneBooking,
        email: data.email,
        questions: data.complete_information
    }
    userPost({url: "/reservations/", data: bookingUser});
    reset();
    dispatch(clearBooking())
    setTimeout(() => {router.push('/')} ,[2000])
  };

    return (
    <div className="wrapper">
       <SEO
              ogImage={'/logo.png'}
              title={bookingSEO[lang].title}
                description={bookingSEO[lang].description}
                ogTitle={bookingSEO[lang].ogTitle}
                ogDescription={bookingSEO[lang].ogDescription}
                twitterHandle={bookingSEO[lang].twitterHandle}
            />
      <SectionUI padding={'py-10 md:py-20  md:pb-[90px]'}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5 md:space-y-10">
            <div>
              <SectionTitle title={t('booking.headerTitle')}  subTitle={t('booking.headerSubtitle')} justify={'justify-center'}/>
            </div>
            <div className=" flex flex-col items-center">
              <LittleTitleUI content={t('booking.form.title')}/>
              <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 md:gap-[30px] max-w-[800px]">
                <InputDateUI  startDateUpdate={timeBooking[0]} setSelectOptionName={'startDay'} labelText={t('booking.form.arrival')} type={'date'}  id={'chechIn'} />
                <InputDateUI  startDateUpdate={timeBooking[1]} setSelectOptionName={'endDay'} labelText={t('booking.form.departure')} type={'date'} />
                <SelectOptionUI SelectOptionName={langSelect(lang, typeBooking?.title_ru ,typeBooking?.title_en ,typeBooking?.title_uz)} labelOption={'typeNomer'} labelText={t('index.headerBooking.typeOfNumber')} selectList={roomsTypeGet} setSelectOptionName={setSelectOptionName} />
                <InputUI type={'number'} changleName={'room'} value={countRoomBooking} placeholder={t('index.headerBooking.room')}   labelText={t('index.headerBooking.room')}    />
                <InputUI type={'number'} changleName={'old'} value={countOlderBooking} labelText={t('booking.form.adults')}  placeholder={t('booking.form.adults')}   />
                <InputUI type={'number'} changleName={'childer'} value={countChildrenBooking} labelText={t('booking.form.children')}  placeholder={t('booking.form.children')}  />
                <InputUI type={'text'} name={'surName'} labelText={t('booking.form.surnameEN')} placeholder={t('booking.form.surnameEN')}    formname={...register('surName')} />
                <InputUI type={'text'}  name={'firstName'} labelText={t('booking.form.nameEN')} placeholder={t('booking.form.nameEN')}    formname={...register('firstName')} />
                <InputUI type={'number'} labelText={t('booking.form.number')} placeholder={'+1234567890'}    formname={...register('phoneBooking')} />
                <InputUI name={'email'} type={'email'} labelText={t('booking.form.email')} placeholder={'example@gmail.com'}    formname={...register('email')} />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <LittleTitleUI content={t('booking.request.title')} />
              <div className="max-w-[800px] ">
                <textarea {...register('complete_information')} name={'complete_information'} id="textarea" placeholder={t("booking.request.textarea")} cols={100} className="cursor-pointer border w-full border-black rounded-none outline-none p-3 lg:p-5 h-[100px] lg:h-[200px] font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown"></textarea>

              </div>
            </div>
            <div className="flex flex-col items-center">
                <ButtonUI  text={t('btn.booking')}  typeClassBtn={'btn-gold'} typeBtn={'submit'} />
            </div>
          </form>
      </SectionUI>

      {
        userPostSuccess &&
      <Modal  isOpenModal={userPostSuccess} content={t('modal.questionCorrect')}/>
      }
    </div>
  )
}
export async function getServerSideProps({ res}) {
  res.setHeader(
      "Cache-Control",
      "no-cache"
  );
  // Fetch data from external API
  const [roomsTypeGet ] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rooms-simple/`),

  ]);
  return {
    props: {
      roomsTypeGet: roomsTypeGet?.data,
    },
  }
}
export default Booking

