import React, { useState } from 'react';

const ContactForm = ({ onSave, onCancel }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ firstName, lastName, phone });
        setFirstName('');
        setLastName('');
        setPhone('');
    };

    return (
        <div>
            <h2>Форма контакта</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Фамилия:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Телефон:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button type="submit">Сохранить</button>
                <button type="button" onClick={onCancel}>Отмена</button>
            </form>
        </div>
    );
};

export default ContactForm

