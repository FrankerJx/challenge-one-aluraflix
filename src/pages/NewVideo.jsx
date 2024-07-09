import styled from "styled-components"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FormVideo from "../components/FormVideo/FormVideo"
import { categories } from "./Home"
import { useState } from "react"
import MenuMobile from "../components/MenuMobile/MenuMobile"

const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
padding: 35px 0;
/* height: 100vh; */

.title {
    margin-bottom: 0;
    font-size: 45px;
}

.subtitle{
    margin-top: 5px;
    padding-top: 0;
}

`

const FormNewVideo = styled(FormVideo)`
margin-bottom: 80px;

.field_img{
    display: none;
}

@media (max-width: 1024px) {
    width: 90%;
}

@media (max-width: 768px) {
    flex-direction: column;
    width: 90%;

    .fieldContainer{
        width: 100%;
        text-align: center;
    }
    
    label{
        text-align: left;
    }
    .btn_container{
        justify-content: space-between;
    }
}
`

const MenuNew = styled(MenuMobile)`
.icon-home-active, .icon-new-inactive{
    display: none;
}

`


const NewVideo = ({ onSave }) => {

    const [videos, setVideos] = useState([]);
    const extractYTID = (url) => {
        const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    };

    const saveID = (videoData) => {
        const { url } = videoData;
        const idYT = extractYTID(url);

        if (!idYT) {
            alert("La URL del video no es válida.");
            return;
        }

        const urlImage = `https://i.ytimg.com/vi/${idYT}/maxresdefault.jpg`;

        const newVideoData = {
            ...videoData,
            img: urlImage,
        };

        fetch("https://668218a304acc3545a083e35.mockapi.io/flixApi/videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newVideoData),
        })
            .then((response) => response.json())
            .then((newVideo) => {
                setVideos((prevVideos) => [...prevVideos, newVideo]);
                alert("Video guardado exitosamente.");
            })
            .catch((error) => {
                console.error("Error al guardar el video:", error);
                alert("Hubo un error al guardar el video.");
            });
    };

    return (<>
        <Header backgroundColor="rgba(0,0,0,.9)" />
        <Section>
            <div>
                <h1 className="title">NUEVO VIDEO</h1>
                <p className="subtitle">Complete el formulario para crear una nueva tarjeta de video</p>
            </div>
            <FormNewVideo formTitle="Crear Tarjeta" rows="10"
                categories={categories}
                onSave={saveID}
            />
        </Section>
        <Footer />
        <MenuNew />
    </>
    )
}

export default NewVideo