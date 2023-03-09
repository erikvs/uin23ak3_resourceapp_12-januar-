import { Link } from 'react-router-dom';

export function Nav() {
    return (
        <nav>
            <Link className='tab' to='/'>Html</Link>
            <Link className='tab' to='/css'>Css</Link>
            <Link className='tab' to='/javascript'>Javascript</Link>
            <Link className='tab' to='/react'>React</Link>
            <Link className='tab' to='/sanity'>Sanity</Link>
        </nav>
    )
}