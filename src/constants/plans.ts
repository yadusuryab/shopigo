type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS = [
    {
      id: "basic",
      title: "Starter",
      desc: "For small stores getting started online.",
      monthlyPrice: 300,
      yearlyPrice: 3600,
      buttonText: "Get Starter Plan",
      features: [
        "Mobile-ready online store",
        "UPI & Razorpay checkout",
        "Up to 20 products",
        "Basic dashboard access",
        "Chat support on WhatsApp"
      ]
    },
    {
      id: "pro",
      title: "Pro",
      desc: "Perfect for growing brands that want to scale.",
      monthlyPrice: 500,
      yearlyPrice: 4800,
      buttonText: "Start Selling",
      features: [
        "Everything in Starter",
        "Unlimited products",
        "Premium layouts",
        "Custom domain support",
        "Advanced dashboard",
        "Meta Pixel + Analytics",
        "Priority WhatsApp support"
      ]
    },
    {
      id: "yearly",
      title: "Pro (Yearly)",
      desc: "Best value. Get 2 months free when you pay yearly.",
      monthlyPrice: 1200, // will be calculated dynamically
      yearlyPrice: 12000,
      buttonText: "Save with Yearly Plan",
      features: [
        "Everything in Pro",
        "2 months free (₹4800/year)",
        "Early access to new features",
        "Direct setup support"
      ]
    }
  ];
  