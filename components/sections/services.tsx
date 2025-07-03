import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Services() {
  return (
    <div>
      <h2 className="font-bold mb-2 text-4xl md:text-5xl xl:text-6xl text-darkMain1  pb-4  flex gap-2 md:gap-4 text-center md:text-left md:mb-12">
        How I Help
      </h2>

      <div className="box-border grid min-w-full max-w-screen-xl grid-cols-[repeat(3,_minmax(0,_1fr))] gap-[24px] bg-[#f5f7fa] text-black text-[16px] m-0 leading-[24px] font-normal">
        <div className="box-border flex">
          <Link
            href="#"
            className="box-border row-span-1 flex flex-col justify-between rounded-[12px] border border-transparent bg-[#b5dbdf] p-[32px] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter] ease-in-out duration-200"
          >
            <div className="box-border flex flex-col justify-between transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter] ease-in-out duration-200">
              <div className="box-border relative h-[220px]">
                <Image
                  alt="Christian Individual Counseling in Richmond, VA"
                  loading="lazy"
                  decoding="async"
                  src={"/service1.webp"}
                  fill={true}
                  className="box-border block align-middle max-w-full rounded-[4px] absolute inset-0 h-full w-full object-cover text-transparent"
                />
              </div>
              <h3 className="box-border m-0 mb-[8px] mt-[8px] flex items-center justify-between text-[24px] leading-[32px] font-bold text-[rgb(30,_65,_69)]">
                Christian Individual Counseling in Richmond, VA
              </h3>
              <p className="box-border m-0 !text-[1rem] !leading-6 font-normal text-[rgb(30,_65,_69)]">
                Discover Peace, Purpose, and God's Truth in Richmond, VA.
              </p>

              <span className="box-border whitespace-nowrap border-0 absolute w-px h-px -m-[1px] p-0 overflow-hidden [clip:rect(0px,_0px,_0px,_0px)]">
                Learn more about Christian Individual Counseling in Richmond, VA
              </span>

              <Button
                variant={"ghost"}
                className="w-full px-4 py-2 border border-black font-medium"
              >
                Learn More
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
