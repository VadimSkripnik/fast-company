/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import EditUserPageForm from "../../ui/editUserPageForm";

const EditUserPage = ({ userId }) => {
        return (
            <div>
              <EditUserPageForm userId={userId}/>
            </div>
        );
};

EditUserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default EditUserPage;
