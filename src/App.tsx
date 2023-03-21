import Navbar from "./scenes/navbar";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import {useEffect, useState} from "react";
import {SelectedPage} from "./shared/type";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

function App() {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home)
            }
            if (window.scrollY !==0) {setIsTopOfPage(false)}
        }
        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll)}
    }, [])

  return (
    <div className="app bg-gray-20">
        <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
        />
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer />

    </div>
  )
}

export default App
