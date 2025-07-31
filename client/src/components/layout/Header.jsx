
function Header(){
    return(
        <div className="d-flex flex-row justify-content-between p-2">

            <h1 className="ps-5 ">E-Store</h1>
            <div>
                <input type="search" placeholder="Search for Products, Brands and more"/>
            </div>
            <ul>
                <li>Cart</li>
                <li>Become a Seller</li>
                <li>
                    <div>
                        <p>Login</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Header 