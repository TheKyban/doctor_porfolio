export default function About() {
  return (
    <section
      className="relative bg- p-4 py-12 md:py-16 lg:py-28 md:px-[10%] bg-[#B5DBDF]"
      id="aboutUs"
    >
      <div className="pb-0 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div
          className="relative !w-[70vw] !h-[400px] sm:!w-[70vw] sm:!h-[88] md:!h-[400px] md:!w-[300px] lg:!w-[400px] justify-self-center lg:!h-[600px]  flex-shrink-0 mt-4 border-[calc(8px+0.2vw)] border-transparent [background-origin:border-box] [background-clip:content-box,border-box] box-border rounded-[5%] !bg-cover bg-center !bg-no-repeat"
          style={{
            backgroundImage:
              'url("/ilah-3.jpeg"), linear-gradient(#DAF5F1, #DAF5F1)',
          }}
        >
          <div className="inline-flex items-center text-primary-foreground p-1 pr-4 shadow-md absolute bottom-0 bg-[#b5dbdfb3] rounded-none rounded-r-lg">
            <div className="ml-2 grid grid-cols-1 text-sm text-black">
              <span className="font-semibold">Ellie Shumaker</span>
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
                <a href="/#testimonials">Top Rated | 40+ Years Experience</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col md:mt-0 gap-2 lg:gap-4 flex-1">
          <h2 className="mx-auto md:mx-0 max-w-fit rounded-lg bg-amber-100 px-3 py-1 text-sm text-[#1E4145]">
            About Ellie Shumaker, LCSW - Experienced Christian Therapist in
            Richmond, VA
          </h2>
          <p className="text-4xl font-bold text-[#1E4145] lg:text-5xl">
            Hi I'm<span className=""> Ellie Shumaker</span>
          </p>{" "}
          <p className="mt-4 !leading-relaxed text-[#1E4145] text-lg md:text-xl lg:text-2xl font-medium font-para lg:line-clamp-6 xl:line-clamp-none">
            With over <strong>40 years of dedicated experience</strong> in
            individual and couples therapy, I truly enjoy working with a wide
            variety of people of different ages, capacities, backgrounds, and
            presenting problems. My goal is to help you build credibility in
            your own journey and educate you on pathways to healing.
          </p>{" "}
          <p className="mt-4 !leading-relaxed text-[#1E4145] text-lg md:text-xl lg:text-2xl font-medium font-para lg:line-clamp-6 xl:line-clamp-none">
            My therapeutic approach is rooted in{" "}
            <strong>Christian principles</strong>, aiming to foster{" "}
            <strong>spiritual growth</strong>, the{" "}
            <strong>deepening of relationships</strong>, and a greater sense of{" "}
            <strong>inner peace</strong>. I am passionate about helping clients
            grow in their capacity to love and in their trust for God's love for
            them.
          </p>{" "}
          <p className="mt-4 !leading-relaxed text-[#1E4145] text-lg md:text-xl lg:text-2xl font-medium font-para lg:line-clamp-6 xl:line-clamp-none">
            Whether you are seeking to heal from <strong>past wounds</strong>,
            discover your <strong>life's purpose</strong>, or prepare for
            Heaven, I offer a supportive space to explore these profound areas
            of life. Together, we can work towards achieving your goals for a
            more fulfilling and purposeful existence.
          </p>
        </div>
      </div>
    </section>
  );
}
