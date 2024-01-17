import React from "react";
import Proffesion from "@/components/ui/Proffesion";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MemberDetails = () => {
  const form = useForm();

  return (
    <div>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Team Member 1 (Team Leader)</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-12 justify-center'>
            <Form {...form}>
              <form className='space-y-8'>
                <FormField
                  control={form.control}
                  name='email1'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder='shadcn' {...field} required />
                      </FormControl>
                      <FormDescription>Enter your email</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type='submit'>Submit</Button> */}
              </form>
            </Form>

            <Form {...form}>
              <form className='space-y-8'>
                <FormField
                  control={form.control}
                  name='mobile_1'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile</FormLabel>
                      <FormControl>
                        <Input
                          type='tel'
                          placeholder='Mobile Number'
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormDescription>
                        Enter your Mobile Number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type='submit'>Submit</Button> */}
              </form>
            </Form>

            <Form {...form}>
              <form className='space-y-8'>
                <FormField
                  control={form.control}
                  name='FirstName_1'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First</FormLabel>
                      <FormControl>
                        <Input
                          type='name'
                          placeholder='shadcn'
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormDescription>Enter your First Name</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type='submit'>Submit</Button> */}
              </form>
            </Form>

            <Form {...form}>
              <form className='space-y-8'>
                <FormField
                  control={form.control}
                  name='LastName_1'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LastName (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder='shadcn' {...field} />
                      </FormControl>
                      <FormDescription>Enter your Last Name</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type='submit'>Submit</Button> */}
              </form>
            </Form>

            <Form {...form}>
              <form className='w-2/3 space-y-6'>
                <FormField
                  control={form.control}
                  name='gender'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select your Gender' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='Male'>Male</SelectItem>
                          <SelectItem value='Femal'>Female</SelectItem>
                          <SelectItem value='Transgender'>
                            Transgender
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type="submit">Submit</Button> */}
              </form>
            </Form>

            <Form {...form}>
              <form className='space-y-8'>
                <FormField
                  control={form.control}
                  name='OrgName_1'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Name</FormLabel>
                      <FormControl>
                        <Input placeholder='shadcn' {...field} />
                      </FormControl>
                      <FormDescription>
                        Name of the Organization/institue you belong to
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type='submit'>Submit</Button> */}
              </form>
            </Form>

            <Proffesion />

            <Form {...form}>
              <form className='w-2/3 space-y-6'>
                <FormField
                  control={form.control}
                  name='gender'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Differently Abled</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select ' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='yes'>Yes</SelectItem>
                          <SelectItem value='no'>No</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type="submit">Submit</Button> */}
              </form>
            </Form>

            <Form {...form}>
              <form className='space-y-8'>
                <FormField
                  control={form.control}
                  name='Country'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country of Origin</FormLabel>
                      <FormControl>
                        <Input
                          type='name'
                          placeholder='Country'
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormDescription>Enter the country where you were born</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type='submit'>Submit</Button> */}
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MemberDetails;
