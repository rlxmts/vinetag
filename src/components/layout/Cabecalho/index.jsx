import styled from "styled-components";
import Container from "../../common/Container";
import Logo from "../../common/Logo";
import LinksMenu from "./LinksMenu";

const Header = styled.header`
    background-color: #000000;

    .header-container{
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
    a{
        color: #FFFFFF;
    }
`

const Cabecalho = () => {
    return(
        <Header>
            <Container className="header-container">
                <Logo />
                <Nav>
                    <LinksMenu url='/'>
                        Home
                    </LinksMenu>
                    <LinksMenu url='/favoritos'>
                        Favoritos
                    </LinksMenu>
                </Nav>
            </Container>
        </Header>
    )
}

export default Cabecalho;