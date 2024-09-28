import React, { useEffect, useState, useRef } from 'react';
import { DispatchCart, UseCart } from './ContextReducer';

export default function Card(props) {
    const data = UseCart();

    let dispatch = DispatchCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const priceRef = useRef();

    const [quan, setQuan] = useState(1)
    const [size, setSize] = useState("");

    const handleAddCart = async () => {

        let food = [];
        for (let item of data) {
            if (item.id === props.foodItems._id) {
                food = item;
                break;
            }
        }

        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "Update", id: props.foodItems._id, price: finalPrice, quan: quan })
                return;
            }
            else if (food.size !== size) {
                await dispatch({ type: "Add", id: props.foodItems._id, name: props.foodItems.name, price: finalPrice, quan: quan, size: size })
                return
            }
            return;
        }
        await dispatch({ type: "Add", id: props.foodItems._id, name: props.foodItems.name, price: finalPrice, quan: quan, size: size })
    }

    let finalPrice = quan * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value);
    })

    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src={props.foodItems.img} style={{ objectFit: "cover", height: "180px", width: "100%" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItems.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-info rounded' onChange={(e) => setQuan(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 bg-info rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((opt) => {
                                return (<option key={opt} value={opt}>{opt}</option>)
                            })}

                        </select>
                        <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className={`btn btn-info justify-center ms-2`} onClick={handleAddCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
