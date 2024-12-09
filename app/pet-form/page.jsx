"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Enter the official name of your pet here.",
  }),
  age: z
  .number()
  .int({ message: "Age must be an integer." })
  .positive({ message: "Age must be a positive number." }),
  role: z.string().nonempty({
    message: "Please select a sex.",
  }),
  picture: z.any(),
  kids: z.string().nonempty({
    message: "Please select an option.",
  }),
})

export default function ProfileForm() {
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          age: "",
          role: "",
          picture: null,
          kids: "",
        },
      })
    
      // 2. Define a submit handler.
      function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                    <Input placeholder="5" {...field} />
                </FormControl>
                <FormDescription>
                    Insert the age of your pet in years.
                </FormDescription>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Sex</FormLabel>
                <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}  
                >
                    <SelectTrigger>
                    <SelectValue placeholder="Select the sex of your pet" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="picture"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Upload Picture</FormLabel>
                <FormControl>
                    <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files[0])} // Update form state with selected file
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </FormControl>
                <FormDescription>
                    Upload the best picure of your pet. Only image files are allowed.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="kids"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Is your pet kid friendly?</FormLabel>
                <FormControl>
                    <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value="yes"
                        checked={field.value === "yes"}
                        onChange={() => field.onChange("yes")}
                        className="radio-input"
                        />
                        <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value="no"
                        checked={field.value === "no"}
                        onChange={() => field.onChange("no")}
                        className="radio-input"
                        />
                        <span>No</span>
                    </label>
                    </div>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />


        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
