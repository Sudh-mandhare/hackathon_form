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

function MemberDetails(props: { data: any }) {
  const form = useForm();
  let i = props.data;
  return (
    <div>
      <Accordion type="single" collapsible className="bg-[#F7FCF9]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg p-4">Team Member {i}</AccordionTrigger>
          <AccordionContent className="sm:flex justify-around p-4 ">
            <div className="flex flex-col sm:gap-10 justify-center gap-4">
              <Form {...form}>
                <form className="space-y-8">
                  <FormField
                    control={form.control}
                    name="email1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                            required
                          />
                        </FormControl>
                        {/* <FormDescription>Enter your email</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <Button type='submit'>Submit</Button> */}
                </form>
              </Form>

              <Form {...form}>
                <form className="space-y-8">
                  <FormField
                    control={form.control}
                    name="mobile_1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Mobile Number"
                            {...field}
                            required
                          />
                        </FormControl>
                        {/* <FormDescription>
                          Enter your Mobile Number
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <Button type='submit'>Submit</Button> */}
                </form>
              </Form>

              <Form {...form}>
                <form className="space-y-8">
                  <FormField
                    control={form.control}
                    name="FirstName_1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            type="name"
                            placeholder="Enter First Name"
                            {...field}
                            required
                          />
                        </FormControl>
                        {/* <FormDescription>Enter your First Name</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <Button type='submit'>Submit</Button> */}
                </form>
              </Form>

              <Form {...form}>
                <form className="space-y-8">
                  <FormField
                    control={form.control}
                    name="LastName_1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Last Name" {...field} />
                        </FormControl>
                        {/* <FormDescription>Enter your Last Name</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <Button type='submit'>Submit</Button> */}
                </form>
              </Form>
            </div>
            <div className="flex flex-col sm:gap-10 justify-center gap-4 mt-4">
              <Form {...form}>
                <form className="w-3/4 space-y-8">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your Gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Femal">Female</SelectItem>
                            <SelectItem value="Transgender">
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

              <Proffesion />

              <Form {...form}>
                <form className="w-3/4 space-y-6">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Differently Abled</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select " />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
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
                <form className="space-y-8 w-[16.5rem]">
                  <FormField
                    control={form.control}
                    name="OrgName_1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Name of your Organization/institute"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>
                          Name of the Organization/institue you belong to
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <Button type='submit'>Submit</Button> */}
                </form>
              </Form>

              <Form {...form}>
                <form className=" space-y-8">
                  <FormField
                    control={form.control}
                    name="Country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country of Origin</FormLabel>
                        <FormControl>
                          <Input
                            type="name"
                            placeholder="Enter country name (birth)"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <Button type='submit'>Submit</Button> */}
                </form>
              </Form>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default MemberDetails;
