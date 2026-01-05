
function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand fs-2" href="#">Shoppora</a>
    
    
 

      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse d-lg-flex justify-content-between align-items-center" id="navbarSupportedContent">
       <form class="d-flex mt-2 mt-lg-0  m-auto " role="search">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
      <ul className="navbar-nav   mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>

        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Cart</a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Become a seller</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Profile
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Wishlist</a></li>
            <li><a class="dropdown-item" href="#">Orders</a></li>

            <li><a class="dropdown-item" href="#">Theme</a></li>
            <li><hr class="dropdown-divider" /></li>

             <li class="nav-item">
          <a class="nav-link " >Logout</a>
        </li>
          </ul>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    )
}

export default Header 