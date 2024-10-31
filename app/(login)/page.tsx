import SigninForm from "@/components/login/SigninForm";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex justify-center items-center h-[100vh] flex-col bg-[#F0F0F0]">
          <Image 
          height={500} 
          width={500} 
          alt="messenger-icon" 
          className="
          w-[50px] 
          h-[50px]
          " 
          src="/icons/messenger.png"
          />
          <h1 className="mt-5 text-2xl font-extrabold">Sign in to your account</h1>
          <SigninForm/>
    </main>
  )
  
};

export default page;