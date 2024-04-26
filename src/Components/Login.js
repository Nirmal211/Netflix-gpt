import React , {useState} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {

  const[isSigninForm , setIsSigninForm] = useState(true);

  const toggleForm = () => {
       setIsSigninForm(!isSigninForm);
  }

  return (
    <div>
        <Header/>   
        <div className='absolute w-screen h-[100vh]'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='logo'
            className='w-[100%] h-[100vh]'
            />
        </div>
            {/*  Create Form */}
            <form  className='absolute w-3/12 flex flex-col  bg-black bg-opacity-80 left-[38%] px-10 py-16 rounded-md gap-8 top-[18%] text-white'>
                <h1 className='text-4xl font-bold text-white'>{isSigninForm ?  "Sign In" : "Sign Up"}</h1>

                {
                  !isSigninForm && (
                    <input
                 type='text' 
                 title='fill this box' 
                 placeholder='Full Name' 
                 className='px-2 py-2 outline-none rounded-sm bg-gray-600 bg-opacity-60'
                />
                  )
                }

                <input
                 type='email' 
                 title='fill this box' 
                 placeholder='Email Address' 
                 className='px-2 py-2 outline-none rounded-sm bg-gray-600 bg-opacity-60'
                />

                <input 
                type='password' 
                title='fill this box' 
                placeholder='Enter password' 
                className='px-2 py-2 outline-none rounded-sm bg-gray-600 bg-opacity-60'
                />

                <button title='hit enter'className='px-2 py-2 bg-red-700 font-bold rounded-sm text-white'>{isSigninForm ?  "Sign In" : "Sign Up"}</button>
                <p onClick={toggleForm}>New to Netflix? 
                  <Link to='' className='pl-2 hover:underline'>{isSigninForm ?  "Sign Up Now" : "Sign In"}</Link>
                </p>
            </form>
    </div>
  )
}

export default Login