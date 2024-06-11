import {Footer, Navbar, TopNav} from "@/components/index";
import {useEffect} from "react";
import Aos from "aos";
import {useQuery} from "react-query";
import apiService from "@/service/axois";

const Layout = ({ children }) => {

    const { data: contact  , refetch: contactRefetch,  } = useQuery("contact", () =>
        apiService.getData( '/pages/contact') , { enabled: false}
    );

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (isMounted) {
        await contactRefetch();
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [contactRefetch]);

  useEffect(() => {
    Aos.init({
      once: true
    });
    return () => {
      Aos.refresh();
    };
  }, []);

    return (
        <div className={'font-openSans'}>
            <TopNav contact={contact} />
            <Navbar/>
            <section >
                {children}
            </section>
            <Footer contact={contact} />
        </div>
    );
};

export default Layout;