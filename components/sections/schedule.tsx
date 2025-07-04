export function Schedule() {
  return (
    <div className="bg-[#1E4145] !mt-0 mx-0 py-12 md:py-12 xl:py-20 md:gap-6  px-4 md:px-[10%] relative lg:flex lg:gap-3 bg-contrast justify-center items-center">
      <div className="lg:flex-1 flex flex-col lg:flex-row justify-center items-center gap-8">
        <p className="font-bold text-4xl lg:text-4xl text-[#B5DBDF] flex gap-3 lg:gap-4 relative text-center lg:text-left">
          Schedule A Consultation
        </p>
        <p className="font-bold text-lg lg:text-lg xl:text-xl text-[#B5DBDF] relative text-center">
          Ellie Shumaker is currently accepting new clients. Availabile for
          online and in-person sessions.
        </p>
        <div className="flex gap-2 flex-col items-center justify-self-center">
          <a href="/book">
            <span className="sr-only">
              Call and book appointment with Ellie Shumaker
            </span>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-md lg:text-lg lg:p-6 bg-transparent border-2 text-[#B5DBDF] border-[#F5F7FA] hover:bg-[#F5F7FA] hover:text-[#1E4145]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-sparkles mr-2 h-5 w-5"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              Start Healing
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
