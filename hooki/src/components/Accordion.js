import React, {useState} from "react";

import '../styles/Accordion.css';
import Licznik from "./Licznik.js";

const Accordion = ({ items, onProductSubmit }) => {
    const [activeIndex, setActiveIndex] = useState(null);

     const onProductSubmit1 = (number, title) => {
        onProductSubmit(number, title);
    }

    const onTitleClick = (index) => {
        if ( activeIndex === index )
        {
            setActiveIndex(null);
        }
        else
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, i) => {
        const active = i === activeIndex ? 'active' : '';


        return (
            <React.Fragment key={i}>
                <div className={`title ${active}`} onClick={() => onTitleClick(i)}>
                    <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <Licznik title = {item.title} onProductSubmit2 = {onProductSubmit1}/>
                    </div>
            </React.Fragment>
        );
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}
export default Accordion;