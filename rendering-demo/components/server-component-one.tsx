import fs from "fs";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8"); // server onle operation
  return <h1>ServerComponentOne</h1>;
};