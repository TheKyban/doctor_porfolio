import {
  CompassIcon,
  HeartHandshakeIcon,
  HeartIcon,
  Sparkles,
  Star,
} from "lucide-react";

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
          Faith-Based Therapy in Los Angeles, CA
        </h1>
        <span className="font-para font-extrabold text-3xl md:text-4xl text-[#F5F7FA] py-2 pb-1 md:py-4 md:gap-4 text-center">
          Professional Support for Emotional Healing and Personal Growth
        </span>
        <div className="text-[#F5F7FA] sm:max-w-sm lg:max-w-[700px] text-center mx-auto font-medium text-base my-4 md:text-2xl">
          <p className="">
            Begin your journey today toward greater clarity, stronger
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
          <Star className="w-4 h-4 fill-yellow-400" />
          <p className="ml-1 text-sm font-bold text-[#F5F7FA]">Top Rated</p>
          <span className="text-sm text-gray-300"></span>
          <span className="w-1 h-1 mx-1.5 bg-gray-300 rounded-full "></span>
          <a
            className="text-xs font-bold text-[#F5F7FA] underline hover:no-underline "
            href="#aboutUs"
          >
            8+ Years Experience
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
        <a className="mt-4 block w-fit mx-auto" href="#contact">
          <button
            className="group relative inline-flex h-11 p-6 items-center justify-center cursor-pointer rounded-xl border-0 font-medium text-lg ext-blue-900 
  outline-0 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
  disabled:pointer-events-none disabled:opacity-50 
  bg-[length:200%]
  bg-[linear-gradient(#fff,#fff),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,#FF4D4D,#D6FF4D,#4DA6FF,#4DFFE5,#BF4DFF)]
  [border:calc(0.08*1rem)_solid_transparent]
  before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 
  before:h-1/5 before:w-3/5 before:-translate-x-1/2 
  before:animate-rainbow 
  before:bg-[linear-gradient(90deg,#FF4D4D,#D6FF4D,#4DA6FF,#4DFFE5,#BF4DFF)]
  before:bg-[length:200%]
  before:[filter:blur(calc(0.8*1rem))]
  text-blue-900
"
          >
            <Sparkles className="w-5 h-5 text-blue-900 mr-2" />
            Start Healing Today
          </button>
        </a>
      </div>
    </div>
  );
}
