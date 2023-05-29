import React from "react";
import {Link,useLocation} from "react-router-dom";
import user from "../images/user.jpg"

const ContactDetail= (props)=>{
    const { state } = useLocation();

    // console.log(state)
    const {name, email} = state.contact;
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>

            <Link to="/">
                <div className="center-div">
                    <button className="ui button blue center">Back to contact List</button>
                </div>
            </Link>
        </div>
    );
}

export default ContactDetail;