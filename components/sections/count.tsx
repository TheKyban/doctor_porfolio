import Counter from "./counter";

export function Count() {
  return (
    <section className="p-8 min-h-fit md:px-[10%] md:py-16 xl:py-20 grid gap-12 md:grid-cols-2 md:gap-16 relative bg-[#345457] text-center md:text-left">
      <article>
        <div>
          <Counter target={8} duration={1500} />
          <span className="inline-flex font-semibold  xl:text-xl text-[#F5F7FA] mb-2 font-para">
            Years Experience
          </span>
        </div>
        <p className="text-sm text-[#F5F7FA]/80 font-para h">
          Providing compassionate and effective Individual and Couples Therapy{" "}
        </p>
      </article>
      <article>
        <div>
          <Counter target={500} duration={1500} />
          <span className="inline-flex font-semibold  xl:text-xl text-[#F5F7FA] mb-2 font-para">
            Individual Client Sessions
          </span>
        </div>
        <p className="text-sm text-[#F5F7FA]/80 font-para h">
          Helping individuals and couples heal, grow, and find purpose{" "}
        </p>
      </article>
    </section>
  );
}
