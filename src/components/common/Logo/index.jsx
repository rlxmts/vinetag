import { Link } from "react-router-dom";


const Logo = ()=>{
    return(
        <Link to='/'>
            <img src="./imagens/logo.png" alt="Logo da CineTag" />
        </Link>
    )
}

export default Logo;