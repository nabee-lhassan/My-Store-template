import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../redux/Slice/CartSlice";
import Button from "./Button";

export default function CatDetail() {
  // Destructure the specific parameter from the URL
  const { name } = useParams();

  const dispatch = useDispatch();

  function handle(product) {
    dispatch(addCart(product));
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
      <h1>Category: {name}</h1>
      <h5>Total Products: {totalProducts}</h5>
     
      <div className="container all-Product">
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="col-lg-2 div-card" key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  <div className="div-image">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                </Link>
                <div className="div-content">
                  <h4>{item.title.substring(0, 10)}</h4>
                  <h5>${item.price}</h5>
                  <button className="btn btn-dark" onClick={() => handle(item)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
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
    </div>
  );
}
