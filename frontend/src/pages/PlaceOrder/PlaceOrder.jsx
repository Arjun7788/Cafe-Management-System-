// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {

    const [payment, setPayment] = useState("pl")
    const [data, setData] = useState({
   discription: "",
   table : "Table1"
    })

    const { getTotalCartAmount, token, food_list, cartItems, url, setCartItems,currency } = useContext(StoreContext);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const placeOrder = async (e) => {
        e.preventDefault()
        let orderItems = [];
        food_list.map(((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo)
            }
        }))
        let orderData = {
            discreption : data.discreption,
            table : data.table,
            items: orderItems,
            amount: getTotalCartAmount() ,
        }
        if (payment === "stripe") {
            let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            }
            else {
                toast.error("Something Went Wrong")
            }
        }
        else{
            let response = await axios.post(url + "/api/order/placecod", orderData, { headers: { token } });
            if (response.data.success) {
                navigate("/myorders")
                toast.success(response.data.message)
                setCartItems({});
            }
            else {
                toast.error("Something Went Wrong")
            }
        }

    }

    useEffect(() => {
        if (!token) {
            toast.error("to place an order sign in first")
            navigate('/cart')
        }
        else if (getTotalCartAmount() === 0) {
            navigate('/cart')
        }
    }, [token])

    return (
        <form onSubmit={placeOrder} className='place-order'>
            
            <div className="place-order-left">
            <h2>Product description</h2>
            <textarea name='discreption' onChange={onChangeHandler} value={data.discreption} type="text" rows={6} placeholder='Write content here'  />
                


                <h2>Select Your Table No.</h2>
            <select name="table" onChange={onChangeHandler} value={data.table} >
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
            <option value="Table 4">Table 4</option>
            <option value="Table 5">Table 5</option>
            <option value="Table 6">Table 6</option>
            <option value="Table 7">Table 7</option>
            <option value="Table 8">Table 8</option>
            <option value="Table 9">Table 9</option>
            <option value="Table 10">Table 10</option>
            <option value="Parcel">Parcel</option>
            </select>


            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                      <hr />
                        <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() }</b></div>
                    </div>
                </div>
                <div className="payment">
                    <h2>Payment</h2>
                    <div onClick={() => setPayment("pl")} className="payment-option">
                        <img src={payment === "pl" ? assets.checked : assets.un_checked} alt="" />
                        <p>Pay after</p>
                    </div>
                  
                    <div onClick={() => setPayment("stripe")} className="payment-option">
                        <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="" />
                        <p>( Credit / Debit )</p>
                    </div>
                </div>
                <button className='place-order-submit' type='submit'>{payment==="cod"?"Place Order":"Proceed To Payment"}</button>
            </div>
        </form>
    )
}

export default PlaceOrder
