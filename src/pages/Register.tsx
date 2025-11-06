import DeliveryRegister from "@/assets/images/delivery-register.jpg";
import { Link } from "react-router";
import Logo from "@/assets/icon/Logo.png";
import { RegisterForm } from "@/components/modules/authentication/RegisterForm";
import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    document.title = "Register | Parcel Lift ";
  }, []);
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Side - Delivery Illustration */}
      <div className="relative hidden bg-muted lg:block">
        <img
          src={DeliveryRegister}
          alt="Parcel Lift Illustration"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        <div className="absolute bottom-10 left-10 text-white space-y-2">
          <h2 className="text-3xl font-bold">Fast • Secure • Reliable</h2>
          <p className="max-w-xs text-sm text-gray-200">
            Join Parcel Lift today and experience seamless parcel delivery.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Logo */}
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />

            <span className="hidden sm:inline">Parcel Lift</span>
          </Link>
        </div>

        {/* Form Area */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm bg-card p-6 rounded-2xl shadow-md">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
