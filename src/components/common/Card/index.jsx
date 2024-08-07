import styled from "styled-components";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { useState } from "react";

const DivCard = styled.div`
    width: 240px;
    background-color: #FFFFFF;
    cursor: pointer;
    img{
        width:100%;
    }
`
const DivInfo = styled.div`
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .icone{
        cursor: pointer;
    }
`

const CaixaFavoritar = styled.span`
    width: min-content;
`

const Card = ({imagem, titulo, alt}) => {

    const [favoritar, setFavoritar] = useState(false);

    const favoritarCard = ()=> {
        setFavoritar(!favoritar);
        console.log(favoritar)
    }

    return(
        <DivCard>
            <img src={imagem} alt={alt} />
            <DivInfo>
                <h3>{titulo}</h3>
                <CaixaFavoritar onClick={favoritarCard}>
                    {favoritar ? <IoHeart />  : <IoHeartOutline  className="icone" /> }                            
                </CaixaFavoritar>
            </DivInfo>
        </DivCard>
    )
}

export default Card;