import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router"; 
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { role } from "@/constants/role";
import Logo from "@/assets/icon/Logo.png";
import { ModeToggle } from "../mode.toggle";
import { useAppDispatch } from "@/redux/hook";

// Public navigation links (visible to everyone)
const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/tracking", label: "Track Parcel" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

// Role-based dashboard links
const dashboardLinks = [
  { href: "/admin", label: "Dashboard", role: role.Admin },
  { href: "/sender", label: "Dashboard", role: role.Sender },
  { href: "/receiver", label: "Dashboard", role: role.Receiver },
];

export default function Navbar() {
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="group size-8 md:hidden" variant="ghost" size="icon">
                {/* Hamburger SVG (same as before) */}
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12L20 12" className="origin-center -translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]" />
                  <path d="M4 12H20" className="origin-center transition-all duration-300 group-aria-expanded:rotate-45" />
                  <path d="M4 12H20" className="origin-center translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-48 p-2 md:hidden">
              <div className="flex flex-col gap-1">
                {publicLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="px-3 py-2 text-muted-foreground hover:text-primary font-medium rounded-md hover:bg-accent">
                    {link.label}
                  </Link>
                ))}
                <div className="pl-3 py-1 text-sm font-semibold text-foreground">Services</div>
                <Link to="/services/national" className="px-6 py-1.5 text-muted-foreground hover:text-primary">National</Link>
                <Link to="/services/international" className="px-6 py-1.5 text-muted-foreground hover:text-primary">International</Link>

                {dashboardLinks
                  .filter((link) => link.role === data?.data?.role)
                  .map((link) => (
                    <Link key={link.href} to={link.href} className="px-3 py-2 text-muted-foreground hover:text-primary font-medium rounded-md hover:bg-accent">
                      {link.label}
                    </Link>
                  ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Desktop navigation */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90">
              <div className="flex items-center gap-2 text-foreground">
                <img src={Logo} alt="Logo" className="h-12 w-auto hidden sm:block" />
                <h1 className="pacifico-regular sm:text-2xl text-xl font-medium sm:font-semibold">
                  Parcel <span className="text-orange-500">Lift</span>
                </h1>
              </div>
            </Link>

            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-4">
                {publicLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link to={link.href} className="text-muted-foreground hover:text-primary font-medium">
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-primary font-medium ">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-3 p-4 md:w-56 lg:w-64">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/national"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">National</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast and reliable parcel delivery within the country.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/international"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">International</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Global shipping with tracking and customs support.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Dashboard link based on user role */}
                {dashboardLinks
                  .filter((link) => link.role === data?.data?.role)
                  .map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link to={link.href} className="text-muted-foreground hover:text-primary font-medium">
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          {data?.data?.email ? (
            <Button onClick={handleLogout} variant="outline" className="text-sm">
              Logout
            </Button>
          ) : (
            <Button asChild className="text-sm">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}