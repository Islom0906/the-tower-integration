import { Slider} from "@/components";

const Header = ({home}) => {
  return (
    <>

    
    <header className='relative h-screen'> 
      <Slider  SliderContent={home} isHeader={true}   PaginationMod={false} priority={true}  />
    </header>
    </>
  )
}

export default Header