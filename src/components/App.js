import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import api from "../api/contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  // //RetrieveContacts from localstorage
  // const [contacts, setContacts] =useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))??[]);

  // const [contacts, setContacts] =useState(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   return retriveContacts ? retriveContacts : [];
  // });
  const [contacts, setContacts] =useState([]);

  //RetrieveContacts
  const retrieveContacts = async ()=>{
    const response = await api.get("/contacts");
    return response.data;
  }

  // addContactHandler is getting contact from AddContact component
  const addContactHandler= async(contact)=>{
    // console.log(contact);
    const request ={
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts",request)
    console.log(response);
    setContacts([...contacts,response.data]);    
    // setContacts([...contacts,{id: uuidv4(), ...contact}]);

  } 

   // updateContactHandler is getting contact from updateContact component
   const updateContactHandler= async(contact)=>{
    const response = await api.put(`/contacts/${contact.id}`, contact)
    console.log(response.data);
   };

  const removeContactHandler = async (id)=>{
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    }); 

    setContacts(newContactList);
  }

  useEffect(()=>{
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retrieveContacts){
    // setContacts(retrieveContacts);
    const getAllContacts = async()=>{
      const allContacts = await retrieveContacts();
      if(allContacts){
        setContacts(allContacts);
      }
    }
      getAllContacts();
  },[]);

  //when value changes then useEffect helps to render the component again and 
  // when we refresh the entered data goes away-> data is not persistent -> so we use localStorage
  useEffect(()=>{
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler}/>}/>
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </BrowserRouter>
     </div>
  );
}

export default App;
