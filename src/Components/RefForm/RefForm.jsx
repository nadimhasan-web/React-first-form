import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-2"> 
                <input ref={nameRef} type="text" name="name"  className="border border-green-500"/>
                <br />
                <input 
                   required ref={emailRef} type="email" name="email" className="border border-green-500"/>
                <br />
                <input  required ref={passwordRef} type="password" name="password" className="border border-green-500"/>
                <br />
                <input className="border border-black" type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default RefForm;