import { Link, } from "react-router-dom";

function Navbar() {

  const navStyles = {
    backgroundColor: "#0f172a",
    display: "flex",
    gap: "20px",
    margin: "0 auto",
    textAlign: "center",
    height: "80px",
    alignItems: "center",
    justifyContent: "end",
    paddingRight: "40px"
  }

  const LinkStyles = {
    textDecoration: "none",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold"
  }
  return (
    <nav style={navStyles}>
      <Link to="/" style={LinkStyles}>Home</Link>
      <Link to="/Services" style={LinkStyles}>Services</Link>
      <Link to="/About" style={LinkStyles}>About</Link>
      <Link to="/Contact" style={LinkStyles}>Contact</Link>
    </nav>
  )
}

export default Navbar