import React, { useState, useRef } from 'react';
import { useAuth } from '../Context/Auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { landingBg, kccLogo } from '../assets';

const Signup = () => {

	const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [toggleErrorMessage, seTtoggleErrorMessage] = useState(false);

    const db = getFirestore()
    const colRef = collection(db, 'users')

	const { signup } = useAuth();
    let navigate = useNavigate();

    const userRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    async function handleSignupButton(e) {
        e.preventDefault();

        try {
            setLoading(true);
			setError("");

            if (!emailRef.current.value || !userRef.current.value ||  !passRef.current.value){
                setError('Please fill-up all the empty fields')
                seTtoggleErrorMessage(true)

            }else{
                await signup(emailRef.current.value, passRef.current.value).then(cred => {
                    return addDoc(colRef, {
                    user_id: cred.user.uid,
                    user_name: userRef.current.value,
                    user_email: emailRef.current.value
                    })        
                })
                navigate("/home");
            }

        }catch{
            seTtoggleErrorMessage(true)
            setError('Failed to create an account')
        }
        setLoading(false);
    }

    return (
        <div className="relative w-screen h-screen bg-blue-300 flex items-center justify-center flex-col">

            <div className="absolute w-screen h-screen flex items-center justify-center">
                <img src={landingBg} alt="image" 
                    className="h-full w-full absolute" />   
                <div className="bg-blue-700 bg-opacity-90 h-full w-full absolute"></div>             
            </div>

            <div className="relative bg-slate-200 w-[800px] h-[500px] rounded-xl flex flex-col gap-10 items-center justify-center overflow-hidden">
                
                     <img className="w-[120px] h-20"
                        src={kccLogo} alt="image" />

                    <div className="flex gap-6 flex-col font-poppins">

                        <input className="h-10 w-72 outline-none bg-blue-50 p-2 rounded-lg" type="text" placeholder='User Name' ref={userRef}/> 

                        <input className="h-10 w-72 outline-none bg-blue-50 p-2 rounded-lg" type="text" placeholder='Email' ref={emailRef}/>
                        
                        <input className="h-10 w-72 outline-none bg-blue-50 p-2 rounded-lg" type="password" placeholder='Password' ref={passRef}/>

                    </div>

                    <h1 className={`${toggleErrorMessage ? 'flex' : 'hidden'} font-poppins`}>{error}</h1>

                    <button className="h-10 w-72 bg-blue-500 font-poppins text-white rounded-lg 
                                        hover:scale-y-110 duration-300 ease-in-out transition-all"
                            onClick={handleSignupButton}
                            disabled={loading}>
                        SIGNUP
                    </button>
                    <a className="font-poppins text-sm hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
                        onClick={() => navigate("/")}>Already have an account?</a>          
             
            </div>

        </div>
    )
}

export default Signup