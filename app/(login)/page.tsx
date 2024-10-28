import Image from "next/image";

const page = () => {
  return (
    <main className="flex justify-center items-center h-[80vh] flex-col">
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
    </main>
  )
  
};

export default page;