import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LogoAluraFlix from "../assets/LogoMain.png"
import { Outlet } from "react-router-dom"

const BasePage = () => {

    return (
        <main>
            <Header logo={LogoAluraFlix} />
            <Banner />
            <Outlet url={urlVideos} />
            <Footer logo={LogoAluraFlix} />
        </main>
    )
}

export default BasePage