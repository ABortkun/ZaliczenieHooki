import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Summary from "./components/Summary";

import './styles/App.css'
const App = () => {
const [counter, addProductNumber] = useState([]);
const [licznikTitle, setTitle] = useState();

const onProductSubmit = (number, newTitle) => {
    addProductNumber(number);
    setTitle(newTitle);
}

const fries = [
    {
        title: "Małe frytki",
    },
    {
        title: "Średnie frytki",
    },
    {
        title: "Duże frytki",
    },
]
const burgers = [
    {
        title: "Burger z serem",
    },
    {
        title: "Burger warzywny",
    },
    {
        title: "Burger z kurczakiem",
    },
    {
        title: "Burger podwójny",
    },
]
const drinks = [
    {
        title: "Woda",
    },
    {
        title: "Cola-cola",
    },
    {
        title: "Fanta",
    },
    {
        title: "Ice Tea",
    },
    {
        title: "Kawa z mlekiem",
    },
    {
        title: "Gorąca czekolada",
    },
    {
        title: "Sok jabłkowy",
    },
]
    return (
        <div>
            <h1>Skompletuj zamówienie</h1>
            <div class="accordion-group">
                {<Accordion items = { fries } onProductSubmit={onProductSubmit}/>}
                {<Accordion items = { burgers } onProductSubmit={onProductSubmit} />}
                {<Accordion items = { drinks } onProductSubmit={onProductSubmit}/>}
            </div>
                {<Summary productsNumber = { counter } productsName = {licznikTitle} />}
        </div>
    )
};
export default App;
