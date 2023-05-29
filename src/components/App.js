import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from './ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] =useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))??[]);

  // addContactHandler is getting contact from AddContact component
  const addContactHandler=(contact)=>{
    // console.log(contact);
    setContacts([...contacts,{id: uuidv4(), ...contact}]);

  } 

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    }); 

    setContacts(newContactList);
  }

  // useEffect(()=>{
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retriveContacts){
  //   setContacts(retriveContacts);
  // }
  // },[]);

  //when value changes then useEffect helps to render the component again and 
  // when we refresh the entered data goes away-> data is not persistent -> so we use localStorage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  // const contacts = [
  //   {
  //     id:"1",
  //     name:"John",
  //     email: "john@gmail.com",
  //   },
  //   {
  //     id:"2",
  //     name:"Bob",
  //     email: "bob@gmail.com",
  //   }
  // ];


  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<ContactList  contacts={contacts} getContactId={removeContactHandler}/>}/>
         <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
         <Route path="/contact/:id" element={<ContactDetail/>}/>
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </BrowserRouter>
     </div>
  );
}

export default App;
