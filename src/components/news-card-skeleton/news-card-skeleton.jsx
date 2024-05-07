import React from 'react'
import Skeleton from 'react-loading-skeleton'

const NewsCardSkeleton = () => {
  return (
    <div className='w-full aspect-[16/22] lg:aspect-[16/18] relative overflow-hidden'>
      <Skeleton width={'100%'} height={'100%'} />
    </div>
  )
}

export default NewsCardSkeleton