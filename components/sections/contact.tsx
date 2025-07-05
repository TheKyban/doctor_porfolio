"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(5).max(50),
  phone: z.string().min(10).max(15).regex(/^\d+$/),
  message: z.string().min(5).max(500),
  preferredTime: z.string().min(2).max(100),
  agreeToContact: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted.",
  }),
  captchaToken: z.string().min(1, { message: "Captcha is required" }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      preferredTime: "",
      agreeToContact: false,
    },
  });

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast("Thank You For Contact 🙏");
    form.reset();
  }

  return (
    <div
      id="locate"
      className="relative w-full h-auto flex flex-wrap flex-col-reverse md:flex-row bg-[#B5DBDF] p-4 md:px-[10%]"
    >
      <Location />
      <div
        id="contact"
        className="flex-1 relative !min-h-96 font-para mt-6 lg:m-auto"
      >
        <div
          id="contact"
          className="max-w-md mx-auto p-6 rounded-lg shadow-lg border border-[#1E4145] bg-[#F5F7FA] relative z-[2]"
        >
          <h2 className="font-heading text-2xl font-bold mb-2 text-center text-[#144133]">
            Get In Touch
          </h2>
          <p className="text-sm text-center mb-6 text-[#144133]">
            Simply fill out the brief fields below and Ellie will be in touch
            with you soon, usually within one business day. This form is safe,
            private, and completely free.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#144133]">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#144133]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#144133]">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#144133]">
                      What brings you here?
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#144133]">
                      Preferred time to reach you
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Weekdays after 3 PM"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreeToContact"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="w-4 h-4 border-gray-300 text-[#1E4145] focus:ring-[#1E4145]"
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-medium text-[#144133] m-0">
                      I agree to be contacted
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="captchaToken"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#144133]">
                      CAPTCHA
                    </FormLabel>
                    <FormControl>
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LfO5ncrAAAAALoOHOpdgN2Sgv9UTQQMDCdEGCxy"
                        onChange={(token) => field.onChange(token)}
                        onExpired={() => field.onChange("")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full  bg-[#1E4145] text-[#B5DBDF] ease-in-out hover:outline hover:outline-[#1E4145] hover:bg-[#F5F7FA] hover:text-[#1E4145] border border-[#1E4145]"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="py-12 md:py-16 lg:py-28 flex-1 flex flex-col text-center md:text-left justify-between  gap-12 pb-8 lg:p-0 max-w-full">
      <div className="">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#1E4145] mb-2">
          Our Office
        </h3>
        <p className="text-xl text-[#1E4145]">1287 Maplewood Drive</p>
        <p className="text-xl text-[#1E4145]"> Los Angeles</p>
        <p className="text-xl text-[#1E4145] mb-2"> CA 90026</p>
        <Link
          className="font-para p-2 bg-[#1E4145] text-[#B5DBDF] rounded"
          href="/google-maps"
        >
          Google Maps
        </Link>
      </div>
      <div className="">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#1E4145] mb-2">
          Hours
        </h3>
        <p className="text-xl text-[#1E4145] font-para">
          In-person: Tue & Thu, 10 AM–6 PM
        </p>
        <p className="text-xl text-[#1E4145] font-para">
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#1E4145] mb-2">
          Contact
        </h3>
        <Link
          className="text-blue-500 text-xl hover:text-blue-600 inline-block font-para"
          href="tel:(323) 555-0192"
        >
          <p className=" text-[#1E4145] hover:text-neutral-900  flex gap-2 items-center">
            <Phone className="w-4 h-4" />
            (323) 555-0192
          </p>
        </Link>
        <Link
          className="text-blue-500 text-xl hover:text-blue-600 inline-block font-para"
          href="mail:serena@blakepsychology.com"
        >
          <p className=" text-[#1E4145] hover:text-neutral-900  flex gap-2 items-center">
            <Mail className="w-4 h-4" />
            serena@blakepsychology.com
          </p>
        </Link>
      </div>
    </div>
  );
}
