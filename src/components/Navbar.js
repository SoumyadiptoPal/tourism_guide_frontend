import React from 'react'
import '../App.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tourism Guide</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
      <div class="text-center nav-item dropdown">
  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080" class="rounded" alt="..." width={'60px'} /></a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item" href="#"><button type="button" class="btn btn-danger">Logout</button></a></li>
  </ul>
  </li>
</div>
    </div>
  </div>
</nav>
  )
}

export default Navbar