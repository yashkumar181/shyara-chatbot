const knowledgeBase = {
  company: "Shyara",
  product: "BiteX",
  setupTime: "15 minutes",

  qr: {
    permanent: true,
    customerAppRequired: false,
    menuUpdate: true,
    instantPriceUpdate: true
  },

  plans: {
    lite: {
      name: "Lite Plan",
      status: "LIVE NOW",
      price: "₹499/mo per restaurant",
      distinction: "Basic QR Menu & Staff Management.",
      features: [
        "QR Menu",
        "Dietary Filters",
        "Waiter Cart",
        "Real-time Sold Out Toggle",
        "Staff Invites"
      ],
      limits: { tables: 20, items: 100 }
    },

    plus: {
      name: "Plus Plan",
      status: "LIVE NOW",
      price: "₹2,999/mo per restaurant",
      distinction: "Table Ordering & Payments.",
      features: [
        "Everything in Lite",
        "Direct Table Ordering",
        "Pay From Table",
        "Kitchen Display Queue",
        "Revenue Analytics"
      ]
    },

    premium: {
      name: "Premium Plan",
      status: "LIVE NOW",
      price: "₹4,999/mo per restaurant",
      distinction: "Deep analytics for growing teams. Know your restaurant by numbers.",
      features: [
        "Revenue & order analytics dashboard",
        "Peak-hour & trend reports",
        "Average order value & table-time trends",
        "Menu item popularity & best sellers",
        "Dish rating insights from diners"
      ]
    },

    elite: {
      name: "Elite Plan",
      status: "COMING SOON",
      price: "Pricing announced soon",
      distinction: "Multiplayer table games & leaderboards. Dining becomes an experience.",
      features: [
        "Single & multiplayer games from one QR",
        "Whole table plays as a team",
        "Restaurant-wide live leaderboard",
        "Remove BiteX branding (white-label)"
      ]
    }
  },

  additional: [
    "Multiple restaurant outlets supported",
    "Every outlet requires separate subscription",
    "Grace period available for failed payments"
  ]
};

export default knowledgeBase;