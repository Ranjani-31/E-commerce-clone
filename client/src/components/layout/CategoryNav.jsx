import mobiles from "../../assets/mobiles.jpg"
import fashion from "../../assets/fashion.jpg"
import electronics from "../../assets/electronics.jpg"
import beauty from "../../assets/beauty.jpg"
import furniture from "../../assets/furniture.jpg"
import appliances from "../../assets/appliances.jpg"
import grocery from "../../assets/grocery.jpg"



const categories = [
  { id: 1, name: "Mobiles & Tablets", image: mobiles, alt: "Mobiles and Tablets" },
  { id: 2, name: "Fashion", image: fashion, alt: "Fashion products" },
  { id: 3, name: "Electronics", image: electronics, alt: "Electronic items" },
  { id: 4, name: "Appliances", image: appliances, alt: "Home appliances" },
  { id: 5, name: "Home & Furniture", image: furniture, alt: "Home furniture" },
  { id: 6, name: "Beauty", image: beauty, alt: "Beauty products" },
  { id: 7, name: "Grocery", image: grocery, alt: "Grocery items" },
];




import "./CategoryNav.css"
function CategoryNav(){

    return(
        
            <ul className="category-container">
              {
                categories.map(item=>(
                      <li key={item.id} className="d-flex  flex-shrink-0 flex-lg-shrink-1 flex-column align-items-center justify-content-center">
                    <img className="category-img" src={item.image}  alt={item.alt}/>
                    <p className="fw-semibold fs-6">{item.name}</p>
                </li>
                ))
              }
            </ul>

       
    )
}

export default CategoryNav 