import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>The OgCollins Blog</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f13544",
                    borderRadius: "10px"
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;