import React from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

const PricingCard = ({
  planName,
  price,
  billingCycle,
  features = [],
  isFeatured = false,
}) => {
  return (
    <div
      className={`relative w-full max-w-sm p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2
      ${isFeatured
        ? "border-cyan-400 shadow-xl shadow-cyan-900/30"
        : "border-gray-800 hover:border-cyan-700"}
      bg-gradient-to-b from-[#0a111a] to-[#04090f] text-white`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <span className="absolute -top-3 right-6 bg-cyan-400 text-black text-xs px-4 py-1 rounded-full font-semibold">
          Most Popular
        </span>
      )}

      {/* Glow Effect */}
      <div className="absolute -top-5 -left-5 w-32 h-32 bg-cyan-400/60 blur-[50px] rounded-4xl"></div>

      {/* Header */}
      <div className="relative mb-8">
        <h3 className="text-xl font-bold mb-4">{planName}</h3>

        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">$ {price}</span>
        </div>

        <p className="text-gray-400 mt-2 font-medium">{billingCycle}</p>
      </div>

      <hr className="border-gray-800 mb-8" />

      {/* Features */}
      <ul className="space-y-5 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
            <span className="text-gray-300 font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <Button value="Get Started →" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-cyan-500/10 blur-3xl -z-10" />
    </div>
  );
};

export default PricingCard;