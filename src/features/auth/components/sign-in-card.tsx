import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useLogin } from "@/features/auth/api/use-login";
import { loginSchema } from "@/features/auth/schemas";

export const SignInCard = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useLogin();

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate({ json: values });
  };
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex justify-center items-center text-center px-7 pb-0">
        <CardTitle className="text-2xl">Login to your account</CardTitle>
      </CardHeader>
      <CardContent className="p-7 pb-9">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email address"
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={false} size="lg" className="w-full capitalize">
              Log in
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-sm text-neutral-500 px-4">
          or
        </div>
        <Separator />
      </div>
      <CardContent className="p-7 pt-9 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          disabled={false}
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5" />
          Sign in with Google
        </Button>
        <Button
          variant="secondary"
          disabled={false}
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          Sign in with Github
        </Button>
      </CardContent>
      <CardContent className="flex gap-1">
        <p>Don't have an account?</p>
        <Link href="/sign-up">
          <span className="text-blue-700"> Sign up</span>
        </Link>
      </CardContent>
    </Card>
  );
};
