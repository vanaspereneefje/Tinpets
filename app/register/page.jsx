'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();


  const onSubmit = async (data) => {
    const { name, username, email, password } = data;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    //TODO: check if works properly
    try {
      const response = await fetch('http://localhost:3001/api/v1/register', {
        method: 'POST',
        "Access-Control-Allow-Origin": 'http://localhost:3001',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, email, password }),
        credentials: 'include', //allow cookies from BE
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message || "Registration successful!");
      } else {
        setErrorMessage(result.message || "Registration failed.");
      }
    } catch (err) {
      setErrorMessage("An error occurred while trying to register.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

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
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

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
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
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

        <div className="mb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
