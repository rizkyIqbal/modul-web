import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <p>Navbar</p>
    <ul>
        <li>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </li>
        <li>
            <Link to='/about'>
                <button>About</button>
            </Link>
        </li>
        <li>
            <Link to='/contact'>
                <button>Contact</button>
            </Link>
        </li>
    </ul>
    </>
  );
}

export default Navbar;
