import Card from "../../common/Card";
import videos from "../../../json/db.json";
import styled from "styled-components";
import Container from "../../common/Container";

const Section = styled.section`
    h1{
        font-size: 2rem;
        color: #FFFFFF;
        margin-bottom: 1rem;
        text-align: center;
    }
`

const ListaDeVideos = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`

const Videos = () => {
    return(
        <Section>
            <Container>
                <h1>Lista de Videos</h1>
                <ListaDeVideos>
                    {videos.map( video => {
                        return(
                            <Card titulo={video.titulo} imagem={video.capa} key={video.id}/>
                        )
                    })}
                </ListaDeVideos>
            </Container>
        </Section>
    )
}

export default Videos;