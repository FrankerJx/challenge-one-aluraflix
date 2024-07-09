import { Link } from "react-router-dom"
import styled from "styled-components"

const StylizedNav = styled.nav`
`

const StylizedButton = styled.button`
padding: 10px 0;
width: 160px;
font-size: 18px;
border-radius: 10px;
margin-left: 15px;
border: 2px solid #FFFFFF;
font-weight: bold;
cursor: pointer;
background: none;
color: #FFFFFF;

&:hover{
    background-color: rgba(34, 113, 209, .5);
    border-color: #2271D1;
}

&:active{
        border-color: #FFF;
        box-shadow: inset 0px 0px 5px 3px rgba(34, 113, 209, .7);
        color: #2271D1;
    }
`

const NavButtons = ({ url, children, className }) => {
    return (
        <StylizedNav className={className}>
            <Link to={url}>
                <StylizedButton className={className}>
                    {children}
                </StylizedButton>
            </Link>
        </StylizedNav>
    )
}

export default NavButtons