import { j as jsxRuntimeExports, C as Card, a as CardContent, d as Star } from './index-B0lmnzWw.js';

const testimonials = [
  {
    name: "Sarah M. — ",
    location: "Redlands, CA",
    rating: 5,
    text: "QuickPros was amazing! Our AC stopped working on one of the hottest days this summer. The technician showed up on time, explained everything clearly, and had our system cooling again within an hour. Super professional and friendly service!"
  },
  {
    name: "James L.",
    location: "Yucaipa, CA",
    rating: 5,
    text: "I had a water heater issue and QuickPros came out the same day. Fair pricing, no hidden fees, and they treated my home with respect. I’ve already signed up for their maintenance plan because I trust them."
  },
  {
    name: "Maria G.",
    location: "Highland, CA",
    rating: 5,
    text: "From the first call to the job completion, the QuickPros team was courteous, knowledgeable, and efficient. They fixed a stubborn drain problem that other companies couldn’t. Highly recommend!"
  },
  {
    name: "David R.",
    location: "Loma Linda, CA",
    rating: 5,
    text: "QuickPros Plumbing & Air really impressed me. The technician explained my options for a new system without pressure, and the installation went smoothly. Great family-owned company!"
  },
  {
    name: "Amanda K.",
    location: "San Bernardino, CA",
    rating: 5,
    text: "Professional, fast, and affordable! QuickPros replaced a broken pipe in our home and even cleaned up afterward. It’s rare to find a company that goes the extra mile like this."
  }
];
const Testimonials = () => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-[#004078] mb-4", children: "What Our Customers Say" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { locationid: "11568939440904783508", className: "review-widget-carousel" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mb-4", children: [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-[#f8a825] fill-current" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mb-4", children: [
      '"',
      testimonial.text,
      '"'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-[#004078]", children: testimonial.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: testimonial.location })
    ] })
  ] }) }, index)) })
] }) });

export { Testimonials as default };
