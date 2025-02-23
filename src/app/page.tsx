import Image from "next/image";
import Topnav from "./components/topnav";

export default function Home() {
  return (
    <div className="">
      <Topnav />

      <div className="flex border-black border-t-2 min-h-[91vh]">
        <div className="w-1/2   bg-white">
          <div className="flex flex-col p-8 text-8xl text-black">
            <h1>Wear</h1>
            <h1 className="text-[#942D24]">Good.</h1>
            <h1>Feel</h1>
            <h1 className="text-[#942D24]">Good.</h1>
            <span className="text-lg mt-10 mb-5">Personalized fashion and beauty, made <br /> for you. Discover your perfect fit today!</span>
            <button className="text-lg w-[10rem] h-[3rem] px-4 py-1 bg-[#942D24] text-white rounded ">Sign up</button>
          </div>          
        </div>

        <div className="relative flex justify-center items-center w-1/2   bg-[#942D24]">
          <div className="relative">
            <Image
              src={"/Home/Showcase.png"}
              alt="Showcase"
              width={300} // Adjust size as needed
              height={300} // Adjust size as needed
              objectFit="contain" // Keeps image inside container without cropping
            />

          </div>
            {/* Top Left */}
            <Image
              src={"/Home/tlbr.png"}
              alt="Star Top Left"
              width={150}
              height={150}
              className="absolute top-2 left-20"
            />

            {/* Top Right */}
            <Image
              src={"/Home/tr.png"}
              alt="Star Top Right"
              width={100}
              height={100}
              className="absolute top-9 right-32"
            />

            {/* Bottom Left */}
            <Image
              src={"/Home/bl.png"}
              alt="Star Bottom Left"
              width={80}
              height={80}
              className="absolute bottom-9 left-32"
            />

            {/* Bottom Right */}
            <Image
              src={"/Home/tlbr.png"}
              alt="Star Bottom Right"
              width={150}
              height={150}
              className="absolute bottom-2 right-20"
            />
        </div>
      </div>
    </div>
  );
}
