"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  Name: z
    .string()
    .min(2, "First name must contain at least 2 characters")
    .max(50, "First name can contain up to 50 characters"),
  PhoneNumber: z
    .string()
    .min(2, "Last name must contain at least 2 characters")
    .max(50, "Last name can contain up to 50 characters"),
  email: z.string().email("Invalid email"),
  details: z.string(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      PhoneNumber: "",
      email: "",
      details: "",
    },
  });

  return (
    <div className="mt-6">
      <Typography variant="h4" className="text-foreground font-bold">
        Send me a message
      </Typography>

      <Form {...form}>
        <form className="flex flex-col  mt-4 max-w-[500px]">
          <div className="flex flex-col gap-8 ">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="px-2.5 bg-white border-[1px] border-primary bg-opacity-25 text-foreground placeholder:text-[#656565] font-medium placeholder:font-light"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="PhoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your Phone Number"
                      className="px-2.5 bg-white border-[1px] border-primary bg-opacity-25 text-foreground placeholder:text-[#656565] font-medium placeholder:font-light"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        type="email"
                        className="px-2.5 bg-white border-[1px] border-primary bg-opacity-25 text-foreground placeholder:text-[#656565] font-medium placeholder:font-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="col-span-2 mt-4">
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="What would you like me to do for you?"
                      className="px-2.5 bg-white border-[1px] border-primary bg-opacity-25 text-foreground placeholder:text-[#656565] font-medium placeholder:font-light"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <Button className="h-12 w-[120px] mt-4" type="submit">
              Send message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
