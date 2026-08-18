import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-12 sm:px-10 md:px-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h4 className="font-header text-3xl leading-tight text-white sm:text-4xl lg:max-w-sm">
            Albishir Trust Foundation
          </h4>

          <p className="mt-3 max-w-md sm:text-base text-sm text-white/90">
            Bringing Light. Empowering Communities. Transforming Lives.
          </p>
        </div>

        <div className="flex flex-col text-sm md:text-base items-center text-center sm:items-start sm:text-left">
          <h4 className="tracking-wider text-white/80">EXPLORE</h4>

          <ul className="mt-4 flex flex-col gap-3">
            <li className="text-white">About Us</li>
            <li className="text-white">Our Programs</li>
            <li className="text-white">Our Impact</li>
            <li className="text-white">Our Work</li>
            <li className="text-white">Get Involved</li>
            <li className="text-white">Contact</li>
            <li className="text-white">Donate</li>
          </ul>
        </div>

        <div className="flex flex-col text-sm sm:text-base items-center sm:items-start">
          <h4 className="tracking-wider text-white/80">CONTACT</h4>

          <div className="mt-5 flex w-full items-center md:items-start max-w-md flex-col gap-5">
            <div className="flex items-start gap-3 text-white">
              <Mail size={20} className="mt-1 shrink-0 text-secondary" />

              <p className="break-all sm:break-normal">
                albishiritrust2019@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 text-white">
              <Phone size={20} className="mt-1 shrink-0 text-secondary" />

              <div>
                <p>+234 8109515815</p>
                <p>+234 7014727901</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 text-white">
              <MapPin size={22} className="mt-1 shrink-0 text-secondary" />

              <p className="leading-relaxed">
                No. 4 Temple Close, Off Miango Road, Jos, Plateau State,
                Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
