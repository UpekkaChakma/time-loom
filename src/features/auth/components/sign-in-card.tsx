import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex justify-center items-center text-center px-7 pb-0">
        <CardTitle className="text-3xl">Welcome back</CardTitle>
      </CardHeader>
      <CardContent className="p-7">
        <form className="space-y-4" action="">
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Enter password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size="lg" className="w-full">
            Log in
          </Button>
          <div className="py-4 px-7">
            <Separator />
          </div>
          <CardContent className="px-7 flex flex-col gap-y-4">
            <Button
              variant="secondary"
              disabled={false}
              size="lg"
              className="w-full"
            >
              <FcGoogle className="mr-2 size-5" />
              Login with Google
            </Button>
            <Button
              variant="secondary"
              disabled={false}
              size="lg"
              className="w-full"
            >
              <FaGithub className="mr-2 size-5" />
              Login with Github
            </Button>
          </CardContent>
        </form>
      </CardContent>
    </Card>
  );
};
