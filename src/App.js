import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                // Преобразуем данные, чтобы они соответствовали ожидаемой структуре
                const formattedContacts = data.map(contact => ({
                    id: contact.id,
                    firstName: contact.name.split(' ')[0], // Имя
                    lastName: contact.name.split(' ')[1], // Фамилия
                    phone: contact.phone // Телефон
                }));
                setContacts(formattedContacts);
            });
    }, []);

    const handleSave = (contact) => {
        setContacts([...contacts, contact]);
        toggleForm();
    };

    const handleDelete = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <h1>Contacts</h1>
            <ContactList contacts={contacts} onDelete={handleDelete} />
            <button onClick={toggleForm}>{showForm ? 'Скрыть форму' : 'Добавить контакт'}</button>
            {showForm && <ContactForm onSave={handleSave} onCancel={toggleForm} />}
        </div>
    );
};

export default App;