import { Link } from "react-router-dom";

const LinksMenu = ( {children, url} ) => {
    return(
        <Link to={url}>{children}</Link>
    )
}

export default LinksMenu;