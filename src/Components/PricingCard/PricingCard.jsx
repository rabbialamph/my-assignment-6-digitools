import { Check } from "lucide-react";
import React from "react";

const PricingCard = () => {
  const pricingData = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for getting started",
      price: 0,
      period: "month",
      tag: "",
      tagType: "",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      id: 2,
      name: "Pro",
      description: "Best for professionals",
      price: 29,
      period: "month",
      tag: "Most Popular",
      tagType: "popular",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      description: "For teams and businesses",
      price: 99,
      period: "month",
      tag: "",
      tagType: "",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-4">

        <div className="text-center mb-12 p-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mt-2">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl shadow-md p-8 flex flex-col justify-between ${
                plan.popular
                  ? "bg-gradient-to-b from-purple-600 to-purple-700 text-white relative"
                  : "bg-gray-50"
              }`}
            >
        
              {plan.popular && (
                <span className="absolute -top-3 left-32 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-medium">
                  {plan.tag}
                </span>
              )}

              <div>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p
                  className={`mb-6 ${plan.popular ? "text-purple-200" : "text-gray-500"}`}>
                  {plan.description}
                </p>

                <p className="text-4xl font-bold mb-6">
                  ${plan.price}
                  <span
                    className={`text-lg ${ plan.popular ? "text-purple-200" : "text-gray-500"}`}>
                    /{plan.period}
                  </span>
                </p>

                <ul
                  className={`space-y-3 ${plan.popular ? "text-white" : "text-gray-600"}`}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-1 "><Check size={18}></Check> {feature}</li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 py-3 rounded-full font-medium ${
                  plan.popular
                    ? "bg-white text-purple-700"
                    : "bg-gradient-to-r from-purple-800 to-purple-600 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCard;