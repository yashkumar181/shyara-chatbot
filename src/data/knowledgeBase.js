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
      price: "₹499/month per restaurant",

      features: [
        "QR Menu",
        "Dietary Filters",
        "Waiter Cart",
        "Real-time Sold Out Toggle",
        "Staff Invites"
      ],

      limits: {
        tables: 20,
        items: 100
      }
    },

    plus: {
      price: "₹2,999/month per restaurant",

      features: [
         "QR Menu",
        "Dietary Filters",
        "Waiter Cart",
        "Real-time Sold Out Toggle",
        "Staff Invites",
        "Everything in Lite",
        "Direct Table Ordering",
        "Pay From Table",
        "Kitchen Display Queue",
        "Revenue Analytics"
      ]
    },

    premium: {
      price: "₹4,999/month per restaurant",

      features: [
         "QR Menu",
        "Dietary Filters",
        "Waiter Cart",
        "Real-time Sold Out Toggle",
        "Staff Invites",
        "Everything in Lite",
        "Direct Table Ordering",
        "Pay From Table",
        "Kitchen Display Queue",
        "Revenue Analytics", "Peak-hour & trend reports",
        "Average order value & table-time trends","Menu item popularity & best sellers",
        "Dish rating insights from diners"
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