import { j as jsxRuntimeExports, U as Users, S as Shield, b as Clock, c as DollarSign } from './index-B0lmnzWw.js';

const reasons = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-[#f8a825]" }),
    title: "Family-Owned",
    description: "We're a family-owned business proud to serve our community with care and dedication. Our customers are our neighbors, not just numbers."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-6 w-6 text-[#f8a825]" }),
    title: "Local, Licensed & Insured",
    description: "As a fully licensed and insured company based in Redlands, CA, you can trust that your home is in safe, qualified hands."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6 text-[#f8a825]" }),
    title: "Same-Day Service",
    description: "We know plumbing and HVAC issues can't wait. That's why QuickPros offers same-day appointments to get your system running again quickly."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-6 w-6 text-[#f8a825]" }),
    title: "Transparent Pricing",
    description: "No surprises—just honest, upfront pricing. You'll always know what to expect before work begins."
  }
];
const WhyChooseUs = () => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-[#004078] mb-4", children: "Why Choose QuickPros?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Choosing QuickPros means choosing peace of mind. We combine professional expertise with family values to give you honest service, upfront pricing, and lasting solutions." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: reasons.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#004078] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: item.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-[#004078] mb-2", children: item.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: item.description })
  ] }, index)) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-[#004078] mb-2", children: "Financing Available" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Big repairs don't have to break the bank. We offer flexible financing options so you can get the comfort you need now and pay over time." })
  ] })
] }) });

export { WhyChooseUs as default };
