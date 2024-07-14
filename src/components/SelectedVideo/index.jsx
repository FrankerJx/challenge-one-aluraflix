import styled from "styled-components"
import NoSelection from "./NoSelection"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
height: 100%;

& .info-container{
    margin-left: 3%;
    width: 45%;
}

& .category{
    font-size: 30px;
    font-weight: 600;
    padding: 1% 4%;
    border-radius: 15px;
    white-space: nowrap;
    color: #151515;
}

& .title{
    font-size: 40px;
    margin-bottom: 20px;
    line-height: 1;
}

& .desc{
    margin: 0;
}

& .cta{

}

& .img-video-container{
    margin-right: 3%;
    width: 40%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-video{
    width: 100%;
    height: 100%;
    border: 4px solid;
    border-radius: 15px;
    &:hover{
transform: scale(1.025);
transition: 0.5s;
 } 
} 

.mobile{
    display: none;
}

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 15px 0;
    justify-content: space-around;

    .info-container{
        margin-left: 3%;
        width: 90%;
        z-index: 3;
    }

    .img-video-container{
        margin-right: 0;
        width: 75%;
        margin-top: -20px;
    }

    .desk{
        display: none;
    }

    .mobile{
        display: initial;
        margin: 10px 10px 35px 10px;
        padding: 0;
    }

    .title{
        display: none;
    }

}

`

const SelectedVideo = ({ video, $catcolor }) => {
    const { mainColor, colorAlfa } = $catcolor

    const bgColor = { backgroundColor: mainColor }
    const border = { borderColor: mainColor }
    const boxShadow = { boxShadow: `0 0 29px 5px ${colorAlfa}` }

    if (!video) {
        return <NoSelection />
    }

    const { categoria, titulo, descripcion, img, url } = video

    return (
        <Container $catcolor={$catcolor}>
            <div className="info-container">
                <span className="category" style={bgColor} >{categoria}</span>
                <p className="title desk">{titulo}</p>
                <p className="desc desk">{descripcion}</p>
                <p className="cta"><em><b>-- Da clic en la imagen para saber más --&gt;</b></em></p>
            </div>
            <div className="img-video-container">
                <a className="url_vid" target="_blank" href={url}>
                    <img className="img-video" src={img} alt={titulo} style={{ ...border, ...boxShadow }} />
                </a>
            </div>
            <div className="mobile">
                <p className="title">{titulo}</p>
                <p className="desc">{descripcion}</p>
            </div>
        </Container>
    )
}

export default SelectedVideo