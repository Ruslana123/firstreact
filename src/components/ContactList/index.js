import React from 'react';

const ContactList = ({ contacts, onDelete }) => {
    console.log(contacts);
    return (
        <div>
            <h2>Список контактов</h2>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Телефон</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => onDelete(contact.id)}>Удалить</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;