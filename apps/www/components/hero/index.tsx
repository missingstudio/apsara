import Balance from "react-wrap-balancer";
import { MilkeyWay } from "../milkway";

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <MilkeyWay />

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          <div className="max-w-[60rem] mx-auto text-center">
            <h1
              className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4 md:leading-[1.2] md:tracking-normal"
              data-aos="fade-down"
            >
              A design system
              <br />
              For LLM applications
            </h1>

            <Balance
              className="text-lg sm:text-xl text-neutral-300  tracking-wide mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Apsara is an open-source re-usable UI components built using Radix
              UI for AI studio
            </Balance>
          </div>
        </div>
      </div>
    </section>
  );
}
