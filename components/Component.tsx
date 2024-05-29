import React from "react";
import { useReplit } from "@replit/extensions-react";
export default function Component() {
    const { replit } = useReplit();
  
    return <div>Replit Extension</div>;
  }