const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The OgCollins Blog</h1>
            <div className="links">
               <a href="/">Home</a>
               <a href="/create" style={{
                color: "white",
                backgroundColor: "#f13544",
                borderRadius: "10px"
               }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;