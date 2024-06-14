import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../redux/Slice/CartSlice";
import Button from "./Button";
import { addWishlist } from "../redux/Slice/wishlistSlice";
import { setPop } from "../redux/Slice/PopSlice";
import Heading from "./Heading";

export default function CatDetail() {
  // Destructure the specific parameter from the URL
  const { name } = useParams();

  const dispatch = useDispatch();

  function handle(product) {
    dispatch(addCart(product));
    dispatch(setPop(true))

  }


  const wishlistsHendle = (Product)=>{
    dispatch(addWishlist(Product))
      
  }

  const products = useSelector((state) => state.products.data);

  // Filter products based on the category
  const filteredProducts = products.filter((element) => {
    console.log(element.category);
    return element.category === name;
  });

  const totalProducts = filteredProducts.length;
  

  return (
    <div>
      <div className="div-heading-category">
      <Heading heading={name.toUpperCase()} pera="Discover our exclusive products." />
      </div>
      <aside style={{width:'20%', float:'left', backgroundColor:'lightgray', height:'100vh',padding:'2%'}} className="side-left">
      <h6>Total Products in {name}: ({totalProducts})</h6>

      </aside>
      <aside style={{width:'80%', float:'right'}} className="side-right">
      <div className="container all-Product">
        <div className="row">
          {filteredProducts.length > 0 ? (filteredProducts &&
    filteredProducts.map((item) => (
        <div className="col-lg-3 col-md-4 col-sm-1 div-card" key={item.id}>
                 
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
      ))) : (
            <div className="container" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="alert alert-warning d-flex justify-content-center mt-5">
                    <p className="h3">Product not found</p>
                  </div>
                  <div className="div-button d-flex justify-content-center">
                    <Button goto="/product" name="Back to Product" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </aside>

      
     
      
    </div>
  );
}
