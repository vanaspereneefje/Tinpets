'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async (data) => { 
    const { username, password } = data;

    try {
      const response = await fetch('http://localhost:3001/api/v1/login', {
        method: 'POST',
        "Access-Control-Allow-Origin": 'http://localhost:3001',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message || "You logged in!");
        setTimeout(() => router.push('/'), 1000);
        
        setErrorMessage(null)
      } else {
        setErrorMessage(result.message || "Something went wrong when trying to log in.");
      }
    } catch (err) {
      setErrorMessage("An error occurred while trying to log in.");
      console.log(err.message);
    }
  };


    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-customBrown font-lilita">Welcome back</h2>

      {successMessage && (
        <div className="p-4 mb-4 bg-green-100 text-green-800 rounded">{successMessage}</div>
        )}
      {errorMessage && (
        <div className="p-4 mb-4 bg-red-100 text-red-800 rounded">{errorMessage}</div>
        )}

      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData.entries());
        onSubmit(formObj);
      }}>

        <div className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="text-center bg-customBrown hover:bg-customDarkBrown">
          Login
        </Button>
        <p className="text-xs text-center">Do not have an acount? Sign up <Link href="/register" className="font-semibold underline text-blue-500">here</Link></p>
      </form>
    </div>
    )
}

export default LoginPage;