import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../utils/validator";
import API from "../../../api";
import SelectField from "../form/selectField";
import TextAreaField from "../form/textAreaField";
const initialData = { userId: "", content: "" };

const AddCommentForm = ({ onSubmit }) => {
    const [data, setData] = useState(initialData);
    const [users, setUsers] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        userId: {
            isRequired: {
                message: "Выберите от чьего имени вы хотите отправить сообщение"
            }
        },
        content: {
            isRequired: {
                message: "Сообщение не может быть пустым"
            }
        }
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => {
        API.users.fetchAll().then(setUsers);
    }, []);

    const clearForm = () => {
        setData(initialData);
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        onSubmit(data);
        clearForm();
    };

    const arrayOfUsers =
        users &&
        Object.keys(users).map((userId) => ({
            label: users[userId].name,
            value: users[userId]._id
        }));
    console.log(arrayOfUsers);

    return (
        <div>
            <h2>New content</h2>
            <form onSubmit={handleSubmit}>
                <SelectField
                    options={arrayOfUsers}
                    name="userId"
                    onChange={handleChange}
                    value={data.userId}
                    defaultOption="Выбери пользователя"
                    error={errors.userId}
                />
                <TextAreaField
                    value={data.content}
                    onChange={handleChange}
                    name="content"
                    label="Сообщение"
                    error={errors.content}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

AddCommentForm.propTypes = {
    onSubmit: PropTypes.func
};

export default AddCommentForm;
