import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import images from '../assets/images';


function App() {
  const products = [
    { name: "iphone 15", price: "100,000,000", imageUrl:"src/assets/images/iphone15.jpg" },
    { name: "iphone 14", price: "72,000,000", imageUrl:"src/assets/images/iphone14.jpg" },
    { name: "iphone 13", price: "37,800,000", imageUrl:"src/assets/images/iphone13.jpg" },
    { name: "iphone 12", price: "27,700,000", imageUrl:"src/assets/images/iphone12.jpg" },
    { name: "iphone 11", price: "22,500,000", imageUrl:"src/assets/images/iphone11.jpg" },
    { name: "iphone X", price: "18,000,000", imageUrl:"src/assets/images/iphoneX.jpg" },
  ];

  return (
    <div className="slider">
      {products.map((item) => {
        return (        
        <ProductCard product={item} />
        )
      })}
    </div>
  );
}

export default App;
