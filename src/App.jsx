import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { nanoid } from 'nanoid'
import styles from './App.module.css'

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts ? JSON.parse(savedContacts) : initialContacts
  })
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (values) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }
    setContacts(prev => [...prev, newContact])
  }

  const deleteContact = (contactId) => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId))
  }

  const changeFilter = (value) => {
    setFilter(value)
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onFilter={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  )
}

export default App