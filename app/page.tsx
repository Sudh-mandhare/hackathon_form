"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
<Button variant="outline">Button</Button>

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
import { useForm } from "react-hook-form";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MemberDetails from "@/components/ui/MemberDetails";

export default function Home() {
  const form = useForm();
  const data = ["1 (Team Leader)", "2", "3"];
  return (
    <>
    <div className="flex items-center min-w-screen min-h-screen bg-[#1D125B]">
      <main className="flex w-full lg:w-3/5 flex-col justify-center p-10 ">
        <div className="Team Name bg-[#F7FCF9] p-4">
          <Form {...form}>
            <form className="space-y-8 mb-3">
              <FormField
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-2xl">Team Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter team name" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      Enter the name of your Team
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type='submit'>Submit</Button> */}
            </form>
          </Form>
        </div>
        <div>
          <MemberDetails data={data[0]} />
          <MemberDetails data={data[1]} />
          <MemberDetails data={data[2]} />
        </div>
        <div className="flex justify-center mt-4 ">
        <Button className="bg-white text-[#FE9032] hover:scale-[1.01] hover:bg-yellow-200 transition-all">Submit</Button>
        </div>
      </main>
      <div className="hidden lg:flex h-full w-1/2  justify-center items-center mr-4">
        <img src="https://steptodown.com/istock-downloader/images/steptodown.com171984.jpg" alt="" className="h-[600px] w-[600px]"/>
      </div>
    </div>
    </>
  );
}
