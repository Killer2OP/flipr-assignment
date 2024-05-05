import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Package2Icon, SearchIcon, ShoppingCartIcon, TruckIcon, UsersIcon } from "lucide-react";
import { HomeIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center border-b bg-gray-100 px-6 dark:bg-gray-800">
      <div className="flex items-center gap-4">
        <Link href="/">
          <span className="flex items-center gap-2 text-lg font-semibold">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Admin</span>
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="/">
            <span className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <HomeIcon className="h-4 w-4" />
              Dashboard
            </span>
          </Link>
          <Link href="/Customer">
            <span className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <UsersIcon className="h-4 w-4" />
              Customers
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <ShoppingCartIcon className="h-4 w-4" />
              Orders
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <TruckIcon className="h-4 w-4" />
              Shipping
            </span>
          </Link>
        </nav>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <form className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            className="w-full bg-white shadow-none appearance-none pl-8 md:w-[300px] dark:bg-gray-950"
            placeholder="Search"
            type="search"
          />
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/next.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Admin</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
