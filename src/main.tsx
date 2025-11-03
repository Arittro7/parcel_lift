import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { Router } from "lucide-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  
      
        <RouterProvider router={Router} />
        <Toaster richColors />
     
    
  </React.StrictMode>
);