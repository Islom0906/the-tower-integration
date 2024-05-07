import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'



const HotelCardSkeleton = () => {
  return(
    <SkeletonTheme baseColor="#EBEAE8" highlightColor="#D7D3CE">
      <div className='flex flex-col justify-between h-full'>
        <div>
          <div className=' w-full h-[180px] md:h-[250px] xl:h-[300px] object-cover mb-3 lg:mb-5 relative'>
            <Skeleton duration={1} height={'100%'} width={'100%'} />
          </div>
          <div className='md:space-y-3 '>
            <h2><Skeleton duration={1} height={35} width={'100%'} /></h2>
            <div><Skeleton duration={1} height={20} width={'100%'} /></div>
            <a href="#" className="block"><Skeleton duration={1} height={30} width={"40%"} /></a>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-2 mt-2 md:mt-5 sm:flex-row md:items-center'>
          <div className='flex items-center justify-between font-elegance md:flex-col md:items-start w-full'>
            <div className="w-full ">
              <Skeleton duration={1} height={28} width={'100%'}/>
            </div>
            <div className="w-full">
              <Skeleton duration={1} height={28} width={'100%'}/>
            </div>
          </div>
          <div className="h-full w-full ">
            <Skeleton duration={1} height={"100%"} width={'100%'} />
          </div>
        </div>

      </div>
    </SkeletonTheme>
    
  )
}

export default HotelCardSkeleton;
