'use client'

const SigninForm = () => {
    return (
        <form className='flex flex-col items-center gap-5 mt-10 p-5 bg-white'>
            <input type='email'/>
            <input type='password'/>
            <button>Sign In</button>
        </form>
    );
};

export default SigninForm;