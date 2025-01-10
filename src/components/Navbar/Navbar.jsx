import { Link, NavLink } from "react-router-dom";



export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg py-4 fixed-top z-2">
      <div className="container">
      <Link className="navbar-brand fs-1 fw-bold text-white" to={"/"}>Start Framework</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <NavLink className="nav-link px-2 fs-5 fw-bold text-white" aria-current="page" to={""}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link px-2 fs-5 fw-bold text-white" to={"about"}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link px-2 fs-5 fw-bold text-white" to={"portfolio"}>Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link px-2 fs-5 fw-bold text-white" to={"contact"}>Contact</NavLink>
          </li>
        </ul>
        
      </div>
  </div>
</nav>
    </>
  )
}
