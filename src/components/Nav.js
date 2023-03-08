import {Link} from 'react-router-dom';

export function Nav(){
    return (
        <nav>
            <Link to='/'>Html</Link>
            <Link to='/css'>Css</Link>
            <Link to='/Javascript'>Javascript</Link>
            <Link to='/React'>React</Link>
            <Link to='/Sanity'>Sanity</Link>

        </nav>
    )
}