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

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(5).max(50),
  phone: z.string().min(10).max(15).regex(/^\d+$/),
  message: z.string().min(5).max(500),
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
    },
  });

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                      Message
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
        <p className="text-xl text-[#1E4145] font-para">4913 Fitzhugh Avenue</p>
        <p className="text-xl text-[#1E4145] font-para"> Suite 102</p>
        <p className="text-xl text-[#1E4145] font-para"> Richmond</p>
        <p className="text-xl text-[#1E4145] font-para"> VA 23230</p>
        <p className="text-xl text-[#1E4145] font-para mb-2">Richmond, VA</p>
        <a
          className="font-para p-2 bg-[#1E4145] text-[#B5DBDF] rounded"
          href="/google-maps"
        >
          Google Maps
        </a>
      </div>
      <div className="">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#1E4145] mb-2">
          Hours
        </h3>
        <p className="text-xl text-[#1E4145] font-para">
          Monday: 12:00 PM - 8:00 PM
        </p>
        <p className="text-xl text-[#1E4145] font-para">
          Tuesday: 12:00 PM - 8:00 PM
        </p>
        <p className="text-xl text-[#1E4145] font-para">
          Wednesday: 9:00 AM - 6:00 PM
        </p>
      </div>
      <div className="">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#1E4145] mb-2">
          Contact
        </h3>
        <a
          className="text-blue-500 text-xl hover:text-blue-600 inline-block font-para"
          href="tel:(757) 474-5262"
        >
          <p className=" text-[#1E4145] hover:text-neutral-900  flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone-call"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
              <path d="M14.05 6A5 5 0 0 1 18 10"></path>
            </svg>
            (757) 474-5262
          </p>
        </a>
      </div>
    </div>
  );
}
