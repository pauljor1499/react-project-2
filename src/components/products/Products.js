import React, { useEffect, useState } from "react";
import "./Products.css";
import { ProductsData } from "../Data";
//store
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/ProductSlice";

const Products = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    // useEffect(() => {
    //     fetch("https://dummyjson.com/products")
    //         .then((res) => res.json())
    //         .then((result) => setData(result.products));
    // }, []);

    useEffect(() => {
        setData(ProductsData[0].products);
    }, []);

    const searchItem = (event) => {
        setSearch(event.target.value);
    };

    if (data && data.length > 0) {
        return (
            <>
                <div className={"productsContent"}>
                    <div className={"products"}>
                        <input className={search} type="text" placeholder="Search Item" onChange={searchItem} />
                        {data
                            .filter((item) => {
                                return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search);
                            })
                            .map((item, index) => (
                                <div key={index} className={"itemProduct"}>
                                    <span>{item.title}</span>
                                    <button
                                        className={"itemProductButton"}
                                        onClick={() => {
                                            dispatch(
                                                addProduct({
                                                    id: item.id,
                                                    title: item.title,
                                                    description: item.description,
                                                    price: item.price,
                                                })
                                            );
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div>"Loading Products"</div>
            </>
        );
    }
};

export default Products;
