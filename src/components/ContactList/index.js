import React from 'react';
import ContactItem from '../../components/ContactItem';

const ContactList = ({ contacts, onDelete }) => {
    console.log(contacts);
    return (
        <div>
            <h2>Контакти</h2>
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дія</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;