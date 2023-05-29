import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props)=>{
    // console.log(props);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const add = (e)=>{
        e.preventDefault();
        if(name==="" || email===""){
            alert("All the fields are mandatory");
            return
        }
        props.addContactHandler({name,email});
         //to clear input fields after adding a contact
        setName("");
        setEmail("");
        navigate("/");
    };
    return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value = {name}
                        onChange={(e)=>setName(e.target.value )}
                        />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value= {email}
                        onChange={(e)=>{setEmail( e.target.value)}}
                        />
                    </div>

                    <button className="ui button blue"> Add</button>
                </form>                
            </div>
        );
    }
export default AddContact;



    // CLASS BASED COMPONENT
// import React from "react";
// class AddContact extends React.Component{

//     state ={
//         name: "",
//         email:"",
//     };
//     add=(e)=>{
//         e.preventDefault();
//         if(this.state.name==="" || this.state.email===""){
//             alert("All the fields are mandatory");
//             return
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({name:"", email:""}); //to clear input fields after adding a contact
//         // console.log(this.state);
//         console.log(this.props);


//     }

//     render(){
//         return(
//             <div className="ui main">
//                 <h2>Add Contact</h2>
//                 <form className="ui form" onSubmit={this.add}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input 
//                         type="text" 
//                         name="name" 
//                         placeholder="Name" 
//                         value = {this.state.name}
//                         onChange={(e)=>this.setState({ name: e.target.value })}
//                         />
//                     </div>

//                     <div className="field">
//                         <label>Email</label>
//                         <input 
//                         type="text" 
//                         name="email" 
//                         placeholder="Email"
//                         value= {this.state.email}
//                         onChange={(e)=>{this.setState({email: e.target.value})}}
//                         />
//                     </div>

//                     <button className="ui button blue"> Add</button>
//                 </form>                
//             </div>
//         );
//     }
// }

// export default AddContact;