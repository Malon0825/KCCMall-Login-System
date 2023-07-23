import React, { useState } from 'react';
import { useAuth } from '../Context/Auth';
import { useNavigate } from 'react-router-dom';
import { landingBg, kccLogo } from '../assets';
import { Hero, Profile } from '../Home';


const Home = () => {

	const [toggleHero, setToggleHero] = useState(true);
	const [toggleProfile, setToggleProfile] = useState(false);

	const { logout } = useAuth()
	let navigate = useNavigate()

	async function handleLogout() {

		try {
		await logout()
		navigate("/")
		}catch {
		}
	}

	function handleClickHome () {
		setToggleHero(true);
		setToggleProfile(false);
	}


	function handleClickProfile () {
		setToggleHero(false);
		setToggleProfile(true);
	}
  return (
    <div className="relative w-full flex items-center flex-col justify-center">

	    <div className="absolute w-full h-full flex items-center justify-center">
            <img src={landingBg} alt="image" 
                    className="h-full w-full absolute" />   
            <div className="bg-blue-700 bg-opacity-90 h-full w-full absolute"></div>             
        </div>

		<div className="sticky top-0 z-50 h-[80px] w-full bg-blue-700 flex items-center justify-center gap-[720px]">

			<div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center 
							cursor-pointer p-2 overflow-hidden hover:overflow-visible hover:scale-125 transition-all duration-300 ease-in-out">
				
				<img className="h-16 w-[250px] flex scale-x-125 animate-pulse hover:scale-x-150 absolute hover:overflow-visible hover:scale-125 transition-all duration-300 ease-in-out"
				src={kccLogo} alt="kcc logo" />
			</div>

			<div className="relative w-max font-poppins text-xl flex gap-14 cursor-pointer justify-center text-white">

				<a className="hover:scale-125 hover:font-semibold duration-300 transition-all ease-in-out"
					onClick={handleClickHome}>Home</a>

				<a className="hover:scale-125 hover:font-semibold duration-300 transition-all ease-in-out"
					onClick={handleClickProfile}>Profile</a>

				<a className="hover:scale-125 hover:font-semibold duration-300 transition-all ease-in-out"  
					onClick={handleLogout}>Logout</a>

			</div>

		</div>

		<div className="relative bg-opacity-10 w-[1100px] h-full flex justify-center">

			<div className={`${toggleHero? 'flex' : 'hidden'} w-[1100px] h-full`}>				
				<Hero/>
			</div>

			<div className={`${toggleProfile? 'flex' : 'hidden'} w-[1100px] h-full`}>				
				<Profile/>
			</div>

		</div>
    </div>
  )
}

export default Home