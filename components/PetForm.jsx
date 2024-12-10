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
  sex: z.string().nonempty({
    message: "Please select a sex.",
  }),
  species: z.string().nonempty({
    message: "Please select an option.",
  }),
  breed: z.string().min(2, {
    message: "Enter the breed of your pet here.",
  }),
  picture: z.any(),
  kids: z.string().nonempty({
    message: "Please select an option.",
  }),
  pets: z.string().nonempty({
    message: "Please select an option.",
  }),
  space: z.string().nonempty({
    message: "Please select an option.",
  }),
  training: z.string().nonempty({
    message: "Please select an option.",
  }),
  garden: z.string().nonempty({
    message: "Please select an option.",
  }),
  environment: z.string().nonempty({
    message: "Please select an option.",
  }),
})

export default function PetForm() {
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          age: "",
          species: "",
          breed: "",
          sex: "",
          picture: null,
          kids: "",
          pets: "",
          space: "",
          training: "",
          garden: "",
          environment: "",
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
              <FormLabel>Name</FormLabel>
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
            name="species"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Species</FormLabel>
                <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}  
                >
                    <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="bird">Bird</SelectItem>
                    <SelectItem value="fish">Fish</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="breed"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Breed</FormLabel>
                <FormControl>
                    <Input placeholder="Labrador" {...field} />
                </FormControl>
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
                    <SelectValue placeholder="Select an option" />
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
        <FormField
            control={form.control}
            name="pets"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Is your pet friendly towards other pets?</FormLabel>
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
        <FormField
            control={form.control}
            name="space"
            render={({ field }) => (
                <FormItem>
                <FormLabel>How much space does your pet need?</FormLabel>
                <FormControl>
                    <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value="no"
                        checked={field.value === "no"}
                        onChange={() => field.onChange("no")}
                        className="radio-input"
                        />
                        <span>Not much</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value="bit"
                        checked={field.value === "bit"}
                        onChange={() => field.onChange("bit")}
                        className="radio-input"
                        />
                        <span>A bit</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value="lot"
                        checked={field.value === "lot"}
                        onChange={() => field.onChange("lot")}
                        className="radio-input"
                        />
                        <span>A lot</span>
                    </label>
                    </div>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="training"
            render={({ field }) => (
                <FormItem>
                <FormLabel>How much training did your pet get?</FormLabel>
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
                        <span>Not much</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value="no"
                        checked={field.value === "no"}
                        onChange={() => field.onChange("no")}
                        className="radio-input"
                        />
                        <span>A lot</span>
                    </label>
                    </div>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="garden"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Does your pet need a garden?</FormLabel>
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
                <FormField
            control={form.control}
            name="environment"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Is your pet used to or fond of a lively environment?</FormLabel>
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