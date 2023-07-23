import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../Context/Auth';
import { useNavigate } from 'react-router-dom';
import { landingBg, cardBg, kccLogo } from '../assets';

const App = () => {


	const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [toggleErrorMessage, seTtoggleErrorMessage] = useState(false);

	const { login, currentUser } = useAuth();
    let navigate = useNavigate();

    const emailRef = useRef();
    const passRef = useRef();

    async function handleLoginButton(e) {
        e.preventDefault();

		
        try {
			setLoading(true);
			setError("");

			if (!emailRef.current.value || !passRef.current.value) {
				seTtoggleErrorMessage(true)
				setError("Please enter a valid email and password!!");
			} else {
				await login(emailRef.current.value, passRef.current.value);
				navigate("/home");
			}
        } catch {
          setError("Failed to sign in!!");
          seTtoggleErrorMessage(true)
        }
        setLoading(false);
    }


    useEffect(() => {
        if (currentUser) {
            navigate("/home");
        }
    }, [currentUser]);

    return (
        <div className="relative w-screen h-screen bg-blue-300 flex items-center justify-center flex-col">

            <div className="absolute w-screen h-screen flex items-center justify-center">
                <img src={landingBg} alt="image" 
                    className="h-full w-full absolute" />   
                <div className="bg-blue-700 bg-opacity-90 h-full w-full absolute"></div>             
            </div>

            <div className="relative bg-slate-200 w-[800px] h-[500px] rounded-xl flex items-center justify-center overflow-hidden">

                <div className="relative w-[400px] h-full overflow-hidden">

                    <div className="w-full h-full absolute hover:scale-110 duration-500 transition-all ease-in-out">
                        <img src={cardBg} alt="image" 
                            className="h-full w-full absolute" /> 
                        <div className="bg-blue-700 bg-opacity-50 h-full w-full absolute"></div>  
                    </div>

                    <div className="absolute bottom-10 flex flex-col w-full gap-4 items-center">

                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/KCCMallMarbel" target="_blank">
                                <svg className="w-10 h-10 bg-white bg-opacity-70 rounded-full p-2 
                                            hover:bg-opacity-100 hover:scale-125 duration-500 transition-all ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Layer_1" viewBox="0 0 310 310" xml:space="preserve">
                                    <g id="XMLID_834_">
                                        <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                                    </g>
                                </svg>  
                            </a>

                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fkccphil%3Flang%3Den" target="_blank">

                                <svg className="w-10 h-10 bg-white bg-opacity-70 rounded-full p-2 
                                                hover:bg-opacity-100 hover:scale-125 duration-500 transition-all ease-in-out" 
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Layer_1" viewBox="0 0 310 310" xml:space="preserve">
                                    
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                                    <g id="SVGRepo_iconCarrier"> <g id="XMLID_826_"> <path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"/> </g> </g>

                                </svg>   
                            </a>

                            <a href="https://www.tiktok.com/@kccmallofgensan_official?lang=en" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000"viewBox="0 0 32 32" version="1.1"
                                    className="w-10 h-10 bg-white bg-opacity-70 rounded-full p-2 
                                    hover:bg-opacity-100 hover:scale-125 duration-500 transition-all ease-in-out">
                                    <title>tiktok</title>
                                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"/>
                                </svg>
                            </a>

                        </div>

                        <div className="flex items-center flex-col">
                            <h1 className="font-poppins text-white text-xs " >
                                Don't have an account?
                            </h1>
                            <a className="font-poppins border-b-2 text-white text-sm hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer" 
                                onClick={() => navigate("/signup")}>Signup</a>                               
                        </div>
                
                    </div>

                       


                </div>

                <div className="w-[400px] h-full bg-white flex items-center justify-center flex-col gap-10">

                    <img className="w-[120px] h-20"
                        src={kccLogo} alt="image" />

                    <div className="flex gap-6 flex-col font-poppins">

                        <input className="h-10 w-72 outline-none bg-blue-50 p-2 rounded-lg" type="text" placeholder='Email' ref={emailRef}/>
                        
                        <input className="h-10 w-72 outline-none bg-blue-50 p-2 rounded-lg" type="password" placeholder='Password' ref={passRef}/>

                    </div>

                    <h1 className={`${toggleErrorMessage ? 'flex' : 'hidden'} font-poppins`}>{error}</h1>

                    <button className="h-10 w-72 bg-blue-500 font-poppins text-white rounded-lg 
                                        hover:scale-y-110 duration-300 ease-in-out transition-all"
                            onClick={handleLoginButton}
                            disabled={loading}>
                        LOGIN
                    </button>
                    <a className="font-poppins text-sm cursor-pointer hover:scale-110 duration-300 ease-in-out transition-all"
                        onClick={() => navigate("/forgotpassword")}>Forgot Password?</a>                      
                </div>
             
            </div>

        </div>
    )
}

export default App