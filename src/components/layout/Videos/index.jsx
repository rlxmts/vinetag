import Card from "../../common/Card";
import videos from "../../../json/db.json";
import styled from "styled-components";
import Container from "../../common/Container";
import { Titulo } from "../../common/Titulo";

const ListaDeVideos = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`

const Videos = () => {
    return(
        <section>
            <Container>
                <Titulo>Lista de Videos</Titulo>
                <ListaDeVideos>
                    {videos.map( video => {
                        return(
                            <Card titulo={video.titulo} imagem={video.capa} key={video.id}/>
                        )
                    })}
                </ListaDeVideos>
            </Container>
        </section>
    )
}

export default Videos;