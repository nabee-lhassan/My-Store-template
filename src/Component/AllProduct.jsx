import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/Slice/ProductSlice";
import { useEffect } from "react";
import {addCart} from "../redux/Slice/CartSlice"
import {addWishlist} from "../redux/Slice/wishlistSlice"
import { Link } from "react-router-dom";
import { setPop } from "../redux/Slice/PopSlice";
import Rating from "./Rating";


export default function AllProduct(Props) {
    const dispatch = useDispatch();

    const state = useSelector((state) => state);
    console.log("state", state);


  
    useEffect(()=> {
  dispatch(fetchProducts())
    },[])
    
  
    const handle = (Product)=>{
      dispatch(addCart(Product))
      dispatch(setPop(true))
    }

    // const newCartAdded = ()=> {
    //   dispatch(setPop(true))
    // }

    const wishlistsHendle = (Product)=>{
      dispatch(addWishlist(Product))
        
    }
  
   

  
    if (state.products.isLoading) {
      return <h1>Loading...</h1>;
    }
  return (
    <div>
    <div className="container-fluid all-Product">
      <div className="row">
        
      {Props.category == "" ? (state.products.data &&
    state.products.data.map((item) => (
        <div className="col-lg-2 col-md-4 col-sm-1 div-card" key={item.id}>
                 
          <div className="div-image">
<button className=" wishlist btn " onClick={() => wishlistsHendle(item) }><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></button>
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

            <Rating star={`${item.rating}`} />

            <h5>Rs. {item.price}</h5>
            <p>{item.description.substring(0,40)}...</p>


            </Link>
            
          </div>
          </div>
      ))) : (state.products.data &&
        state.products.data.filter((item) => item.category == Props.category).map((item) => (
            <div className="col-lg-2 col-md-4 col-sm-1 div-card" key={item.id}>
                     
              <div className="div-image">
    <button className=" wishlist btn " onClick={() => wishlistsHendle(item) }><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
    </svg></button>
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
    
                <h5>Rs. {item.price}</h5>
                <p>{item.description.substring(0,40)}...</p>
                </Link>
                
              </div>
              </div>
          ))) }

      </div>
    </div>
  
</div>
  )
}
