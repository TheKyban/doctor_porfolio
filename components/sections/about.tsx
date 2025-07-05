import Link from "next/link";

export default function About() {
  return (
    <section
      className="relative bg- p-4 py-12 md:py-16 lg:py-28 md:px-[10%] bg-[#B5DBDF]"
      id="aboutUs"
    >
      <div className="pb-0 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div
          className="relative !w-[70vw] !min-h-[400px] sm:!w-[70vw] sm:!h-[88] md:!h-[400px] md:!w-[300px] lg:!w-[400px] justify-self-center lg:!h-[600px]  flex-shrink-0 mt-4 border-[calc(8px+0.2vw)] border-transparent [background-origin:border-box] [background-clip:content-box,border-box] box-border rounded-[5%] !bg-cover bg-center !bg-no-repeat"
          style={{
            backgroundImage:
              'url("/doctor.png"), linear-gradient(#DAF5F1, #DAF5F1)',
          }}
        >
          <div className="inline-flex items-center text-primary-foreground p-1 pr-4 shadow-md absolute bottom-0 bg-[#b5dbdfb3] rounded-none rounded-r-lg">
            <div className="ml-2 grid grid-cols-1 text-sm text-black">
              <span className="font-semibold">Dr. Serena Blake</span>
              <span className="text-xs">LCSW</span>
              <div className="font-semibold flex items-center">
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
                  className="lucide lucide-star h-3 w-3 mr-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <Link href="#testimonials">
                  Top Rated | 8+ Years Experience
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col md:mt-0 gap-2 lg:gap-4 flex-1">
          <h2 className="mx-auto md:mx-0 max-w-fit rounded-lg bg-amber-100 px-3 py-1 text-sm text-[#1E4145]">
            About Dr. Serena Blake - Experienced PsyD (Clinical Psychologist) in
            CA 90026
          </h2>
          <p className="text-4xl font-bold text-[#1E4145] lg:text-5xl">
            Hi I&apos;m<span className=""> Dr. Serena Blake</span>
          </p>
          <p className="mt-4 !leading-relaxed text-[#1E4145] text-lg md:text-xl lg:text-2xl font-medium font-para lg:line-clamp-6 xl:line-clamp-none">
            I&apos;m a licensed clinical psychologist based in Los Angeles, CA
            with over <strong>8 years of experience</strong> and more than{" "}
            <strong>500 client sessions</strong> completed. My practice is
            grounded in evidence-based methods such as{" "}
            <strong>cognitive-behavioral therapy</strong> and{" "}
            <strong>mindfulness</strong>, tailored with deep empathy and
            personalized care for each individual.
          </p>
          <p className="mt-4 !leading-relaxed text-[#1E4145] text-lg md:text-xl lg:text-2xl font-medium font-para lg:line-clamp-6 xl:line-clamp-none">
            I specialize in helping people manage <strong>anxiety</strong>,
            strengthen <strong>relationships</strong>, and heal from{" "}
            <strong>emotional trauma</strong>. My mission is to offer a
            supportive environment—whether that&apos;s in-person at my Maplewood
            Drive office or virtually via Zoom—where clients can feel safe,
            heard, and empowered to grow.
          </p>
          <p className="mt-4 !leading-relaxed text-[#1E4145] text-lg md:text-xl lg:text-2xl font-medium font-para lg:line-clamp-6 xl:line-clamp-none">
            If you&apos;re ready to take the next step toward healing and
            personal transformation, I&apos;m here to walk with you. Together,
            we can work toward a more grounded, peaceful, and fulfilled version
            of yourself.
          </p>
        </div>
      </div>
    </section>
  );
}
