import React from 'react'
import { kccPhoto, food, milktea, pasta } from '../assets'

const Hero = () => {
  return (
    <div className="relative w-full h-[1500px] flex flex-col gap-60">

		<div className="flex items-center justify-center mt-32 gap-[150px]">

			<div className="w-[500px] h-[400px] rounded-3xl overflow-hidden relative">
				<img className="w-[600px] h-[350px] absolute bottom-0 hover:scale-125 transition-all duration-300 ease-in-out"
				src={kccPhoto} alt="kcc logo" />        
			</div>

			<div className="w-[550px] flex flex-col gap-5">
				<h1 className="font-poppins text-5xl font-semibold text-white">Indulge in a world of: 
					<span className="text-6xl"><br />Shopping and </span>
					<span className="text-6xl"><br />Entertainment!</span>
				</h1>	
				<p className="font-poppins text-2xl text-black font-medium">KCC Mall is the ultimate shopping destination, offering a wide variety of stores, restaurants, and entertainment options all under one roof. Come visit us today and discover all that we have to offer! </p>			
			</div>


		</div>

		<div className="relative h-96 w-full flex items-center justify-center">

			<div>
				<div className="w-[300px] h-[300px] rounded-full overflow-hidden absolute right-0 top-0">
						<img className="w-[400px] h-[300px] absolute hover:scale-125 transition-all duration-300 ease-in-out"
						src={food} alt="kcc logo" />        
				</div>

				<div className="w-[250px] h-[250px] rounded-full overflow-hidden absolute right-[220px] top-20 z-10">
						<img className="w-[400px] h-[300px] absolute hover:scale-125 transition-all duration-300 ease-in-out"
						src={milktea} alt="kcc logo" />        
				</div>

				<div className="w-[200px] h-[200px] rounded-full overflow-hidden absolute right-16 top-[220px]">
						<img className="w-[300px] h-[200px] absolute hover:scale-125 transition-all duration-300 ease-in-out"
						src={pasta} alt="kcc logo" />        
				</div>				
			</div>

			<div className="w-[550px] flex flex-col gap-5 absolute left-0">
				<h1 className="font-poppins text-5xl font-semibold text-white text-end">Indulge in a
					<span className="text-6xl"><br />Taste Sensation </span>
					with our
					<span className="text-6xl"><br />Mouth-watering Dishes!</span>
				</h1>	
				<p className="font-poppins text-2xl text-black font-medium text-end">KCC Mall offers a wide variety of mouth-watering dishes that are sure to satisfy your cravings. Come visit us today and indulge in a culinary adventure with our delectable cuisine! </p>			
			</div>




		</div>

    </div>
  )
}

export default Hero