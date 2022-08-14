import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import User from "../components/user";
import UsersList from "../components/usersList";

const Users = ({ match, history }) => {
    const userId = match.params.userId;
    const [userPage, setUserPage] = useState();
    useEffect(() => {
        api.users
            .getById(userId)
            .then((data) => setUserPage(data));
    }, [userId]);
    return (
        <>
            {userId ? <User userPage={userPage} id={userId} history={history} /> : <UsersList /> }
        </>
    );
};
Users.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default Users;
