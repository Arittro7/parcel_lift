import Logo from "@/assets/icon/logo.png";
import { Facebook, Github, Instagram,  Linkedin,  Twitter } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer>
      <div className="mx-auto container space-y-8 px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div onClick={() => navigate('/')} className="text-foreground flex gap-2 items-center">
              <Logo /> <h1 className="pacifico-regular text-2xl font-semibold">Delivery Express</h1>
            </div>

            <p className="mt-4 max-w-xs text-muted-foreground/80">
              Delivery Express — Fast, reliable, and secure parcel services across Bangladesh. Every parcel matters, every delivery on time.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  to="https://www.facebook.com/habibur5231"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <Facebook></Facebook>
                </Link>
              </li>

              <li>
                <Link
                  to="https://giftcartgalaxy.xyz"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <Instagram></Instagram>
                </Link>
              </li>

              <li>
                <Link
                  to="https://giftcartgalaxy.xyz"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <Twitter></Twitter>
                </Link>
              </li>

              <li>
                <Link
                  to="https://github.com/habibur5313"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <Github></Github>
                </Link>
              </li>

              <li>
                <Link
                  to="https://www.linkedin.com/in/habibur-rahman13"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:opacity-75"
                >
                  <span className="sr-only">Linkdin</span>

                  <Linkedin></Linkedin>
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    1on1 Coaching{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    Company Review{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    Accounts Review{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    HR Consulting{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    Meet the Team{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    Accounts Review{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faq"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    FAQs{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    Live Chat{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    Accessibility{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    Returns Policy{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    {" "}
                    Refund Policy{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:opacity-75"
                  >
                    Hiring-3 Statistics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2025. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}