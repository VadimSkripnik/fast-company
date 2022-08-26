import React from "react";
import PropTypes from "prop-types";

const SearchUser = ({ type, value, name, onChange }) => {
    return (
        <div className="input-group flex-nowrap">
            <input
                type={type}
                className="form-control"
                placeholder="Search..."
                aria-label=""
                aria-describedby="addon-wrapping"
                value={value}
                name={name}
                onChange={onChange}
            />
        </div>
    );
};

SearchUser.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchUser;
