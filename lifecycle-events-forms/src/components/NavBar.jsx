import { NavLink, Link } from 'react-router-dom'

function NavBar(){
    return (
        <>
            <Link to="/">
                <img src="Marvel.jpg" alt="marvel logo" height="100" />
            </Link>
            <nav>
                <NavLink to="/characters" activeClassName="active">Characters</NavLink>
            </nav>
        </>
    )
}

export default NavBar;