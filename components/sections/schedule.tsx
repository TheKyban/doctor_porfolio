import { Sparkle } from "lucide-react";

export function Schedule() {
  return (
    <div className="bg-[#1E4145] !mt-0 mx-0 py-12 md:py-12 xl:py-20 md:gap-6  px-4 md:px-[10%] relative lg:flex lg:gap-3 bg-contrast justify-center items-center">
      <div className="lg:flex-1 flex flex-col lg:flex-row justify-center items-center gap-8">
        <p className="font-bold text-4xl lg:text-4xl text-[#B5DBDF] flex gap-3 lg:gap-4 relative text-center lg:text-left">
          Schedule A Consultation
        </p>
        <p className="font-bold text-lg lg:text-lg xl:text-xl text-[#B5DBDF] relative text-center">
          Dr. Serena Blake is currently accepting new clients. Availabile for
          online and in-person sessions.
        </p>
        <div className="flex gap-2 flex-col items-center justify-self-center">
          <a href="#contact">
            <span className="sr-only">
              Call and book appointment with Dr. Serena Blake
            </span>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-md lg:text-lg lg:p-6 bg-transparent border-2 text-[#B5DBDF] border-[#F5F7FA] hover:bg-[#F5F7FA] hover:text-[#1E4145]">
              <Sparkle className="mr-2 h-5 w-5" />
              Start Healing
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
