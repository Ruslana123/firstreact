import React, { useState } from 'react';

const ContactForm = ({ onSave, onCancel }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: Date.now(),
            firstName,
            lastName,
            phone,
        };
        onSave(newContact);
        setFirstName('');
        setLastName('');
        setPhone('');
    };

    return (
        <div>
            <h2>Додати новий контакт</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Ім'я:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Прізвище:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Телефон:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <button type="submit">Зберегти</button>
                <button type="button" onClick={onCancel}>Скасувати</button>
            </form>
        </div>
    );
};

export default ContactForm;

