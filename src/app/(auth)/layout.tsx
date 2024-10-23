import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          {/* <h1 className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="Logo" width="50" height="25" />
        <span className="text-[#2563eb]">TimeLoom</span>
      </h1> */}
          <Button variant="secondary">Sign Up</Button>
        </nav>
        <div className="flex flex-col justify-center items-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
