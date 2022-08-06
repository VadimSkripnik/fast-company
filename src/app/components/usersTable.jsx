import React from "react";
import PropTypes from "prop-types";
import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UsersTable = ({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    onDelete,
    ...rest
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            componentIcon: <i
                className= {selectedSort.icon}
            ></i>
        },
        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: {
            path: "profession.name",
            name: "Провфессия",
            componentIcon: <i
                className={selectedSort.icon}
            ></i>
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз",
            componentIcon: <i
                className={selectedSort.icon}
            ></i>
        },
        rate: {
            path: "rate",
            name: "Оценка",
            componentIcon: <i
                className={selectedSort.icon}
            ></i>
        },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            ),
            componentIcon: <i
                className={selectedSort.icon}
            ></i>
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users} />
    );
};
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersTable;