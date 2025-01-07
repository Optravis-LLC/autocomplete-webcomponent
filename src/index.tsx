import { createRoot } from "react-dom/client";
import { WebcomponentWrapper } from "./wrapper/wrapper";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<WebcomponentWrapper />);
