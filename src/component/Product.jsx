import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton";
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { getProduct } from "../fetch_API/product";

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProductToCart = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const handleGetProduct = async () => {
            setLoading(true);
            const respone = await getProduct(id);
            setProduct(respone.data);
            setLoading(false);
        }
        handleGetProduct();
    }, [id])

    const Loading = () => {
        return (
            <>
                <div classNAme="col-md-6">
                    <Skeleton hieght={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} weight={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} weight={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} weight={100} />
                    <Skeleton height={50} weight={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        {product.price} VNĐ
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button
                        className="btn btn-outline-dark px-4 py-2"
                        onClick={() => addProductToCart(product)}
                    >
                        Add to cart
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to cart
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product;