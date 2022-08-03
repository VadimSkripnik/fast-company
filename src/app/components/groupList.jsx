/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    const [professionItems, setProfessionItems] = useState(items);

    const arrayToObject = (elem) => {
        const arr = [
            "doctor",
            "waiter",
            "physics",
            "engineer",
            "actor",
            "cook"
        ];
        const obj = {};
        elem.forEach((el, i) => (obj[arr[i]] = el));
        return obj;
    };

    useEffect(() => {
        Array.isArray(professionItems) ? setProfessionItems(arrayToObject(professionItems)) : setProfessionItems(professionItems);
    }, [professionItems]);

    return (
        <ul className="list-group">
            {Object.keys(professionItems).map((item) => (
                <li
                    key={professionItems[item][valueProperty]}
                    className={
                        "list-group-item" +
                        (professionItems[item] === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(professionItems[item])}
                    role="button"
                >
                    {professionItems[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.prototype = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
