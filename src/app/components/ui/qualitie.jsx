/* eslint-disable no-return-assign */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../hooks/useQualitie";

const Quality = ({ id }) => {
    const [data, setData] = useState([]);
    const { getQualitie } = useQualities();
    useEffect(() => {
        setData(prev => prev = id.map((el) => getQualitie(el)));
    }, [getQualitie]);

    return (
        <>
            {data.map(el => <p key={el._id}>{el.name}</p>)}
        </>
    );
};
Quality.propTypes = {
    id: PropTypes.array
};
export default Quality;
