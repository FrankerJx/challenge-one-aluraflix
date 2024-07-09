import { useState } from "react"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ModalEdit from "../components/ModalEdit"
import VideoList from "../components/VideoList"
import MenuMobile from "../components/MenuMobile/MenuMobile"
import styled from "styled-components"

const MenuHome = styled(MenuMobile)`
.icon-home-inactive, .icon-new-active{
    display: none;

}
`

export const categories = [
    {
        category: "FRONT END",
        mainColor: "#6BD1FF",
        colorAlfa: "rgba(107, 209, 255, .7)"
    },
    {
        category: "BACK END",
        mainColor: "#00c86f",
        colorAlfa: "rgba(0, 200, 111, .7)"
    },
    {
        category: "INNOVACIÓN Y GESTIÓN",
        mainColor: "#FFBA05",
        colorAlfa: "rgba(255, 186, 5, .7)"
    }
]

const Home = () => {

    const [videoEdit, setVideoEdit] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState(null)

    const categoryColor = (category) => {
        const cat = categories.find(cat => cat.category === category)
        return cat ? { mainColor: cat.mainColor, colorAlfa: cat.colorAlfa } : {}
    }

    return (<>
        <Header backgroundColor="#262626" />
        <main>
            <Banner selectedVideo={selectedVideo} categoryColor={categoryColor} />
            {categories.map((categories, index) => <VideoList
                data={categories}
                key={index}
                onEdit={setVideoEdit}
                onSelectedVideo={setSelectedVideo}
            />)
            }
        </main>
        {videoEdit && (
            <ModalEdit video={videoEdit}
                onClose={() => setVideoEdit(null)}
            />
        )}
        <Footer />
        <MenuHome />
    </>)
}

export default Home