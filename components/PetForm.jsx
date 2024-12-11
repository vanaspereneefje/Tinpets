import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { v4 as uuidv4 } from 'uuid';

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
  age: z.coerce
    .number()
    .int({ message: "Age must be an integer." })
    .positive({ message: "Age must be a positive number." }),
  sex: z.string().min(1, {
    message: "Please select a sex.",
  }),
  species: z.string().min(1, {
    message: "Please select an option.",
  }),
  breed: z.string().min(2, {
    message: "Enter the breed of your pet here.",
  }),
  neutered: z.boolean({
    message: "Please select an option.",
  }),
  picture: z.any(),
  kids: z.boolean({
    message: "Please select an option.",
  }),
  pets: z.boolean({
    message: "Please select an option.",
  }),
  space: z.string().min(1, {
    message: "Please select an option.",
  }),
  training: z.string().min(1,{
    message: "Please select an option.",
  }),
  garden: z.string().min(1, {
    message: "Please select an option.",
  }),
  environment: z.string().min(1, {
    message: "Please select an option.",
  }),
})

export default function PetForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            age: "",
            species: "",
            breed: "",
            sex: "",
            neutered: "",
            picture: "",
            kids: "",
            pets: "",
            space: "",
            training: "",
            garden: "",
            environment: "",
        },
      })
    
      async function onSubmit(values) {
            const petData = {
                id: uuidv4(),
                name: values.name,
                age: values.age,
                gender: values.sex,
                neutered: values.neutered,
                species: values.species,
                breed: values.breed,
                stats: {
                    house: values.space,
                    children: values.kids,
                    trained: values.training,
                },
                // picture: "/public/" + values.picture.name,
                description: values.description
            }
            // logic to add the image to /public
        try {
            const response = await fetch('http://localhost:3001/api/v1/pets/add', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({entry: petData}),
            });
        } catch (e) {
            console.error(e);
        }
        console.log(petData);
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
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
                    <SelectItem value="Dog">Dog</SelectItem>
                    <SelectItem value="Cat">Cat</SelectItem>
                    <SelectItem value="Bird">Bird</SelectItem>
                    <SelectItem value="Fish">Fish</SelectItem>
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
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Male">Male</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="neutered"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Has your pet been neutered?</FormLabel>
                <FormControl>
                    <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value={true}
                        checked={field.value === true}
                        onChange={() => field.onChange(true)}
                        className="radio-input"
                        />
                        <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value={false}
                        checked={field.value === false}
                        onChange={() => field.onChange(false)}
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
                        value={true}
                        checked={field.value === true}
                        onChange={() => field.onChange(true)}
                        className="radio-input"
                        />
                        <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value={false}
                        checked={field.value === false}
                        onChange={() => field.onChange(false)}
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
                        value={true}
                        checked={field.value === true}
                        onChange={() => field.onChange(true)}
                        className="radio-input"
                        />
                        <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value={false}
                        checked={field.value === false}
                        onChange={() => field.onChange(false)}
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
                        value="Apartment"
                        checked={field.value === "Apartment"}
                        onChange={() => field.onChange("Apartment")}
                        className="radio-input"
                        />
                        <span>Apartment</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value="Small"
                        checked={field.value === "Small"}
                        onChange={() => field.onChange("Small")}
                        className="radio-input"
                        />
                        <span>Small</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value="Medium"
                        checked={field.value === "Medium"}
                        onChange={() => field.onChange("Medium")}
                        className="radio-input"
                        />
                        <span>Medium</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                        type="radio"
                        value="Large"
                        checked={field.value === "Large"}
                        onChange={() => field.onChange("Large")}
                        className="radio-input"
                        />
                        <span>Large</span>
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

        <button type="submit">Submit</button>
      </form>
    </Form>
  )
}