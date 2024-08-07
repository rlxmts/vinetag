import Container from "../../components/common/Container";
import { Titulo } from "../../components/common/Titulo";
import Banner from "../../components/layout/Banner";

const Favoritos = () => {
    return(
        <>
            <Banner imagem='favoritos' />
            <Container>
                <Titulo>
                    Meus Favoritos
                </Titulo>
            </Container>
        </>
    )
}

export default Favoritos;