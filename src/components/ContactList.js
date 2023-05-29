import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{
    // console.log(props);

    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    };

//    const contacts = [
//     {
//       id:"1",
//       name:"John",
//       email: "john@gmail.com",
//     },
//     {
//       id:"2",
//       name:"Bob",    
//       email: "bob@gmail.com",
//     }
//   ];
    const renderContactList = props.contacts.map((contact)=>{
        return(
        <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        ) 
        //we r passing the  clickHandler from the inner child to it's parent and then from parent to it's parent 
        //i.e ContactCard will give id to ContactList and from ContactList id will be given to App.js
    })
    // const renderContactList = contacts.map((contact)=>{
    //     return(
    //     <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
    //     ) 
    //     //we r passing the  clickHandler from the inner child to it's parent and then from parent to it's parent 
    //     //i.e ContactCard will give id to ContactList and from ContactList id will be given to App.js
    // })

    return(
        <div className="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
                
            </h2>

             <div className="ui celled list">{renderContactList}</div>
        </div>
    )
}

export default ContactList;