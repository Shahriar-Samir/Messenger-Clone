import Image from "next/image";

const page = () => {
  return (
    <main className="flex justify-center items-center h-[80vh]">
          <Image 
          height={500} 
          width={500} 
          alt="messenger-icon" 
          className="w-[50px] h-[50px]" 
          src="/icons/messenger.png"
          />
    </main>
  )
  
};

export default page;