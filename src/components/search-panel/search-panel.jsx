import React, {useEffect, useState, useCallback} from 'react';
import {TfiClose} from "react-icons/tfi";
import {HotelCard, ImgUI} from "@/components/index";
import {useTranslation} from "react-i18next";
import {useQuery, useQueryClient} from "react-query";
import useDebounce from "@/hook/useDebounce";
import apiService from "@/service/axois";
import {langSelect} from "@/helper";

const SearchPanel = ({ setIsOpenSearch, isOpenSearch }) => {
    const queryClient = useQueryClient();
    const { t, i18n } = useTranslation();
    const [inputValue, setInputValue] = useState('');
    const debounceInputValue = useDebounce(inputValue, 700);

    const { refetch, data, isSuccess } = useQuery(
        'search-input',
        () => apiService.getData(`/rooms/?search=${debounceInputValue}`),
        { enabled: false }
    );

    useEffect(() => {
        if (debounceInputValue && isOpenSearch) {
            refetch();
        }
    }, [debounceInputValue, isOpenSearch, refetch]);

    const onChangeSearch = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    useEffect(() => {
        if (isOpenSearch) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
            setInputValue('');
            queryClient.removeQueries('search-input');
        }
    }, [isOpenSearch, queryClient]);

    return (
        <div className={`fixed w-screen min-h-screen overflow-y-scroll h-fit right-0 backdrop-blur-2xl bg-white/70 py-5 md:py-10 left-0 z-[102] duration-200 ${isOpenSearch ? "top-0" : "-top-[200%]"}`}>
            <div className="container relative flex flex-col justify-center items-center">
                <button onClick={() => setIsOpenSearch(false)} className="self-end p-2 border duration-200 hover:bg-brown hover:text-white border-brown">
                    <TfiClose />
                </button>
                <div className="w-full md:max-w-[700px] mb-10 mt-5">
                    <input
                        type="text"
                        value={inputValue}
                        id="search"
                        placeholder={t('navbar.searching')}
                        maxLength={20}
                        onChange={onChangeSearch}
                        className="cursor-pointer border border-black rounded-none outline-none p-3 lg:p-5 w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown"
                    />
                </div>
                {isSuccess && (
                    data?.count > 0 ? (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
                            {data.results.map(card => (
                                <div key={card.id} onClick={() => setIsOpenSearch(false)}>
                                    <HotelCard
                                        imgs={card.images}
                                        id={card.id}
                                        cardTitle={langSelect(i18n.language, card.title_ru, card.title_en, card.title_uz)}
                                        descriptions={card.information}
                                        capacity={card.capacity}
                                        num_balconies={card.num_balconies}
                                        room_size={card.room_size}
                                        num_bathrooms={card.num_bathrooms}
                                        href={`/rooms/${card.slug}`}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='flex flex-col items-center gap-5'>
                            <h2 className='text-4xl text-center font-elegance'>{t('notFound.text')}</h2>
                            <div className='w-full md:w-[500px] aspect-video lg:w-[600px] relative'>
                                <ImgUI src='/image/no-room-found.png' objectFitContain alt='not found' />
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default SearchPanel;
