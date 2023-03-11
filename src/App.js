import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./back/Data/Data";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Signup from "./components/Signup/Signup";
const App = () => {
    const productItem = data.productItems;
    const [cartItems, setCartItems] = useState([]);
    const handleCartClearence = () =>{
        setCartItems([])
    }
    const handleAddProduct = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);
        if (productExist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...productExist,
                              quantity: productExist.quantity + 1,
                          }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const handleRemoveProduct = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);
        if (productExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...productExist,
                              quantity: productExist.quantity - 1,
                          }
                        : item
                )
            );
        }
    };
    return (
        <div>
            <BrowserRouter>
                <Header cartItems={cartItems}/>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Products
                                productItem={productItem}
                                handleAddProduct={handleAddProduct}
                            />
                        }
                        exact
                    />
                    <Route path="/signup" element={<Signup />} exact />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cartItems={cartItems}
                                handleAddProduct={handleAddProduct}
                                handleRemoveProduct={handleRemoveProduct}
                                handleCartClearence={handleCartClearence}
                            />
                        }
                        exact
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
