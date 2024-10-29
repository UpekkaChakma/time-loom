"use client";

import { Loader, LogOut } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import { useLogout } from "@/features/auth/api/use-logout";
import { useCurrent } from "@/features/auth/api/use-current";

const UserButton = () => {
  const { data: user, isLoading } = useCurrent();
  const { mutate: logout } = useLogout();
  if (isLoading) {
    <div className="size-10 rounded-full bg-neutral-200 border border-neutral-300 flex justify-center items-center">
      <Loader className="size-4 animate-spin text-muted-foreground" />
    </div>;
  }

  if (!user) {
    return null;
  }

  const { name, email } = user;
  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : email.charAt(0).toUpperCase() ?? "A";
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition-border border-neutral-300">
          <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex justify-center items-center pt-1">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        sideOffset={10}
        className="w-60"
      >
        <div className="flex flex-col items-center justify-end gap-2 px-2 5 py-4">
          <Avatar className="size-[52px] transition-border border-neutral-300">
            <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex justify-center items-center pt-1">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-medium text-neutral-900">
              {name || "User"}
            </p>
            <p className="text-xs text-neutral-500">{email}</p>
          </div>
        </div>
        <Separator className="mb-1" />
        <DropdownMenuItem
          onClick={() => logout()}
          className="h-10 flex justify-center items-center text-amber-700 font-medium cursor-pointer"
        >
          <LogOut className="size-4 mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
