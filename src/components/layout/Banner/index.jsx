import styled from "styled-components";

const BannerPrincipal = styled.section`
    width: 100%;
    height: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Banner = ({imagem}) => {
    return(
        <BannerPrincipal style={ { backgroundImage:`url('./imagens/banner-${imagem}.png')`} } />
    )
}

export default Banner;