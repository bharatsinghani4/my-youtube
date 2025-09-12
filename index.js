import { createRoot } from "react-dom/client";
import App from "./src/App";
import "dotenv/config";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
