"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import PetCard from '@/components/PetCard'

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="font-bold">Main Page</h1>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}
