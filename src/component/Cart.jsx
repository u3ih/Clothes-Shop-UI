import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
    const products = useSelector((state => state.handleCart));
    const dispatch = useDispatch();

    const handleAddButton = (product) => {
        dispatch(addCart(product));
    }

    const handleDelButton = (product) => {
        dispatch(delCart(product));
    }

    return (
        <>
            {products.map(product => (
                <div className="container border-bottom">
                    <div className="row justify-content-center py-5 ">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} X {product.price} = {product.qty * product.price} VND
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={() => handleDelButton(product)}>
                                <i className="fa fa-minus" />
                            </button>
                            <button className="btn btn-outline-dark" onClick={() => handleAddButton(product)}>
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Cart;