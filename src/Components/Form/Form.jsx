import { useState } from "react";

const Form = () => {
    const[name, setName]=useState(null);
    const[email, setEmail]=useState(null);
    const[password, setPassword]=useState(null);
    const [error, setError]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(password.length<8){
            setError('password should be at least 8 characters')
        }else{
            setError('')
        }
        console.log(name, email, password);
    }
    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-2"> 
                <input onChange={handleNameChange} type="text" name="name"  className="border border-green-500"/>
                <br />
                <input 
                  onChange={handleEmailChange} required type="email" name="email" className="border border-green-500"/>
                <br />
                <input onChange={handlePasswordChange} required type="password" name="password" className="border border-green-500"/>
                <br />
                <input className="border border-black" type="submit" value='Submit' />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default Form;