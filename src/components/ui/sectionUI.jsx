import {ImgUI} from "@/components";

const SectionUI = ({children , bgGold, padding  , bgFigureTopPostion  ,bgFigureBottomPostion,centerFigure , langmark}) => {


  return (
    <>
        <section className={`relative overflow-hidden ${bgGold ? 'bg-brown py-10  md:py-[90px]' : `bg-white  ${padding}`}`}>
          
          {
            bgFigureTopPostion &&
          <div className={` ${bgFigureTopPostion ? bgFigureTopPostion : " -top-10 left-0"} rotate-180 absolute image-animate-scale   w-full  h-[200px] z-[1] hidden md:block`}>
            <ImgUI src={'/image/pattern.png'}  alt={'banner'}  />
          </div>
          }
          {
            centerFigure &&
            <div className="h-full w-[30%] hidden lg:block absolute top-0 right-0 z-[1]">
            <ImgUI src={'/image/room-figure.png'}  alt={'banner'}/>
          </div>
          }
          <div className="container relative z-[6]">
          {
            children
          }
          </div>
          
          {
            bgFigureBottomPostion &&
          <div className={` ${bgFigureBottomPostion ? bgFigureBottomPostion : " bottom-0 left-0"} absolute  w-full  h-[300px] z-[1]`}>
            <ImgUI src={'/image/pattern.png'}  alt={'banner'} />
          </div>
          }
            {
                langmark &&
                <div className='absolute bottom-0 left-0 right-0 z-[1] h-full w-full '>
                    <ImgUI src={'/image/bg.svg'} imageStyle={'w-full'}  alt={'locations'}/>
                </div>
        }
    </section>
</>
)
}

export default SectionUI