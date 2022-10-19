import logo from "../Home/Images/logo.png";
import React, { useRef, useEffect, useState } from 'react'
import { LinearProgress, Stack } from '@mui/material'

const AnimatedLogo = () => {
    const imgRef = useRef(null)
    const textRef = useRef(null)

	return (
		<div className="h-screen flex items-center flex-col justify-center z-50 bg-inherit absolute w-full">
			<div className="flex w-full justify-center items-center">
                <div className="flex bg-inherit justify-end">
				<img onLoad={() => {
                        const img = imgRef.current
                        const text = textRef.current
                        img.style.translate = "0px"
                        text.style.translate = "0px"
                        text.style.opacity = 1
					}}
                    style={{translate: "50px 0px"}}
                    ref={imgRef}
					className="w-[30px] z-10 duration-[3s]"
					src={logo}
					alt=""
				/>
                </div>
				<div className="overflow-hidden flex items-center">
				<h1
                    ref={textRef}
                    style={{translate: "-150px 0px"}}
					className={`text-xl ml-2 duration-[3s] opacity-0 flex justify-center  font-bold text-black
					}`}
				>
					<p>Photo</p> <span className="text-[#3a73ed]">Corner</span>
				</h1>
			</div>
			</div>
			<div className="w-[170px] mt-3">
				<LinearLoader />
			</div>
		</div>
	);
};

export default AnimatedLogo;

const LinearLoader = () => {
    const [progress, setProgress] = useState(0);
    const [display, setDisplay] = useState(true);

    useEffect(()=> {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            setDisplay(false);
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    },[])
  return (
    <Stack sx={{ width: '100%', color: '#3a73ed' , top: 0, display: 'flex'}}>
      {/* <LinearProgress color='inherit' variant='determinate'  value={progress}/> */}
      <LinearProgress color='inherit' variant='determinate'  value={progress}/>
    </Stack>
  )
}
