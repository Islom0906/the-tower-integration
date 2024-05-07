import React from 'react'

const LittleTitleUI = ({content}) => {
  return (
    <>
      <h3 className='font-roboto font-light mb-6 md:mb-[50px] text-center border-b pb-[13px] w-full border-black text-xl md:text-2xl lg:text-3xl xl:text-[32px]'>{content}</h3>
    </>
  )
}

export default LittleTitleUI