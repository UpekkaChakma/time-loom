import UserButton from "@/features/auth/components/user-button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-4 px-6">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground">
          Monitor all of your projects and task here
        </p>
      </div>
      <UserButton />
    </nav>
  );
};

export default Navbar;
