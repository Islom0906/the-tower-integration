import moment from "moment";



const ReviewCard = ({name,  country,  date, text}) => {


  return (
    <div className='border border-brown  rounded-none outline-none shadow-md p-5 lg:p-[30px] w-full font-roboto font-light tracking-[0.36px] xl:text-lg'>
      <div className='md:flex gap-x-5 md:gap-x-[38px]'>
        <div className='flex flex-col  md:w-[20%] lg:w-[10%] justify-between  mr-4 mb-2 gap-3 md:gap-5'>
          <div className='space-y-[5px]'>
            <h4 className='text-sm font-medium'>{name}</h4>
            <div className='flex items-center gap-x-[6px]'>

              <p className='text-xs'>{country}</p>
            </div>
          </div>
        </div>
        <div className='space-y-2 md:w-[80%] lg:w-[90%]'>
          <p className='text-xs font-light'>  {   moment(date).format('L') }</p>
          <p className='md:text-lg'>{`«${text}»`}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard