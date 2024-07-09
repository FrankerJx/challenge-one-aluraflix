import { useEffect, useState } from "react"
import styled from "styled-components"
import trashIcon from "/icons/trash-icon.png"
import editIcon from "/icons/edit-icon.png"

const VidContainer = styled.section`
margin: 3%;
margin-right: 0;

`

const Category = styled.div`
font-size: 30px;
font-weight: 600;
border-radius: 15px;
width: 400px;
white-space: nowrap;
display: inline-block;
text-align: center;
& p{
  margin: 0 15px;
  padding: 0;
  color: #151515;
}
`
const CardsContainer = styled.div`
display: flex;
justify-content: flex-start;
gap: 5px;
margin-top: 35px;
overflow-x: auto;
margin-top: 15px;

&::-webkit-scrollbar{
  height: 8px;
  background-color: rgba(34, 113, 209, .17);
  border-radius: 20px;
}

&::-webkit-scrollbar-thumb  {
  background-color: #2271D1;
  border-radius: 6px;
}

`

const Card = styled.div`
max-width: 370px;
min-width: 370px;
border: 4px solid;
border-radius: 15px;
margin: 15px 10px ;

&:hover{
  box-shadow: ${props => `0 0 15px 3px ${props.$catAlfa}`};
  transition: .5s;
}


& .img_video,
  .img_video-mobile{
  width: 100%;
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px; 
  border-bottom: 4px solid;
  display: block;
  cursor: pointer;
 
  @media (min-width: 769px) { 
    &:hover{
      transform: scale(.98);
      transition: 0.5s;
    } 
  }
}

& button{
  background: transparent;
  color: #ffffff;
  width: 50%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: #000;

  & .btn_icon{
    height: 24px;
    width: auto;
    margin-right: 10px;
  }

}

.btn-delete{
  border-bottom-left-radius: 10px;
} 

.btn-delete:hover{
  background-color: #E53935;
  border-bottom-left-radius: 10px;
  transition: 1s;
}

.btn-edit{
  border-bottom-right-radius: 10px;
}

.btn-edit:hover{
  background-color: rgba(0, 0, 0, .4);
  border-bottom-right-radius: 10px;
  transition: 1s;
}

.url_vid-mobile, 
.img_video-mobile{
    display: none;
  }

@media (max-width: 768px) {
  .url_vid-mobile, 
  .img_video-mobile{
    display: initial;
  }

  .img_video-mobile{
  display: block;
  }


  .img_video{
    display: none;
  }
}

`


const VideoList = ({ data, onEdit, onSelectedVideo }) => {

  const { category, mainColor, colorAlfa } = data

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://668218a304acc3545a083e35.mockapi.io/flixApi/videos")
      .then((response) => {
        return response.json()
      })
      .then((videosFetch) => {
        setVideos(videosFetch)
      })
  }, [])

  const videoDelete = (id) => {
    fetch(`https://668218a304acc3545a083e35.mockapi.io/flixApi/videos/${id}`, {
      method: "DELETE",
    }).then(response => {
      if (response.ok) {
        setVideos(videos.filter((video) => video.id !== id))
      }
    })
  }

  const videoFilter = videos.filter(vid => vid.categoria === category)
  const noVideosFound = videos.length > 0 && videoFilter.length === 0;

  return (<>
    {videoFilter.length > 0 &&
      <VidContainer >
        <Category style={{ backgroundColor: mainColor }}>
          <p>{category}</p>
        </Category>
        <CardsContainer >
          {videoFilter.map(vid => {
            return (
              <Card $catAlfa={colorAlfa}
                style={{ borderColor: mainColor, background: mainColor }}
                key={vid.id} >
                <a className="url_vid-mobile" target="_blank" href={vid.url}>
                  <img style={{ borderBottomColor: mainColor }}
                    className="img_video-mobile"
                    src={vid.img}
                    alt={vid.titulo}
                    onClick={() => onSelectedVideo(vid)}
                  />
                </a>
                <img style={{ borderBottomColor: mainColor }}
                  className="img_video"
                  src={vid.img}
                  alt={vid.titulo}
                  onClick={() => onSelectedVideo(vid)}
                />
                <button className="btn-delete" onClick={() => videoDelete(vid.id)}>
                  <img className="btn_icon" src={trashIcon} />Borrar</button>
                <button onClick={() => onEdit(vid)}
                  className="btn-edit" >
                  <img className="btn_icon"
                    src={editIcon} />Editar</button>
              </Card>
            )
          })}
        </CardsContainer>
      </VidContainer>
    }
  </>
  )
}

export default VideoList