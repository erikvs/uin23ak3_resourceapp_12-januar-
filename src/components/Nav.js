import { Link } from 'react-router-dom';

export function Nav() {
    return (
        <nav>
            <Link to='/'>Html</Link>
            <Link to='/css'>Css</Link>
            <Link to='/javascript'>Javascript</Link>
            <Link to='/react'>React</Link>
            <Link to='/sanity'>Sanity</Link>
        </nav>
    )
}