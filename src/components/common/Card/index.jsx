import styled from "styled-components";
import Titulo from "../Titulo";
import { IoHeartOutline } from "react-icons/io5";

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

const Card = ({imagem, titulo, alt}) => {
    return(
        <DivCard>
            <img src={imagem} alt={alt} />
            <DivInfo>
                <Titulo><h2>{titulo}</h2></Titulo>
                <IoHeartOutline className="icone" />
            </DivInfo>
        </DivCard>
    )
}

export default Card;