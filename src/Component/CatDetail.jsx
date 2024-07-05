import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../redux/Slice/CartSlice";
import Button from "./Button";
import { addWishlist } from "../redux/Slice/wishlistSlice";
import { setPop } from "../redux/Slice/PopSlice";
import Heading from "./Heading";
import Rating from "./Rating";
import { useMemo, useState, useEffect } from "react";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";

export default function CatDetail() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.isLoading);

  // category filtering

  const filteredProducts = useMemo(() => 
    products.filter((element) => element.category === name), 
    [products, name]
  );


  // price filtering


// getting all products price by category
  const filteredPrices = filteredProducts.map((product) => product.price);

  // finding max price 
  const maxPrice = filteredPrices.length > 0 ? Math.max(...filteredPrices) : 0;

  // finding min price
  const minPrice = filteredPrices.length > 0 ? Math.min(...filteredPrices) : 0;

// state for updating prices according to input range
  const [price, setPrice] = useState(maxPrice);

  // to stop rerender maxPrice 
  useEffect(() => {
    setPrice(maxPrice);
  }, [maxPrice]);

// price updating range function
  const priceUpdate = (event) => {
    setPrice(Number(event.target.value));
  };


// fetching product according to category and price filter
  const priceFilteredProducts = filteredProducts.filter(
    (product) => product.price <= price
  );

  // cart popup function
  const handle = (product) => {
    dispatch(addCart(product));
    dispatch(setPop(true));
  };

  // add in wishlist function
  const wishlistsHandle = (product) => {
    dispatch(addWishlist(product));
  };

  const [listAndGrid, setListAndGrid] = useState({
    productView: '',
    columnFlex: {},
    imageWidth: {}
  });

  const listView = () => {
    setListAndGrid({
      productView: 'flex-column',
      columnFlex: { display: 'flex', width: '95%' },
      imageWidth: {width:'30%'}
    });
  };

  const gridView = () => {
    setListAndGrid({
      productView: '',
      columnFlex: {},
      imageWidth: {}
    });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="div-heading-category">
        <Heading heading={name.toUpperCase()} pera="Discover our exclusive products." />
      </div>
      <aside style={{ width: '20%', float: 'left', backgroundColor: 'lightgray', height: '100vh', padding: '2%' }} className="side-left">
        <h3 style={{ textTransform: 'capitalize' }}>{name}</h3>
        <h6 style={{ textTransform: 'capitalize' }}> Product Count: ({filteredProducts.length})</h6>
        <div className="dropdown">
          <button className="btn p-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Search By Category
          </button>
          <ul className="dropdown-menu">
            {Array.from(new Set(products.map((uniqueCate) => uniqueCate.category))).map((itemCat) => (
              <li key={itemCat}><Link className="dropdown-item" to={`/category/${itemCat}`}>{itemCat}</Link></li>
            ))}
          </ul>
        </div>
        <div className="div-priceFilter">
          <h3>Price Filter</h3>
          <h5 className="price-filter-title">Max: <span>{maxPrice}</span> Min: <span>{minPrice}</span></h5>
          <input type="range" min={minPrice} max={maxPrice} value={price} onChange={priceUpdate} />
          <p>{price}</p>
        </div>
      </aside>
      <aside style={{ width: '80%', float: 'right' }} className="side-right">
        <div className="filter-container container">
          <div className="row">
            <div className="col-lg-12">
              <button className="btn" onClick={()=> {gridView()}} ><IoGridOutline /></button>
              <button className="btn" onClick={()=> {listView()}}><CiBoxList /></button>
            </div>
          </div>
        </div>
        <div className="container all-Product">
          <div className={`row ${listAndGrid.productView} `} >
            {priceFilteredProducts.length > 0 ? priceFilteredProducts.map((item) => (
              <div className={`col-lg-3 col-md-4 col-sm-1 div-card`} style={listAndGrid.columnFlex}  key={item.id}>
                <div className="div-image" style={ listAndGrid.imageWidth}>
                  <button className="wishlist btn" onClick={() => wishlistsHandle(item)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                  </button>
                  <button className="cart_btn btn" onClick={() => handle(item)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                  </button>
                  <Link to={`/detail/${item.id}`}>
                    <img src={item.thumbnail} alt="" />
                  </Link>
                </div>
                <div className="div-content">
                  <Link to={`/detail/${item.id}`}>
                    <h4>{item.title.substring(0, 10)}</h4>
                    <Rating star={`${item.rating}`} />
                    <h5>Rs. {item.price}</h5>
                    <p>{item.description.substring(0, 40)}...</p>
                  </Link>
                </div>
              </div>
            )) : (
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
