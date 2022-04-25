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

    const caculatorTotalPriceEach = (product) => {
        return Math.round(product.qty * product.price);
    }

    const caculatorTotalPrice = () => {
        let total = 0;

        products.forEach(product => total += caculatorTotalPriceEach(product))

        return total
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
                                {product.qty} X {product.price} = {caculatorTotalPriceEach(product)} VND
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

            <div className="container py-4">
                <p><strong>Total amount: {caculatorTotalPrice()} VND</strong></p>
            </div>

        </>
    )
}

export default Cart;