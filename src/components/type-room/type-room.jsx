import {useDispatch, useSelector} from "react-redux";
import {changleTypeBooking} from "@/slice/booking";
import {langSelect} from "@/helper";

const TypeRoom = ({type}) => {
    const  {lang} = useSelector(state => state.langSlice)
    const dispatch = useDispatch()

    const selectType = (item) => {
        dispatch(changleTypeBooking(item))

    }

    return (
        <div className={'bg-white z-50 shadow-md border border-brown'}>
            {
                type?.map((item)=> (
                    <div key={item?.slug}
                         className={`px-4 md:px-4 py-1 md:py-3 font-roboto text-black/80 hover:bg-brown/30  text-sm cursor-pointer  `}
                        onClick={()=>selectType(item)}
                    >
                        {langSelect(lang , item?.title_ru , item?.title_en , item?.title_uz)}
                    </div>
                ))
            }
        </div>
    );
};

export default TypeRoom;