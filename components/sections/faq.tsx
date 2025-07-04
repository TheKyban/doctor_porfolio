import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    q: "What are your fees?",
    a: "My fees are <strong>$60 for individual, $90 for couple</strong>",
  },
  {
    q: "Do you take insurance?",
    a: "No, I do not take insurance directly. However, I can provide you with a  <strong>billing sheet</strong> with the necessary facts and codes so you can file for <strong>out-of-network benefits</strong> with your     insurance company.",
  },
  {
    q: "Do you provide online counseling?",
    a: "No, I do not provide online counseling.",
  },
  {
    q: "What are your office hours?",
    a: "My office hours are <strong>Monday through Thursday, 11:00 AM to 6:30 PM</strong>.",
  },
];

export default function FAQ() {
  return (
    <div
      className="p-4 flex flex-col gap-[1rem] md:gap-[2rem] md:px-[10%] relative bg-cover bg-no-repeat bg-[#B5DBDF] py-12 md:py-16 lg:py-28"
      id="faq"
    >
      <p className="font-bold text-4xl block text-left md:text-6xl text-[#1E4145] pb-2 md:pb-4 md:flex gap-2 md:gap-4 relative text">
        Frequently Asked Questions
      </p>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border-[#1E4145] border-t border-b-0 last:border-b py-4"
          >
            <AccordionTrigger className="text-[#1E4145] transition-all p-4 text-2xl md:text-3xl rounded-t-lg font-bold hover:no-underline hover:opacity-70 pl-0">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent suppressHydrationWarning>
              <div
                className="pb-4 pt-0 text-xl text-[#1E4145]"
                dangerouslySetInnerHTML={{ __html: faq.a }}
              ></div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
