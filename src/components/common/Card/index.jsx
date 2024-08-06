import styled from "styled-components";

const DivCard = styled.div`
    width: 240px;
    background-color: #FFFFFF;

    img{
        width:100%;
    }
`

const Card = () => {
    return(
        <DivCard>
            <img src="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img1.png" alt="" />
            <h2>Titulo do video</h2>
            <img src="" alt="" />
        </DivCard>
    )
}

export default Card;