import {ButtonUI, Modal, ReviewCard,  SectionTitle, SectionUI} from '@/components'
import InputUl from '@/components/ui/Input-UI'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import {indexSEO} from '@/SEO/SEO.config'
import SEO from '@/SEO/SEO'
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import apiService from "@/service/axois";
import {useRouter} from "next/router";
import axios from "axios";
import BeSearchForm from "../components/be-forms/be-search-form";
import BeReviewsForm from "../components/be-forms/be-reviews-form";

const Reviews = ({feedback}) => {
  const router = useRouter();
  const {t} = useTranslation()
  const {register,reset,
    handleSubmit
  } = useForm();


  const {
    mutate: userPost,
    data: userPostData,
    isSuccess: userPostSuccess,
  } = useMutation(({url, data}) => apiService.postData(url, data));
  const onSubmit = (data) => {
    const reviewsUser = {
      fullname: data?.fullname,
      description: data?.description,
      phone: data?.phone ,
      title:data?.title,
      country: data?.country
    }

    userPost({url: "/pages/feedback/", data: reviewsUser});
    reset();
  };

  useEffect(() => {
    if (userPostSuccess) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [userPostData]);


  const {lang} = useSelector(state => state.langSlice)
  
  return (
    <div>
      <SEO
              ogImage={'/logo.png'}
              title={indexSEO[lang].title}
              description={indexSEO[lang].description}
              ogTitle={indexSEO[lang].ogTitle}
              ogDescription={indexSEO[lang].ogDescription}
              twitterHandle={indexSEO[lang].twitterHandle}
            />
      <SectionUI bgFigureTopPostion={'top-0 left-0'} padding={'py-10 lg:pb-[50px] pt-10'}>
        <BeSearchForm/>
        <SectionTitle title={t('reviews.title')} justify={'justify-center'} />
        <form onSubmit={handleSubmit(onSubmit)} className='mt-5 flex flex-col gap-8'>
          <div className='flex flex-col md:flex-row justify-between gap-x-[30px] gap-y-[15px]'>
            <InputUl id={'fullname'} name={'fullname'} labelText={t('reviews.surnameEN')}
                     placeholder={t('booking.form.surnameEN')} formname={...register('fullname')} />
            <InputUl id={'country'} name={'country'} labelText={t('reviews.country')}
                     placeholder={t('reviews.countryPlaceholder')} formname={...register('country')}/>
          </div>
            <textarea name="description" id="description" rows="5" placeholder={t('reviews.review')} {...register('description')}
                      className='cursor-pointer border border-black rounded-none outline-none p-3 lg:p-5  w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown'></textarea>

          <div className="flex flex-col items-center">
            <ButtonUI text={t('btn.sendMesseng')} typeClassBtn={'btn-gold'} typeBtn={'submit'}/>

          </div>
        </form>
      </SectionUI>
      <SectionUI padding={'pb-10 md:pb-16 lg:pb-[100px] space-y-10 md:space-y-20'}>
        <div className={'mb-5'}>
          <SectionTitle title={t('reviews.reviewClients')} justify={'justify-center'} />
        </div>
        <div className={'mb-5'}>
          <BeReviewsForm/>
        </div>
        <div className='pt-10 space-y-10 overflow-y-auto max-h-[300px] md:max-h-[500px] border-y border-brown shadow'>
          {
            feedback.map(review => (
              <ReviewCard key={review?.id} name={review?.fullname} country={review?.country} date={review?.created_at} title={review?.title} text={review?.description} />
            ))
          }
        </div>
      </SectionUI>
      {
        userPostSuccess &&   <Modal  isOpenModal={userPostSuccess}  content={t('modal.questionCorrect')}/>
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
  const [feedback ] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/feedback/approved/`),

  ]);
  return {
    props: {
      feedback: feedback?.data,
    },
  }
}

export default Reviews