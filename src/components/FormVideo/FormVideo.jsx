import { useEffect, useState } from "react"
import styled from "styled-components"

export const FormContainer = styled.form`
display: flex;
flex-wrap: wrap;
width: 60%;


& .form-title{
    width: 100%;
    text-align: left;
    font-size: 30px;
}
`
const FieldContainer = styled.div`
width: 50%;
text-align: left;
margin-bottom: 35px;

label{
    display: block;
    margin-bottom: 5px;
    font-size: 20px;
}

input, textarea, select {
    width: 95%;
    padding: 10px 8px;
    border: 3px solid #262626;
    border-radius: 5px;
    background-color: transparent;
    box-sizing: border-box;
    color:#c2c2c2;
    font-size: 18px;
    &:focus{
        border-color: #2271D1;
        outline: none;
        box-shadow: 0 0 15px 5px rgba(34,113,209,.6);
    }
  }

.selectCat{
    color: #000;
  }

  textarea {
    resize: vertical;
  }

  option.select {
    color: red;
}

`
const BtnContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
gap: 25px;

button{
    width: 160px;
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
    padding: 17px;
    border-radius: 10px;
    background: none;
    border: 2px solid #FFFFFF;
    cursor: pointer;
    
    &:hover{
        border-color: #2271D1;
        box-shadow: inset 0px 0px 10px 5px rgba(34, 113, 209, .7);
        color: #2271D1;
    }
}

.btn_clean:active{
    background: #FFFFFF;
    box-shadow: none;
    border: none;
}

.btn_save:active{
    background: #2271D1;
    color: #FFFFFF;
}


`


const FormVideo = (props) => {

    const { className, formTitle, rows, video, onSubmit, categories, onSave, onUpdate } = props

    const [titulo, setTitulo] = useState(video?.titulo || "")
    const [categoria, setCategoria] = useState(video?.categoria || "")
    const [img, setImg] = useState(video?.img || "")
    const [url, setUrl] = useState(video?.url || "")
    const [descripcion, setDescripcion] = useState(video?.descripcion || "")

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo);
            setCategoria(video.categoria);
            setImg(video.img);
            setUrl(video.url);
            setDescripcion(video.descripcion);
        }
    }, [video])

    const handleSubmit = (e) => {
        e.preventDefault();
        const videoData = {
            id: video?.id,
            titulo: titulo,
            categoria: categoria,
            img: img,
            url: url,
            descripcion: descripcion,
        }
        if (onSave) {
            onSave(videoData)
            onClickReset(videoData)
        } else if (onUpdate) {
            onUpdate(videoData)
        }
    }

    const onClickReset = () => {
        setTitulo("")
        setCategoria("")
        setImg("")
        setUrl("")
        setDescripcion("")
    }

    return (
        <FormContainer className={className} onSubmit={handleSubmit} >
            <p className="form-title">{formTitle}</p>
            <FieldContainer className="fieldContainer">
                <label>Título</label>
                <input type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="ingrese el titulo"
                    required
                />
            </FieldContainer>
            <FieldContainer className="fieldContainer">
                <label>Categoría</label>
                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}>
                    <option className="select"
                        value=""
                        disabled
                        defaultValue=""
                        hidden
                        required
                    >seleccione una categoría</option>
                    {categories.map((cat, index) => (
                        <option className="selectCat"
                            key={index}
                            value={cat.category} >{cat.category} </option>
                    ))}
                    {/* <option className="selectCat">FRONT END</option>
                    <option className="selectCat">BACK END</option> */}
                </select>
            </FieldContainer>
            <FieldContainer className="fieldContainer field_img">
                <label>Imagen</label>
                <input type="text"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="ingrese el enlace de la imagen"

                />
            </FieldContainer>
            <FieldContainer className="fieldContainer">
                <label>Video</label>
                <input type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="ingrese el enlace del video"
                    required
                />
            </FieldContainer>
            <FieldContainer className="fieldContainer">
                <label>Descripción</label>
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    rows={rows}
                    placeholder="¿de qué se trata este video?"
                    required
                />
            </FieldContainer>
            <BtnContainer className="btn_container">
                <button type="submit" className="btn_save btn_form">GUARDAR</button>
                <button type="reset" className="btn_clean btn_form" onClick={onClickReset} >LIMPIAR</button>
            </BtnContainer>
        </FormContainer>
    )
}

export default FormVideo