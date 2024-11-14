'use client'

import Link from 'next/link';
import {BsGithub, BsGoogle} from 'react-icons/bs'

const SigninForm = () => {

    const loginHandler = (e)=>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value

        console.log(email,password)
    }


    return (
        <section className="w-11/12 max-w-[380px] flex flex-col items-center bg-white p-7 mt-10 rounded-lg shadow-sm">
            <form onSubmit={loginHandler} className='flex flex-col items-center gap-5 w-full'>


<section className="flex flex-col w-full">
<label htmlFor="email" className="text-sm font-semibold">Email address</label>
<input type='email' name="email" className="mt-2 w-full rounded-lg py-2 px-2 border text-sm" />
</section>npx prismarm -rf node_modules package-lock.json

<section className="flex flex-col w-full">
<label htmlFor="email" className="text-sm font-semibold">Password</label>
<input type='password' name="password" className="mt-2 w-full rounded-lg py-2 px-2 border text-sm" />
</section>
<button className="w-full bg-[#3775fd] py-2 rounded-lg text-white mt-2 text-sm">Sign In</button>
</form>
<div className="divider divider-[gray] text-gray-500 mt-5 text-xs">Or Continue With</div>

<div className="flex gap-2 w-full">
    <button className='w-1/2 flex justify-center items-center border rounded py-2'><BsGithub/></button>
    <button className='w-1/2 flex justify-center items-center border rounded py-2'><BsGoogle/></button>
</div>
<div className='mt-7 text-xs text-gray-500'>New to Messenger? <Link href='/signup'><span className='underline'>Create an account</span></Link></div>
        </section>
    );
};

export default SigninForm;