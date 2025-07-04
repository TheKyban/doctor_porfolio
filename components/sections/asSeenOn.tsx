export function AsSeenOn() {
  return (
    <section
      id="AsSeenOn"
      className="pb-8 pt-0 lg:pb-12 bg- px-4 lg:px-[10%] bg-[#B5DBDF]"
    >
      <div className="mx-auto">
        <h2 className="lg:hidden text-3xl font-bold text-center text-[#1E4145] mb-8 lg:text-start ">
          Featured In
        </h2>
        <div className="flex gap-4 justify-center lg:flex-row lg:justify-center items-center flex-wrap lg:gap-8">
          <h2 className="hidden lg:flex text-3xl font-bold text-center text-[#1E4145] mb-8 lg:text-start ">
            Featured <br /> In
          </h2>
          <a
            target="_blank"
            rel="noopener noreferrer follow"
            className="max-w-[40%] flex flex-col items-center justify-center bg-transparent rounded-lg transition-transform hover:scale-105 lg:grayscale lg:hover:grayscale-0"
            href="https://www.psychologytoday.com/us/therapists/ellie-shumaker-richmond-va/112300"
          >
            <img
              alt="Psychology Today logo"
              loading="lazy"
              width="200"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-contain h-16 mb-4"
              src="/psycho.webp"
            />
            <span className="text-[#1E4145] font-medium sr-only">
              Psychology Today
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer follow"
            className="max-w-[40%] flex flex-col items-center justify-center bg-transparent rounded-lg transition-transform hover:scale-105 lg:grayscale lg:hover:grayscale-0"
            href="https://www.theravive.com/therapists/ellie-shumaker.aspx"
          >
            <img
              alt="Theravive logo"
              loading="lazy"
              width="200"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-contain h-16 mb-4"
              src="/thera.webp"
            />
            <span className="text-[#1E4145] font-medium sr-only">
              Theravive
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer follow"
            className="max-w-[40%] flex flex-col items-center justify-center bg-transparent rounded-lg transition-transform hover:scale-105 lg:grayscale lg:hover:grayscale-0"
            href="https://www.christiancounselordirectory.com/Therapist/Ellie-Shumaker-LCSW_46949"
          >
            <img
              alt="Christian Counselor Directory logo"
              loading="lazy"
              width="200"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-contain h-16 mb-4"
              src="/chris.webp"
            />
            <span className="text-[#1E4145] font-medium sr-only">
              Christian Counselor Directory
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer follow"
            className="max-w-[40%] flex flex-col items-center justify-center bg-transparent rounded-lg transition-transform hover:scale-105 lg:grayscale lg:hover:grayscale-0"
            href="https://therapist.com/clinician/eleanor-shumaker-26506/"
          >
            <img
              alt="Therapist.com logo"
              loading="lazy"
              width="200"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-contain h-16 mb-4"
              src="/therapist.svg"
            />
            <span className="text-[#1E4145] font-medium sr-only">
              Therapist.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
