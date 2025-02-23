"use client";
import Image from "next/image";
import Topnav from "../components/topnav";

export default function Dashboard() {
  return (
    <div className="">
      <Topnav />

      <div className="flex border-black border-t-2 min-h-[91vh]">
        {/* Left Side: Dashboard Content */}
        <div className="w-1/2 bg-white p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg mb-10">
            This is your dashboard where you can view your profile, update settings, and check recent activity.
          </p>
          <div className="space-y-6">
            <div className="p-4 border rounded-md">
              <h2 className="text-2xl font-semibold">Your Profile</h2>
              <p>Manage your personal information and preferences.</p>
            </div>
            <div className="p-4 border rounded-md">
              <h2 className="text-2xl font-semibold">Settings</h2>
              <p>Update account settings and security details.</p>
            </div>
            <div className="p-4 border rounded-md">
              <h2 className="text-2xl font-semibold">Recent Activity</h2>
              <p>See your latest interactions and notifications.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Section */}
        <div className="relative flex justify-center items-center w-1/2 bg-[#942D24]">
          <div className="relative">
            <Image
              src={"/Dashboard/Showcase.png"}
              alt="Dashboard Showcase"
              width={300}
              height={300}
              objectFit="contain"
            />
          </div>
          {/* Decorative Elements */}
          <Image
            src={"/Home/tlbr.png"}
            alt="Star Top Left"
            width={150}
            height={150}
            className="absolute top-2 left-20"
          />
          <Image
            src={"/Home/tr.png"}
            alt="Star Top Right"
            width={100}
            height={100}
            className="absolute top-9 right-32"
          />
          <Image
            src={"/Home/bl.png"}
            alt="Star Bottom Left"
            width={80}
            height={80}
            className="absolute bottom-9 left-32"
          />
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
