import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/Slice/CartSlice";

import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/Slice/ProductSlice";
import Sidebar from "./Sidebar";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items); // Assuming 'cart' is the slice name and 'items' is the array holding cart items
  const cartItemsLength = cartItems.length;

  
  const lastItem = cartItems[cartItems.length - 1]; // Get the last item


  const wishlistItems = useSelector((state)=> state.wishlist.items).length;
  const dispatch = useDispatch();
  const submenuItems = useSelector((state) => state.products.data);

  const popupRef = useRef(null);
  const [popup, setPopup] = useState(false);

  

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (popupRef.current && !popupRef.current.contains(event.target)) {
  //       setPopup(false);
  //       console.log("cart popup", popup);

  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [popupRef]);

  const NewCartPopup = useSelector((state)=> state.popup.popslice)





  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="text-light navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/product">All Products</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link text-light dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Collections</Link>
                <ul className="dropdown-menu">
                  {submenuItems && 
                    [...new Map(submenuItems.map(item => [item.category, item])).values()]
                      .map((item) => ( 
                        <div key={item.id}>
                          <li>
                            <Link className="nav-link dropdown-item" to={`/category/${item.category}`}>
                              {item.category}
                            </Link>
                          </li>
                        </div>
                      ))
                  }
                </ul>
              </li>
            </ul>
            <div className="div-main-cart-wish">
              <div className="div-cart text-light mx-3">
                <Link className="nav-link text-light" onClick={() => { setPopup(true) }} title="Cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                  <span style={{ backgroundColor: 'white', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '23px', height: '23px', borderRadius: '50%', marginLeft: '5px', color: 'black', fontWeight: 'bold' }}>
                    {cartItemsLength}
                  </span>
                </Link>
              </div>
              <div className="div-cart text-light">
                <Link className="nav-link text-light" to="/wishlist" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                  <span style={{ backgroundColor: 'white', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '23px', height: '23px', borderRadius: '50%', marginLeft: '5px', color: 'black', fontWeight: 'bold' }}>
                    {wishlistItems}
                  </span>
                </Link>
              </div>
              <Sidebar trigger={popup} title_btn="Goto Page"  setTriger={setPopup}>
                <div ref={popupRef} className="card" style={{ maxWidth: '1000px' }}>
                  {cartItems.length === 0 ? (
                    <div className="empty-cart-message" style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                      <h5>Your cart is empty <svg  xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="yellow" className="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
                      </svg></h5>
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.id} className="card-body" style={{ borderTop: '1px solid lightgray' }}>
                        <div style={{ display: 'flex' }}>
                          <img style={{ width: '100px', height: '100%', borderRadius: '10px' }} src={item.thumbnail} alt="" />
                          <div style={{ padding: '20px' }}>
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description.substring(0, 50)}</p>
                            <div className="div-price-qty">
                              <span className="card-title">Quantity: {item.quantity}</span>
                              <span className="card-price">Price: {item.price.toFixed(2)}</span>
                            </div>
                            <div className="div-cart-btn" style={{ display: 'flex', gap: '10px', paddingTop: '10px' }}>
                              <button className="btn btn-danger" onClick={() => { dispatch(removeCart(item)) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Sidebar>

              <Sidebar trigger={NewCartPopup} title_btn="View All"  setTriger={setPopup}>
                {lastItem ? (
                  <div  className="card-body" style={{ borderTop: '1px solid lightgray' }}>
                  <div style={{ display: 'flex' }}>
                    <img style={{ width: '100px', height: '100%', borderRadius: '10px' }} src={lastItem.thumbnail} alt="" />
                    <div style={{ padding: '20px' }}>
                      <h5 className="card-title">{lastItem.title}</h5>
                      <p className="card-text">{lastItem.description.substring(0, 50)}</p>
                      <div className="div-price-qty">
                        <span className="card-title">Quantity: {lastItem.quantity}</span>
                        <span className="card-price">Price: {lastItem.price.toFixed(2)}</span>
                      </div>
                      <div className="div-cart-btn" style={{ display: 'flex', gap: '10px', paddingTop: '10px' }}>
                      

                      </div>
                    </div>
                  </div>
                </div>
                ) : ""}

              

              </Sidebar>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
