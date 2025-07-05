import { Menu, Sparkles } from "lucide-react";
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
            Book an appointment with Dr. Serena Blake
          </span>
          <button className="items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/80 h-10 px-4 py-2 font-heading hidden 2xl:!flex flex-1 md:flex-none md:text-lg md:p-6 !bg-mainComplimentary1 !text-[#1E4145] text-base hover:!bg-mainComplimentary1/60 !border-[#1E4145] border-[1px]">
            <Sparkles className="mr-2 h-5 w-5" />
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
                Dr. Serena Blake
              </p>
              <nav className="relative mt-14 z-10 flex items-center justify-center">
                <ul className="list-none items-center justify-center md:space-x-2 lg:space-x-4 !flex !flex-col  !gap-10">
                  <li>
                    <Link
                      href="#services"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      How I Help
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#aboutUs"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#testimonial"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#faq"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      Rates &amp; FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="text-2xl !text-[#1E4145] hover:bg-white px-3 py-1 rounded-md cursor-pointer"
                    >
                      Areas Served
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
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
