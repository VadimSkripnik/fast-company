import React from "react";
import PropTypes from "prop-types";

const User = ({ history, userPage }) => {
    const handleReturn = () => {
        history.replace("/users");
    };
    if (typeof userPage !== "undefined") {
        return (
            <>
                <div className="card-body">
                    <h1 className="card-title">{userPage.name}</h1>
                    <h2 className="card-text mt-3">
                        proffesion: {userPage.profession.name}
                    </h2>
                    <p className="card-text mt-3">
                        {userPage.qualities.map((qual) => (
                            <span
                                key={qual._id}
                                className={"badge m-1 bg-" + qual.color}
                            >
                                {qual.name}
                            </span>
                        ))}
                    </p>
                </div>
                <p>completedMeetings: {userPage.completedMeetings}</p>
                <h2>Rate: {userPage.rate}</h2>
                <button
                    onClick={() => {
                        handleReturn();
                    }}
                >
                    Все пользователи
                </button>
            </>
        );
    } else {
        return <h1>Loading</h1>;
    }
};
User.propTypes = {
    history: PropTypes.object.isRequired,
    userPage: PropTypes.object.isRequired
};

export default User;
