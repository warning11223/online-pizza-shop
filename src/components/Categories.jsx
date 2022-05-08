import React, {useState} from 'react';
import PropTypes from "prop-types";

const Categories = ({items, onCategory, activeItem}) => {


    return (
            <div className="categories">
                <ul>
                    <li
                        onClick={() => onCategory(null)}
                        className={activeItem === null ? 'active' : ''}
                    >Все</li>
                    {items.map((item, index) =>
                        <li
                        onClick={() => onCategory(index)}
                        className={activeItem === index ? 'active' : ''}
                        key={index}
                    >
                        {item}</li>)}
                </ul>
            </div>
    );
};

Categories.propTypes = {
    activeItem: PropTypes.number,
}

Categories.defaultProps = {
    activeItem: null,
    items: [],
}

export default Categories;
