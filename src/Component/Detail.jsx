import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../redux/Slice/ProductSlice";
import { addCart } from "../redux/Slice/CartSlice";
import Button from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import 'swiper/swiper-bundle.css';

export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.data);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (products) {
            const foundProduct = products.find((item) => item.id.toString() === id);
            setProduct(foundProduct);
            if(foundProduct){
                setSlidImage(foundProduct.thumbnail);
            }
            
        }
    }, [products, id]);



    const handleCart = () => {
        dispatch(addCart(product));
    };

    // for giving slide image src to thumbnail image 
    
    const [slidImage, setSlidImage] = useState("");
    
    // for giving image mark on click
    
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (e, image) => {
        setSelectedImage(image);
      };
    

    

    if (!product) {
        return (
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
        );
    }

    return (
        <div>
            <h3>Product Detail page {product.title}</h3>
            <div className="container-fluid single-Product">
                <div className="row" key={product.id}>
                    <div className="col-lg-6">
                        <div className="div-image-detail">
                        <img style={{border: '2px solid lightgray', width: '50%', }} src={slidImage} alt={product.title} />
                        </div>

                        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {product.images.map((image, index) => (
                                        <div key={index} className="swiper-slide">

                                                    <SwiperSlide>
                                                        <img  style={{ border: selectedImage === image ? '2px solid lightgray' : 'none', width:'95%', margin:'10px'}} onClick={(e) => {setSlidImage(e.target.src), handleImageClick(e, image)}} src={image} alt="" />
                                                    </SwiperSlide>

                                        </div>
                                    ))}
      </Swiper>
                        {/* <div className="div-image-slider">
                            <div style={{padding:'20px 10px'}} className="swiper mySwiper">
                                <div className="swiper-wrapper">
                                    {product.images.map((image, index) => (
                                        <div key={index} className="swiper-slide">
                                            <img style={{border:'2px solid lightgray'}} src={image} alt={`Product image ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="div-content">
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                            <h5>${product.price}</h5>
                            <button className="btn btn-dark" onClick={handleCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
