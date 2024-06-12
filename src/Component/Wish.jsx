import { useDispatch, useSelector } from "react-redux"
import {  removeWishlist } from "../redux/Slice/wishlistSlice";
import { Link } from "react-router-dom";
import { addCart } from "../redux/Slice/CartSlice";

export default function Wish() {

    const dispatch = useDispatch()

    const  removeHandler = (product)=> {
        dispatch(removeWishlist(product))
    }

    const wishlists = useSelector((state)=> state.wishlist.items);


    const handle = (Product)=>{
        dispatch(addCart(Product))
      }
  
      

  return (
    <div>
      <div className="container-fluid all-Product">
      <div className="row">
      {wishlists &&
    wishlists.filter((item) => item.category.length > 0).map((item) => (
        <div className="col-lg-2 div-card" key={item.id}>
                 
          <div className="div-image">
<button className=" wishlist btn " onClick={() => removeHandler(item) }>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-heartbreak" viewBox="0 0 16 16">
  <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38 38 0 0 0 .867-.59m-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922m-1.25 1.137a36 36 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z"/>
</svg>
</button>
<button className="cart_btn btn " onClick={() => handle(item) }>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
</button>

            <Link to={`/detail/${item.id}`} >
            <img  src={item.thumbnail} alt="" />
          </Link>
          </div>
          <div className="div-content">
          <Link to={`/detail/${item.id}`} >
            <h4>
              
          {item.title.substring(0, 10)}
            </h4>

            <h5>Rs.{item.price}</h5>
            <p>{item.description.substring(0,40)}...</p>
            </Link>
            
          </div>
          </div>
      ))}

      </div>
    </div>
    </div>
  )
}
