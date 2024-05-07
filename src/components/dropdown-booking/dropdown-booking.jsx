import {FaAngleDown} from "react-icons/fa6";
import {CgArrowLongRight} from "react-icons/cg";
import {useEffect, useRef, useState} from "react";


const DropdownBooking = ({title, subTitle, titleSecond, subTitleSecond, children}) => {
    const [isShowDropdown, setIsShowDropdown] = useState(false)
    const dropDownRef=useRef(null)

    const handleDropdown = () => {
        setIsShowDropdown(prevState => !prevState)
    }
    useEffect(() => {
        const handleWindow = () => {
            setIsShowDropdown(false)
        }

        window.addEventListener('click', handleWindow)


        return () => {
            window.removeEventListener('click', handleWindow)
        }


    }, [isShowDropdown]);


    return (
        <div ref={dropDownRef}  onClick={(e)=>e.stopPropagation()}>

            {
                titleSecond ?
                    <div className={' flex items-center gap-3 md:gap-5 lg:gap-7 xl:gap-12'}>
                        <div>

                            <h5 className={'text-brown text-sm sm:text-lg text-center sm:text-start font-elegance font-light '}>
                                {title}
                            </h5>
                            <button className="py-1 md:py-2  flex items-start gap-2"
                                    onClick={handleDropdown}
                            >
                          <p className={'text-black/80 text-center sm:text-start text-base  font-roboto'}>
                            {subTitle}
                          </p>
                                <FaAngleDown className={` text-sm  text-black duration-100 flex-shrink-0 mt-1.5`}/>
                            </button>
                        </div>
                        <CgArrowLongRight className={'text-base sm:text-xl lg:text-2xl text-brown flex-shrink-0'}/>
                        <div>

                            <h5 className={'text-brown text-sm sm:text-lg text-center sm:text-start font-elegance font-light  '}>
                                {titleSecond}
                            </h5>
                            <button className="py-1 md:py-2 flex items-start gap-2"
                                    onClick={handleDropdown}
                            >
                          <p className={'text-black/80 text-center sm:text-start text-base  font-roboto'}>
                            {subTitleSecond}
                          </p>
                                <FaAngleDown className={` text-sm  text-black duration-100 flex-shrink-0 mt-1.5`}/>
                            </button>
                        </div>
                    </div>
                    :
                    <>
                        <h5 className={'text-brown text-sm sm:text-lg text-center sm:text-start font-elegance font-light '}>
                            {title}
                        </h5>
                        <button className="py-2  flex items-start gap-2"
                                onClick={handleDropdown}>
                          <span className={'text-black/80 text-center sm:text-start text-base font-roboto'}>
                            {subTitle}
                          </span>
                            <FaAngleDown className={` text-sm  text-black duration-100 flex-shrink-0 mt-1.5`}/>
                        </button>
                    </>
            }
            <div
                className={`${isShowDropdown ? '' : 'hidden'} z-[50] absolute top-[${dropDownRef?.current?.offsetTop}px]  lg:top-full  max-lg:-translate-x-1/2 max-lg:left-1/2 left-[${dropDownRef?.current?.offsetLeft}px] w-auto`}>
                {children}
            </div>
        </div>
    );
};

export default DropdownBooking;