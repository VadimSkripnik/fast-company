/* eslint-disable react/prop-types */
// import React from "react";
// import { useParams } from "react-router-dom";
// import UserPage from "../components/page/userPage";
// import UsersListPage from "../components/page/usersListPage";
// const Users = () => {
//     const params = useParams();
//     const { userId } = params;
//     return <>{userId ? <UserPage userId={userId} /> : <UsersListPage />}</>;
// };

// export default Users;

import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import EditUserPage from "../components/page/editUserPage";
import UsersListPage from "../components/page/usersListPage";
const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            {userId ? (
                <>
                    {edit ? <EditUserPage userId={userId}/> : <UserPage userId={userId} />}
                </>
            ) : (
                <UsersListPage />
            )}
        </>
    );
};

export default Users;
