import { Link } from "react-router-dom"
import styled from "styled-components"
import NavButtons from "../NavButtons"
import logo from "../../assets/LogoMain.png"

export const Cabecera = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.bgColor};
    padding: 1.5% 3%;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, .7);
    position: relative;
    z-index: 1;
    
    & .btn-header {
        display: flex;
    }

    @media (max-width: 768px) {
        display:none;
}

`

const Header = ({ backgroundColor }) => {

    return (
        <Cabecera $bgColor={backgroundColor}>
            <Link to="/">
                <section>
                    <img src={logo} alt="Logo Alura" />
                </section>
            </Link>
            <nav className="btn-header">
                <NavButtons url="/">
                    HOME
                </NavButtons>
                <NavButtons url="/Newvideo">
                    NUEVO VIDEO
                </NavButtons>
            </nav>
        </Cabecera>
    )
}

export default Header