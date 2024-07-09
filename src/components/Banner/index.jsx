import styled from "styled-components"
import banner from "./banner.png"
import SelectedVideo from "../SelectedVideo"

const ContainerImg = styled.div`
position: relative;
background-image: url(${banner});
background-size: auto;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 90vh;

@media (max-width: 768px){
    display: none;
}

`
const Gradient = styled.div`
background: rgba(0, 18, 51, 0.56);
width:100%;
height: 100%;
top: 0;
left: 0;
`

const Banner = ({ selectedVideo, categoryColor }) => {

    const catColor = selectedVideo ? categoryColor(selectedVideo.categoria) : {}
    return (
        <ContainerImg>
            <Gradient className="gradient">
                <SelectedVideo video={selectedVideo} $catcolor={catColor} />
            </Gradient>
        </ContainerImg>
    )
}

export default Banner