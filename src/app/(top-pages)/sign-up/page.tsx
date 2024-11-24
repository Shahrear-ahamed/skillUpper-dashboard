"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { ConfirmPasswordInput, PasswordInput } from "@/components/ui/password";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
  userName: z.string(),
  discord: z.string().optional(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  check: z.boolean().default(true),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>আপনার পুরো নাম</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Shahrear ahamed"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    সকল কমিউনিকেশনে এই নামটি ব্যবহৃত হবে। তাই সঠিক নাম প্রদান
                    করুন। কোন ছদ্মনাম ব্যবহার না করার অনুরোধ রইল।
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="discord"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ডিসকোর্ড ইউজারনেম</FormLabel>
                  <FormControl>
                    <Input placeholder="shahrear" type="text" {...field} />
                  </FormControl>
                  <FormDescription>
                    কোর্সের ডিসকোর্ড সাপোর্ট চ্যানেলে এই ইউজারনেমকে এক্সেস দেয়া
                    হবে। ডিসকোর্ড ইউজারনেম খুঁজে না পেলে এখান থেকে গাইড দেখে নিন
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>আপনার ইমেইল এড্রেস দিন</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shahrear@gmail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    সব কমিউনিকেশন এই ইমেইল এড্রেসে করা হবে & এটি আপনার লগইন
                    ইউজারনেম হবে।
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>আপনার মোবাইল নাম্বার</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Placeholder"
                      {...field}
                      verifyBTN={true}
                      defaultCountry="BD"
                    />
                  </FormControl>
                  <FormDescription>
                    OTP পাঠিয়ে ভেরিফাই করা হবে। OTP পেতে ভেরিফাই করুন বাটনে
                    ক্লিক করুন।
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>পাসওয়ার্ড দিন</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Password@2024" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>পুনরায় একই পাসওয়ার্ড দিন</FormLabel>
                  <FormControl>
                    <ConfirmPasswordInput
                      placeholder="Password@2024"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    এই পাসওয়ার্ডটি অবশ্যই উপরের পাসওয়ার্ড এর সাথে মিলতে হবে
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="check"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  আমি <span className="font-semibold">স্কিল্ড</span> প্লাটফর্মের
                  সকল{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:text-primary/80">
                    টার্মস এন্ড কন্ডিশন
                  </Link>
                  ,{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:text-primary/80">
                    প্রাইভেসি পলিসি
                  </Link>{" "}
                  এবং{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:text-primary/80">
                    রিফান্ড পলিসি
                  </Link>{" "}
                  মেনে নিচ্ছি।
                </FormLabel>

                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">সাইন আপ করুন</Button>
        <FormDescription className="!mt-2">
          ** মোবাইল নাম্বার ভেরিফাই না করা পর্যন্ত আপনি তথ্য জমা দিতে পারবেন না।
        </FormDescription>
      </form>
    </Form>
  );
}
