import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/Slice/ProductSlice"
import { Link } from "react-router-dom"
import { addCart } from "../redux/Slice/CartSlice"

export default function Men() {
const dispatch = useDispatch()

function handle(cartItems){
    dispatch(addCart(cartItems))
}

const state = useSelector((state)=> state)
console.log('state', state)

useEffect(()=>{
dispatch(fetchProducts())
}, [])

    return (
    <div>

<div className="container all-Product">
    <div className="row">
        {state.products.data && state.products.data.filter((item)=> item.category === "men's clothing").map((item)=> ( 
          <div className="col-lg-2 div-card" key={item.id}>
          <Link to={`/detail/${item.id}`} >
               
        <div className="div-image">
          <img  src={item.image} alt="" />
        </div>
        </Link>
        <div className="div-content">
          <h4>
            
        {item.title.substring(0, 10)}
          </h4>

          <h5>{item.price}</h5>
          
<button className="btn btn-dark"  onClick={()=> {handle(item)}}>Add To Cart</button>
        </div>
        </div>

        ))}
    </div>
</div>
      
    </div>
  )
}
