import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router";

export default function Unauthorized() {
  useEffect(() => {
    document.title = "Dashboard | Parcel Lift ";
  }, []);
  return (
    <div>
      <h1>You are not authorized....</h1>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
