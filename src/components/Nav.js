import {Link} from 'react-router-dom';

export function Nav(){
    return (
        <nav>
            <Link to='/'>Html</Link>
            <Link to='/css'>Css</Link>
        </nav>
    )
}