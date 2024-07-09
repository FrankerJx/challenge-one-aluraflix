import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
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
    color: #FFF;
    background-color: #2271D1;
}

& .title{
    font-size: 40px;
    margin-bottom: 0;
}

& .subtitle{
    font-size: 24px;
    white-space: wrap;
    padding: 35px 0;
}

& .desc{
    margin: 0;
}

& .img-video-container{
    margin-right: 3%;
    width: 40%;
    background-color: rgba(34, 113, 209, .5);
    border-radius: 15px;
    height: 40%;
    padding: 5px 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
}

.img-video{
    width: 100%;
    height: 100%;
    border: 4px solid;
    border-radius: 15px;
}

.mobile{
    display: none;
}

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 15px 0;

    .info-container{
        margin-left: 3%;
        width: 90%;
    }

    .img-video-container{
        margin: 0;
    }

    .desk{
        display: none;
    }

    .mobile{
        display: initial;
        margin: 10px 0 35px 0;
        padding: 0;
    }

    .img-video-container{
        width: 90%;
    }

    .title{
        font-size: 32px;
        margin: 0;
    }

}

`

const NoSelection = () => {
    return (
        <Container >
            <div className="info-container">
                <span className="category" >AluraFlix</span>
                <p className="title desk">Challenge React</p>
                <p className="desc desk">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className="img-video-container">
                <span className="span title">Ningun video seleccionado</span>
                <span className="span subtitle">Selecciona un video para empezar</span>
            </div>
            <div className="mobile">
                <p className="title">Challenge React</p>
                <p className="desc">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
        </Container >
    )
}

export default NoSelection