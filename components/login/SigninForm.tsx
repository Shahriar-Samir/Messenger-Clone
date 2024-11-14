'use client'

const SigninForm = () => {
    return (
        <form className='flex flex-col items-center gap-5 mt-10 p-5 bg-white w-11/12 max-w-[380px]'>


            <section className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm font-semibold">Email address</label>
            <input className="mt-2 w-full rounded-lg py-1 px-2 border" type='email'/>
            </section>

            <section className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm font-semibold">Password</label>
            <input className="mt-2 w-full rounded-lg py-1 px-2 border" type='password'/>
            </section>
            <button className="w-full bg-[#3775fd] py-2 rounded-lg text-white">Sign In</button>
        </form>
    );
};

export default SigninForm;