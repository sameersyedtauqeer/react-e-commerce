import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { addToCart } from "../../Redux/actions/index";

const ProductDetailScreen = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch()

    const addProduct = (product) => {
        dispatch(addToCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
        }
        console.log(product)

        getProduct();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-between">

                    <div className="col-md-4">
                        <img width="100%" src={product.image} alt={product.title} />
                    </div>

                    <div className="col-md-6">
                        <h2>
                            {product.title}
                        </h2>

                        <p>{product.description}</p>


                        <p>Rating :
                            {product.rating && product.rating.rate}</p>
                        <p>RS :{product.price}</p>

                        <button onClick={() => addProduct(product)} type="" className="btn btn-primary me-3">ADD TO CART </button>
                        <Link to="/cart" className="btn btn-success">GO TO CART</Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailScreen