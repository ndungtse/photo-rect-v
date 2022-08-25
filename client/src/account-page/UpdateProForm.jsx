import React, { useState } from 'react';
import { BiImageAdd, BiX } from 'react-icons/bi';
import { useAuth } from '../contexts/AuthContext';
import LoadingButton from '@mui/lab/LoadingButton';
import { useUsers } from '../Messages/contexts/userContext';
import { useApp } from '../contexts/AppContext';

const UpdateProfile = ({setShowUpForm, user}) => {
    const [imageString, setImageStr] = useState('');
	const [preview, setPreview]= useState({state: false, url: ''});
	const [loading, setLoading] = React.useState(false);
    const { updatePhoto } = useUsers()
    const { setUser } = useAuth()
	const { isDark } = useApp()

    const previewFile = (e) => {
		const file = e.target.files[0];
		console.log(file);
		setPreview({state: true, url: URL.createObjectURL(e.target.files[0])})
		const reader = new FileReader();
		reader.addEventListener('loadend',() => {
			setImageStr(reader.result);
		});
		reader.readAsDataURL(file);
		console.log(imageString);
	}

    const submitPhoto = async(e) => {
		setLoading(true);
	  const isdone = await updatePhoto({ imageStr: imageString, user: user._id });
	  if(isdone.done){
		console.log('done');
        setUser(isdone.user)
	    setShowUpForm(false);
	  }
	}

    return(
        <div className="w-full top-0 left-0 z-[10] absolute bg-black/70 
		flex flex-col items-center justify-center h-screen">
			<div onClick={()=> setShowUpForm(false)}
			 className="w-full h-screen absolute top-0 left-0 z-[15]"></div>
			<div className={`flex z-20 flex-col relative items-center w-1/3 rounded-xl p-4 min-w-[300px] bg-white ${isDark && 'text-white bg-[#0a0520]'}`}>

					<BiX onClick={()=> setShowUpForm(false)} 
					 className="text-4xl absolute top-1 hover:text-red-600 cursor-pointer right-3" />
				<h2 className="text-center text-xl">Add a profile photo</h2>
				<label htmlFor="post" className="flex flex-col mt-2 cursor-pointer text-blue-700 items-center">
						<BiImageAdd className={`${preview.state?'text-3xl':'text-[8em]'}`} />
						<p>Add A Photo</p>
					</label>
				{preview.state &&(
					<div className="w-[150px] mx-auto mt-3 h-[150px] overflow-hidden">
          				<img src={imageString} className="object-cover min-h-full min-w-full" alt="" />
          			</div>
				)}
				<div className="w-full mt-4 flex items-center justify-center">
					<ButtonSend submitPhoto={submitPhoto} setLoading={setLoading} loading={loading} />
					<input onChange={previewFile}  className="hidden" type="file" id="post" accept="image/*" />
					{/* <button onClick={submitPost}
					 className="px-4 py-2 bg-blue-600 text-white">Post</button> */}
				</div>
			</div>
		</div>
    )
}

const ButtonSend = ({loading, setLoading, submitPhoto}) => {
	function handleClick() {
	  setLoading(true);
	  submitPhoto();
	}

	return(
		<LoadingButton
          color="primary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
        //   startIcon={<SaveIcon />}
          variant="contained"
        >
          Update Photo
        </LoadingButton>
	)
}

export default UpdateProfile;