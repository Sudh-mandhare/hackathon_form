"use client";
import Image from "next/image";
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
  const data =["1 (Team Leader)","2","3"];
  return (
    <div className="flex items-center min-w-screen min-h-screen">
      <main className='flex w-full flex-col justify-center p-12'>
        <div className='Team Name'>
          <Form {...form}>
            <form className='space-y-8'>
              <FormField
                control={form.control}
                name='teamName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Name</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the name of your Team
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type='submit'>Submit</Button> */}
            </form>
          </Form>
        </div>
        <div>
          <MemberDetails data = {data[0]}/>
          <MemberDetails data = {data[1]}/>
          <MemberDetails data = {data[2]}/>
        </div>
      </main>
    </div>
  );
}
