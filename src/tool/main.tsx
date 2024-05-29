import * as React from "react";
import { createRoot } from "react-dom/client";
import { useReplit } from "@replit/extensions-react";

function Component() {
  const { replit } = useReplit();

  return <div>Replit Extension</div>;
}

createRoot(document.getElementById("root") as Element).render(
  <React.PureComponent>
    <Component/>
  </React.PureComponent>
)
