import styled from "styled-components"
import logo from "../../assets/LogoMain.png"


const FooterContainer = styled.footer`
display: flex;
justify-content: center;
padding: 1.5% 0;
background-color: rgba(0,0,0,0.9);
border-top: 4px solid #2271D1;
box-shadow: 0px -10px 29px -8px rgba(34, 113, 209, .7);
position: relative;
z-index: 1;

@media (max-width: 768px) {
    display: none;
}

`

const Footer = () => {
    return (
        <FooterContainer>
            <img src={logo} alt="Logo Alura" />
        </FooterContainer>
    )
}

export default Footer