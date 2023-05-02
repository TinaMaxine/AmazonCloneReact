import React from "react";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  let class_={
    name:"mohit",
    age:22,
    collage:"RJIT"
  }
  let items = [
    {
      name: "Gaming Laptop",
      description: "This is a gaming laptop",
      price: 75000,
      image: './assets/ok.webp',
      id: 1
    },
    {
      name: "Mobile Phone - Samsung",
      description: "Note 10",
      price: 65000,
      image: './assets/34328.jpg',
      id: 2
    }
  ];

  return (
    <div className="flex">
      <div className="flex-1">
        <Home name={class_.name} age={class_.age} />
        <Products products={items} />
      </div>
    </div>
  );
}

export default App;
