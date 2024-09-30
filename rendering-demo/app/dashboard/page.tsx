"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
  console.log("Hii this is a client component");
  return (
    <div>
      <h1>Dashboard page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}