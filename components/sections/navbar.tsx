import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="__className_4dd805 md:h-[7rem] h-[7rem] px-4 md:p-4 flex items-center justify-between sticky top-0 z-50 bg-[#F7F9FB]/70 backdrop-blur-md shadow-md !text-[#1E4145] md:!px-[10%]">
      <aside className="flex items-center gap-2 font-heading">
        <Link href="/">
          <img
            alt="logo"
            loading="lazy"
            width="200"
            height="10"
            decoding="async"
            src={"/logo.webp"}
          />
        </Link>
      </aside>
      <nav className="hidden lg:!flex relative z-10 max-w-max flex-1 items-center justify-center">
        <ul className="group flex flex-1 list-none items-center justify-center md:space-x-2 lg:space-x-4">
          <li>
            <Link
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm xl:text-lg transition-colors hover:bg-mainComplimentary1  focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              href="#services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm xl:text-lg transition-colors hover:bg-mainComplimentary1  focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#aboutUs"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm xl:text-lg transition-colors hover:bg-mainComplimentary1  focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              href="/#"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm xl:text-lg transition-colors hover:bg-mainComplimentary1  focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              href="/#faq"
            >
              Rates &amp; FAQs
            </Link>
          </li>
          <li>
            <Link
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm xl:text-lg transition-colors hover:bg-mainComplimentary1  focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Areas Served
            </Link>
          </li>
          <li>
            <Link
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm xl:text-lg transition-colors hover:bg-mainComplimentary1  focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              href="/#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center lg:hidden 2xl:!flex">
        <Link href="#">
          <span className="sr-only">
            Book an appointment with Ellie Shumaker
          </span>
          <button className="items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/80 h-10 px-4 py-2 font-heading hidden 2xl:!flex flex-1 md:flex-none md:text-lg md:p-6 !bg-mainComplimentary1 !text-[#1E4145] text-base hover:!bg-mainComplimentary1/60 !border-[#1E4145] border-[1px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles mr-2 h-5 w-5"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            Get Started
          </button>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 lg:hidden hover:bg-[#1E4145]/30"
            >
              <Menu className="!w-6 !h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex items-center justify-center bg-[#F5F7FA]">
            <div>
              <p className="text-3xl font-bold capitalize text-center !text-[#1E4145]">
                Ellie Shumaker
              </p>
              <nav className="relative mt-14 z-10 flex items-center justify-center">
                <ul className="list-none items-center justify-center md:space-x-2 lg:space-x-4 !flex !flex-col  !gap-10">
                  <li>
                    <Link
                      href="#"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      How I Help
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      Rates &amp; FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      Areas Served
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </aside>
    </div>
  );
}
