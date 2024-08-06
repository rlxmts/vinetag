import styled from "styled-components"

const Div = styled.div`
    color: #000000;
    font-weight: 600;
`

const Titulo = ({children})=> {
    return(
        <Div>
            {children}
        </Div>
    )
}

export default Titulo;
