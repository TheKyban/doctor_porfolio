import { CompassIcon, HeartHandshakeIcon, HeartIcon } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center min-h-[calc(100vh-7rem)]">
      <img
        alt="hero background"
        fetchPriority="high"
        decoding="async"
        data-nimg="fill"
        className="object-cover object-center z-0 absolute h-full w-full inset-0"
        sizes="100vw"
        src="/hero.webp"
      />
      <div className="absolute inset-0 bg-[#000]/30 z-10"></div>
      <div className="relative z-20 text-center px-4 md:px-[10%] max-w-screen-2xl">
        <h1 className="text-[#F5F7FA]/80 text-sm mb-3">
          Christian Counseling Services in Richmond &amp; Central Virginia
        </h1>
        <span className="font-para font-extrabold text-3xl md:text-4xl text-[#F5F7FA] py-2 pb-1 md:py-4 md:gap-4 text-center">
          Professional Counseling for Christian Healing and Growth
        </span>
        <div className="text-[#F5F7FA] sm:max-w-sm lg:max-w-[700px] text-center mx-auto font-medium text-base my-4 md:text-2xl">
          <p className="">
            Begin your journey today towards spiritual growth, deeper
            relationships, and lasting inner peace.
          </p>
          <div className="mt-2 flex flex-col justify-center align-center text-center">
            <h3 className="text-lg lg:text-xl font-extrabold mb-2 text-[#F5F7FA]">
              I want to work with you for…
            </h3>
            <div className="h-8 overflow-hidden flex items-center justify-center relative">
              <span className="slider__word flex items-center justify-center gap-2 text-[#B5DBDF] text-lg lg:text-xl font-extrabold">
                <HeartHandshakeIcon className="w-5 h-5" />
                Greater Peace in Your Heart
              </span>
              <span className="slider__word flex items-center justify-center gap-2 text-[#B5DBDF] text-base lg:text-xl font-extrabold">
                <CompassIcon className="w-5 h-5" />
                Greater Purpose in Your Life Direction
              </span>
              <span className="slider__word flex items-center justify-center gap-2 text-[#B5DBDF] text-lg lg:text-xl font-bold">
                <HeartIcon className="w-5 h-5" />
                Greater Love in Your Relationships
              </span>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex items-center mb-2 justify-self-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="gold"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star h-4 w-4"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <p className="ml-1 text-sm font-bold text-[#F5F7FA]">Top Rated</p>
          <span className="text-sm text-gray-300"></span>
          <span className="w-1 h-1 mx-1.5 bg-gray-300 rounded-full "></span>
          <a
            className="text-xs font-bold text-[#F5F7FA] underline hover:no-underline "
            href="#aboutUs"
          >
            40+ Years Experience
          </a>
          <span className="w-1 h-1 mx-1.5 bg-gray-300 rounded-full "></span>
          <a
            className="text-xs font-bold text-[#F5F7FA] underline hover:no-underline "
            href="#testimonials"
          >
            Testimonials
          </a>
          <span className="w-1 h-1 mx-1.5 bg-gray-300 rounded-full "></span>
          <a
            className="text-xs font-bold text-[#F5F7FA] underline hover:no-underline "
            href="#AsSeenOn"
          >
            Media Mentions
          </a>
        </div>
        <a target="__blank" className="mt-4 block w-fit mx-auto" href="/book">
          <button
            className="
  group relative inline-flex h-11 p-6 items-center justify-center 
  cursor-pointer rounded-xl border-0 font-medium text-lg text-blue-900 
  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
  disabled:pointer-events-none disabled:opacity-50 
  bg-[length:200%]
  bg-[linear-gradient(#fff,#fff),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,#FF4D4D,#D6FF4D,#4DA6FF,#4DFFE5,#BF4DFF)]
  [background-clip:padding-box,border-box,border-box] 
  [background-origin:border-box] 
  [border:calc(0.08*1rem)_solid_transparent]
  before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 
  before:h-1/5 before:w-3/5 before:-translate-x-1/2 
  before:animate-rainbow 
  before:bg-[linear-gradient(90deg,#FF4D4D,#D6FF4D,#4DA6FF,#4DFFE5,#BF4DFF)]
  before:bg-[length:200%]
  before:[filter:blur(calc(0.8*1rem))]
"
          >
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
              className="lucide lucide-sparkles text-blue-900 w-5 h-5 mr-2"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            Start Healing Today
          </button>
        </a>
      </div>
    </div>
  );
}
