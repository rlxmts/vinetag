import styled from "styled-components";

const Footer = styled.footer`
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    padding: 1rem;
`

const Rodape = () => {
    return(
        <Footer>
            &copy; Todos os diretos reservados à CineTag
        </Footer>
    )
}

export default Rodape;