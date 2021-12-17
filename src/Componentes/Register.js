import React, { useState } from 'react';
import "../Estilos/Register.css";
import {Link, Route, Router, Path} from "react-router-dom";
import axios from 'axios';

function Register(){

    const [nombre , setNombre] = useState("");
    const [email , setEmail] = useState("");
    const [contrasenia , setContrasenia] = useState("");
    const [reContrasenia , setReContrasenia] = useState("");
      
    
    const onChangeName = (e) =>
    {
       setNombre({nombre : e.target.value});
       console.log(nombre);
    }
    const onChangeEmail = (e) =>
    {
       setEmail({email : e.target.value});
       console.log(email);
    }
    const onChangePass = (e) =>
    {
       setContrasenia({contrasenia : e.target.value});
       console.log(contrasenia);
    }
    const onChangeRePass = (e) =>
    {
       setReContrasenia({reContrasenia : e.target.value});
       console.log(reContrasenia);
    }                
    const register = () => 
    {
        let data = [nombre, email, contrasenia];
        console.log(nombre, email, contrasenia);
        axios.post("http://localhost:4001/register", data).then(res => console.log(res));
    }

     return(
        <div className="divRegister">
            <form className="row">
                <div className="col-12">
                <label className="Register-label">Registarse</label>
                </div>
                <div className="col-12">
                    <input type="text" className="form-control userName"  name='userName' id="userName" placeholder="Apodo" onChange={onChangeName}/>
                </div>
                <div className="col-12">
                   <input type="email" class="form-control userMail" id="userMail" name='userMail'  placeholder="name@example.com" onChange={onChangeEmail}/>
                </div>
                <div className="col-12">
                    <input type="password" className="form-control userPass" name='userPass'  id="userPass" placeholder="Password" onChange={onChangePass}/>
                </div>
                <div className="col-12">
                    <input type="password" className="form-control confirmPass" name='confirmPass'   id="confirmPass" placeholder="Confirm Password" onChange={onChangeRePass}/>
                </div>
                <div className="col-12">
                    <Link to={"/"} className="btn btn-primary" onClick={register} >Enviar</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
