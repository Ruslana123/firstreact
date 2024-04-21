import React from 'react';

const ContactItem = ({ contact, onDelete }) => {
    const { id, firstName, lastName, phone } = contact;

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phone}</td>
            <td>
                <button onClick={handleDelete}>Видалити</button>
            </td>
        </tr>
    );
};

export default ContactItem;