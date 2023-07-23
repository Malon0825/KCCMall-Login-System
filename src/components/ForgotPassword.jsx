import React, { useState, useRef } from 'react';
import { useAuth } from '../Context/Auth';
import { useNavigate } from 'react-router-dom';
import { landingBg, kccLogo } from '../assets';

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
    const [error, setError] = useState("");
    const [toggleErrorMessage, seTtoggleErrorMessage] = useState(false);

	const { resetPassword } = useAuth();
    let navigate = useNavigate();

    const emailRef = useRef();


    async function handleResetButton(e) {
        e.preventDefault();

        try {
            setLoading(true);
			setError("");

            await resetPassword(emailRef.current.value)
            setMessage(true)

        }catch{
            seTtoggleErrorMessage(true)
            setError('The email doesnt exist.')
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

                    <div className={`${message? 'flex' : 'hidden'} border-2 border-green-600 w-72 h-20 rounded-lg text-center p-4`}>

                        <h1 className="font-poppins text-green-700">
                            Please check your email and follow the link to reset your password.
                        </h1>

                    </div>

                    <div className="flex gap-6 flex-col font-poppins">

                        <input className="h-10 w-72 outline-none bg-blue-50 p-2 rounded-lg" type="text" placeholder='Email' ref={emailRef}/>

                    </div>

                    <h1 className={`${toggleErrorMessage ? 'flex' : 'hidden'} font-poppins`}>{error}</h1>

                    <button className="h-10 w-72 bg-blue-500 font-poppins text-white rounded-lg 
                                        hover:scale-y-110 duration-300 ease-in-out transition-all"
                            onClick={handleResetButton}
                            disabled={loading}>
                        RESET PASSWORD
                    </button>
                    <a className="font-poppins text-sm hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
                        onClick={() => navigate("/")}>Go back to login?</a>          
             
            </div>

        </div>
    )
}

export default ForgotPassword