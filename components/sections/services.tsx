import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Christian Individual Counseling in Richmond, VA",
      description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.",
      image: "/service1.webp",
      alt: "Christian Individual Counseling in Richmond, VA",
      sr: "Learn more about Christian Individual Counseling in Richmond, VA",
    },
    {
      title: "Christian Couples Counseling in Richmond, VA",
      description:
        "Heal Your Relationship, Grow Closer to God Together in Richmond.",
      image: "/service2.webp",
      alt: "Christian Couples Counseling in Richmond, VA",
      sr: "Learn more about Christian Couples Counseling in Richmond, VA",
    },
  ];
  return (
    <div className="w-full relative p-4 py-12 md:py-16 lg:py-28 md:px-[10%] bg-cover bg-no-repeat bg-lightMain1 false">
      <Image
        alt=""
        loading="lazy"
        width="500"
        height="500"
        decoding="async"
        className="absolute bottom-0 right-0 scale-x-[-1] z-[1] hidden md:flex md:max-h-[150px] md:max-w-[100px] lg:max-h-[250px] lg:max-w-[150px] xl:max-w-[200px] xl:max-h-[300px] xl:right-[5%]"
        src="/plant.png"
        style={{ color: "transparent" }}
      ></Image>
      <h2 className="font-bold mb-2 text-4xl md:text-5xl xl:text-6xl text-[#1E4145] pb-4 gap-2 md:gap-4 text-center !block md:text-left md:mb-12">
        How I Help
      </h2>

      <div data-orientation="horizontal" className="w-full ">
        <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 duration-[0]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto min-w-full">
            {services.map((service) => (
              <div className="flex" key={service.title}>
                <Link
                  href={"#"}
                  className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 border justify-between flex flex-col space-y-4 bg-main1 border-[#1E4145] z-[2] lg:p-6 xl:p-8 bg-[#B5DBDF]"
                >
                  <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col justify-between">
                    <div className="h-[220px] relative">
                      <Image
                        alt={service.alt}
                        src={service.image}
                        className="rounded absolute h-full w-full inset-0 object-cover"
                        fill
                        sizes="100vw"
                      />
                    </div>
                    <h3 className="font-bold mb-2 mt-2 text-2xl flex justify-between items-center text-[#1E4145]">
                      {service.title}
                    </h3>
                    <p className="font-normal text-[#1E4145] !text-base">
                      {service.description}
                    </p>
                  </div>
                  <div className="w-full">
                    <span className="sr-only">{service.sr}</span>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 text-sm bg-transparent text-[#1E4145] border-[#1E4145] w-full hover:bg-white">
                      Learn More
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
