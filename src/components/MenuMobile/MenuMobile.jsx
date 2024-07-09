import styled from "styled-components"
import homeActive from "/icons/home-active.png"
import homeInactive from "/icons/home-inactive.png"
import newVideoActive from "/icons/newvideo-active.png"
import newVideoInactive from "/icons/newvideo-inactive.png"
import NavButtons from "../NavButtons"

const Header = styled.header`
background-color: rgba(0,0,0,0.9);
box-shadow: 0px -10px 29px -8px rgba(34, 113, 209, .7);
border-top: 4px solid #2271D1;

@media (min-width: 768px) {
    display: none;
}
`

const Nav = styled.nav`
display: flex;
justify-content: space-around;
padding: 10px 0;

`

const NavButtonsMobile = styled(NavButtons)`

display: flex;
justify-content: space-around;
padding: 10px;


    button{
        cursor: pointer;
        width: 100%;
    }
    
    .nav_btn-container{
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
        }
        
    .icon_img{
        height: 35px;
    }
            
    .active {
        background-color: rgba(34, 113, 209, .24);
        font-size: 16px;
        font-weight: 600;
        color: #FFF;
        display: inline-flex;
        align-items: center;
        gap: 15px;
        border-radius: 50px;
        border: 2px solid #2271D1;
        padding: 10px 25px;
        color: #2271D1;
        & img{
            height: 25px;
            }
                    
    } 
    .inactive{
        border: none;
         background: transparent;
    }
                        





`

const MenuMobile = ({ className, srcHome, srcNew, url }) => {
    return (
        <Header className={className}>
            <Nav className="nav_btn-container">
                <NavButtonsMobile url="/" className="icon-btn icon-home-active active"  >
                    <img className="btn_img icon_img" src={homeActive} alt="Home" />HOME
                </NavButtonsMobile>
                <NavButtonsMobile url="/" className="icon-btn icon-home-inactive inactive"  >
                    <img className="btn_img icon_img" src={homeInactive} alt="Home" />
                </NavButtonsMobile>
                <NavButtonsMobile url="/NewVideo" className="icon-btn icon-new-active active"  >
                    <img className="btn_img icon_img" src={newVideoActive} alt="New Video" /> NUEVO VIDEO
                </NavButtonsMobile>
                <NavButtonsMobile url="/NewVideo" className="icon-btn icon-new-inactive inactive"  >
                    <img className="btn_img icon_img" src={newVideoInactive} alt="New Video" />
                </NavButtonsMobile>
            </Nav>
        </Header>
    )
}

export default MenuMobile