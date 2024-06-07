import {ButtonUI, RoomsCharacterList, Slider} from "@/components";
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";

const RoomsRow = ({card  , order}) =>  {
    const {t , i18n} = useTranslation()

    const roomTypes = [
        {
            roomId: 1,
            beRoomType: '5026118'
        },
        {
            roomId: 2,
            beRoomType: '5026117'
        },
        {
            roomId: 3,
            beRoomType: '5026116'
        },
        {
            roomId: 4,
            beRoomType: ''
        },
        {
            roomId: 5,
            beRoomType: '5026112'
        },
        {
            roomId: 6,
            beRoomType: '5026114,5026115'
        },
    ]

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center max-md:mb-5 ${order % 2 === 0}  `}>
            <div data-aos='fade-out' className={`aspect-video md:aspect-[10/8] ${order % 2 === 0 ? 'order-2 md:order-1' : 'order-1 md:order-2'}`}>
                <Slider SliderContent={card.images} PaginationInner={true}/>
            </div>
            <div className={`space-y-2 md:space-y-7 ${order % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <h3 data-aos='fade-left' className={' text-2xl md:text-3xl lg:text-[40px] font-elegance'}>
                    {langSelect( i18n.language,card?.title_ru, card?.title_en , card?.title_uz )}
                </h3>
                <p data-aos='fade-left' data-aos-delay='100' className={' text-base md:text-lg text-[#575757]'}>
                    {langSelect(i18n.language ,card?.description_ru, card?.description_en , card?.description_uz )}
                </p>
                <RoomsCharacterList num_balconies={card?.num_balconies} room_size={card?.room_size} capacity={card?.capacity} num_bathrooms={card?.num_bathrooms}  />
                <div data-aos='fade-up' className={'flex gap-x-5'}>
                 <ButtonUI  text={t('btn.booking')} href={'/reservation?room-type=' + (card ? roomTypes.filter((roomType) => roomType.roomId === card.id)[0].beRoomType : '')}   />
                 <ButtonUI  btnBorder={true} text={t('btn.more')} href={`/rooms/${card?.slug}`}   />
                </div>
            </div>
        </div>
    );
}

export default RoomsRow;