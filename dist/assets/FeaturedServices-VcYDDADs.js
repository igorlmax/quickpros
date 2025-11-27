import { j as jsxRuntimeExports, C as Card, a as CardContent, W as Wrench, T as Thermometer, Z as Zap, D as Droplets, S as Shield, b as Clock } from './index-B0lmnzWw.js';

const services = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-8 w-8 text-[#e23b19]" }),
    title: "Plumbing Services",
    description: "From leaky faucets to full repipes, QuickPros is your trusted plumbing partner. Our licensed plumbers handle everything from fixture installations and water pressure issues to slab leaks and sewer repairs.",
    details: "Residential & commercial service, repiping, fixture replacement, leak detection, sewer line repair, and water filtration."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "h-8 w-8 text-[#e23b19]" }),
    title: "Heating Services",
    description: "Stay cozy through the cold with our reliable heating services. We install, repair, and maintain furnaces, heat pumps, and other heating systems so your home is always comfortable.",
    details: "Furnace repair & replacement, heat pump service, tune-ups, energy-efficient heating options."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-8 w-8 text-[#e23b19]" }),
    title: "Air Conditioning Services",
    description: "Beat the heat with expert cooling solutions from QuickPros. We keep your home comfortable with top-quality AC installation, repair, and preventative maintenance.",
    details: "AC repair, system installation, tune-ups, ductless mini-splits, thermostat upgrades."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-8 w-8 text-[#e23b19]" }),
    title: "Drain Cleaning Services",
    description: "Slow or clogged drains can cause big problems fast. Our team uses advanced tools to clear blockages and keep your plumbing system running smoothly.",
    details: "Kitchen & bathroom drains, main line stoppages, hydro jetting, camera inspections, root removal."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-8 w-8 text-[#e23b19]" }),
    title: "Water Heater Services",
    description: "Hot water when you need it most. QuickPros installs and services both traditional and tankless water heaters to ensure efficiency and long-lasting comfort.",
    details: "Tankless water heaters, water heater repair & installation, maintenance, energy efficient upgrades."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-8 w-8 text-[#e23b19]" }),
    title: "Emergency Repair Services",
    description: "Plumbing or HVAC emergencies don't wait—and neither do we. QuickPros offers fast, dependable 24/7 emergency service to restore your home's comfort and safety.",
    details: "Burst pipes, no-heat/no-cool emergencies, major leaks, backed-up drains, water heater breakdowns."
  }
];
const FeaturedServices = () => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-[#004078] mb-4", children: "Our Expert Services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "From emergency repairs to routine maintenance, QuickPros has the expertise to keep your home comfortable year-round." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: service.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-[#004078] mb-3", children: service.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: service.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: service.details })
  ] }) }, index)) })
] }) });

export { FeaturedServices as default };
