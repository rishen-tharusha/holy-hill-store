import Hero from "@/components/home/Hero";
import { RatingFloatingCard, ShippingFloatingCard, TrustStrips } from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";

function HillScene() {
  return (
    <svg
      viewBox="0 0 600 520"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky texture dots */}
      <circle cx="90" cy="80" r="3" className="fill-primary-200" />
      <circle cx="150" cy="130" r="2" className="fill-primary-200" />
      <circle cx="500" cy="70" r="2.5" className="fill-primary-200" />
      <circle cx="440" cy="150" r="2" className="fill-primary-200" />

      {/* sun */}
      <circle cx="430" cy="140" r="90" fill="url(#sunGlow)" />
      <circle cx="430" cy="140" r="42" className="fill-secondary-400" />

      {/* back hill */}
      <path
        d="M0 340 C 120 260, 220 260, 320 320 C 420 380, 520 300, 600 330 L600 520 L0 520 Z"
        className="fill-primary-300"
      />

      {/* mid hill */}
      <path
        d="M0 400 C 100 340, 240 330, 340 390 C 430 440, 520 370, 600 400 L600 520 L0 520 Z"
        className="fill-primary-500"
      />

      {/* front hill */}
      <path
        d="M0 460 C 140 400, 260 410, 360 460 C 450 500, 540 440, 600 460 L600 520 L0 520 Z"
        className="fill-primary-800"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-base-50">
      <section
        id="home"
        className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-105 w-105 rounded-full bg-secondary-200/40 blur-3xl sm:h-140 sm:w-140"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Hero />

          <div className="relative mx-2 sm:mx-4 lg:mx-0">
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-b from-base-200 to-base-500 sm:rounded-[2.5rem]">
              <HillScene />
            </div>

            <RatingFloatingCard />

            <ShippingFloatingCard />
          </div>
        </div>
      </section>

      <NewArrivals />

      <TrustStrips />
    </div>
  );
}