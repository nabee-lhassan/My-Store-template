import { useSelector,useDispatch } from "react-redux";
import { removeCart,lessCart, plusCart } from "../redux/Slice/CartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch()

  return (
    <div>
      <div className="card" style={{ maxWidth: '1000px', margin: '100px auto' }}>
        <div className="card-header">
          Cart Items
        </div>
        {items.map((item) => (
          <div key={item.id} className="card-body" style={{ borderTop: '1px solid lightgray' }}>
            <div style={{ display: 'flex' }}>
              <img style={{ width: '200px', height:'100%', borderRadius: '10px' }} src={item.thumbnail} alt="" />
              <div style={{ padding: '20px' }}>
            <Link to={`/detail/${item.id}`}>

                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
            </Link>
                <button className="btn" onClick={()=> {dispatch(lessCart(item))}}>-</button>
                <button className="btn" onClick={()=> {dispatch(plusCart(item))}}>+</button>
                <h5 className="card-title">Quantity: {item.quantity}</h5>
                <h5 className="card-title">Price: {item.price.toFixed(2)   }</h5>
                <button className="btn btn-primary" onClick={()=> {dispatch(removeCart(item))}}>Remove From Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
