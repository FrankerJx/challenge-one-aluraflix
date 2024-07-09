import styled from "styled-components"
import FormVideo from "../FormVideo/FormVideo"
import closeIcon from "/icons/close.png"
import { categories } from "../../pages/Home"

const Overlay = styled.div`
background: rgba(3,18,47,.76);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 10;
`

const Dialog = styled.dialog`
position: absolute;
top: 50vh;
height: 150%;
border: 5px solid #6BD1FF;
display: flex;
align-items: center;
flex-direction: column;
width: 60%;
background: #03122F;
z-index: 11;
border-radius: 30px;
box-shadow: 0 0 29px 10px rgba(34,113,209,.6);

.btnClose{
    position: absolute;
    background-color: transparent;
    border: none;
    top: 20px;
    right: 20px;
    cursor: pointer;
}

@media (max-width: 768px){
    width: 90%;
    margin: 0 1%;
    height: 980px;
}

`

const FormModal = styled(FormVideo)`
width: 70%;

.form-title{
    font-size: 60px;
    font-weight: bold;
    color: #2271D1;
    margin: 35px 0;
    padding-top: 0;
}


.fieldContainer{
    color: #FFF;
    width: 100%;
}

input, textarea, select {
    width: 100%;
    padding: 13px 0 13px 8px;
    border-color: #2271D1;
    border-radius: 10px;
    background-color: transparent;
    color:#e7e7e7;
    font-size: 18px;
    &:focus{
        border-color: #6BD1FF;
        outline: none;
    }
    &::placeholder {
        color:#A5A5A5;
  }
}

.btn_container{
    justify-content: space-between;
    gap: 0;
    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
}

.btn_form{
    width: 170px;
    padding: 18px;
}

button:hover{
background-color: rgba(0,0,0,0.9);
    }

@media (max-width: 768px){
    width: 100%;
    .form-title {
        font-size: 30px;
    }
}
`


const ModalEdit = ({ video, FormEdit, onClose, onUpdate }) => {

    const videoEdit = (edit) => {
        fetch(`https://668218a304acc3545a083e35.mockapi.io/flixApi/videos/${edit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(edit)
        }).then(response => {
            if (response.ok) {
                // console.log("Video actualizado exitosamente");
                onClose()
                window.location.reload()
            }
        })
    }

    return (<>
        <Overlay />
        <Dialog open={!!FormEdit}>
            <FormModal video={video} formTitle="EDITAR CARD:" rows="3"
                categories={categories}
                onUpdate={videoEdit} />
            <form method="dialog">
                <button className="btnClose" onClick={onClose} >
                    <img src={closeIcon} alt="Icono cerrar" />
                </button>
            </form>
        </Dialog>
    </>
    )
}

export default ModalEdit