import { CiMenuFries, CiSearch } from "react-icons/ci";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ImgUI } from "@/components";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import debounce from 'lodash/debounce';

const SearchPanel = dynamic(() => import('@/components/search-panel/search-panel'), { ssr: false });

const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [state, setState] = useState({
    navOpen: false,
    isOpenSearch: false,
    isNavScroll: false,
  });

  const navLinks = useMemo(
      () => [
        { name: 'navbar.home', link: '/' },
        { name: 'navbar.about', link: '/about' },
        { name: 'navbar.rooms', link: '/rooms' },
        { name: 'navbar.gallery', link: '/gallery' },
        { name: 'navbar.contact', link: '/contact' },
        { name: 'navbar.news', link: '/news' },
      ],
      []
  );

  const toggleNav = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      navOpen: !prevState.navOpen,
    }));
  }, []);

  const closeNav = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      navOpen: false,
    }));
    document.body.classList.remove('overflow-hidden');
  }, []);

  const handleScroll = useCallback(
      debounce(() => {
        setState((prevState) => ({
          ...prevState,
          isNavScroll: window.scrollY > 36,
        }));
      }, 100),
      []
  );

  useEffect(() => {
    if (state.navOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [state.navOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
      <>
        <nav className={`bg-[#FFFFFF] py-3 w-full z-[100] sticky left-0 top-0 shadow-md`}>
          <div className="container flex justify-between font-roboto">
            <div className="flex items-center gap-3 md:gap-7">
              <Link href="/" className={'relative block w-12 md:w-16 h-9 md:h-12'}>
                <ImgUI src={'/image/the-tower.png'} alt={'Tower'} objectFitContain={true} />
              </Link>
              <Link href="/" className={'relative block w-20 h-5 md:w-24'}>
                <ImgUI src={'/image/hotel-pro.svg'} alt={'Tower'} objectFitContain={true} />
              </Link>
            </div>
            <div className="flex items-center">
              <ul
                  className={`${state.navOpen ? 'right-0' : '-right-[150%]'} ${
                      state.isNavScroll ? 'top-[60px] md:top-[72px]' : 'top-[95px] md:top-[105px]'
                  } pt-10 lg:pt-0 flex items-center gap-4 md:gap-[30px] xl:gap-[60px] fixed lg:static text-lg text-black w-full h-screen bg-[#FFFFFFE5] lg:bg-transparent lg:w-auto lg:h-auto flex-col lg:flex-row duration-200 z-10`}>
                {navLinks.map((item) => (
                    <li
                        key={item.name}
                        className="relative before:w-0 before:duration-300 before:h-0.5 before:bg-brown before:absolute hover:before:w-1/2 hover:text-brown duration-300 before:-bottom-2 before:rounded-e-[1px] before:left-1/2 after:w-0 after:duration-300 after:h-0.5 after:bg-brown after:absolute hover:after:w-1/2 after:-bottom-2 after:rounded-s-[1px] text-[#575757] after:right-1/2 font-roboto"
                        onClick={closeNav}>
                      <Link href={item.link}>{t(item.name)}</Link>
                    </li>
                ))}
                {router.pathname !== '/reservation' && (
                    <li>
                      <button
                          onClick={() => setState((prevState) => ({ ...prevState, isOpenSearch: true }))}
                          className={'justify-center items-center p-2 md:border-0 border nav-btn hidden lg:flex'}>
                        <CiSearch className="text-xl lg:text-2xl" />
                      </button>
                    </li>
                )}
              </ul>
              {router.pathname !== '/reservation' && (
                  <div className="lg:hidden mx-3">
                    <button
                        onClick={() => setState((prevState) => ({ ...prevState, isOpenSearch: true }))}
                        className={'flex justify-center items-center p-2 md:border-0 border nav-btn'}>
                      <CiSearch className="text-xl lg:text-2xl" />
                    </button>
                  </div>
              )}
              <div
                  className={`lg:hidden p-2 border duration-200 text-lg ${state.navOpen ? 'nav-active' : 'nav-btn'}`}
                  onClick={toggleNav}>
                <CiMenuFries />
              </div>
            </div>
          </div>
        </nav>
        <SearchPanel setIsOpenSearch={setState} isOpenSearch={state.isOpenSearch} />
      </>
  );
};

export default Navbar;
