var heroImage = "/assets/images/hero_section-hHgsFWnt.png";
export { heroImage };
var storyImage = "/assets/images/our-story-DFcrvKV4.jpg";
export { storyImage };
var mainDishOne = "/assets/images/main1-B8w2-drh.jpg",
  mainDishTwo = "/assets/images/main2-Bg7aKmcm.jpg",
  starterOne = "/assets/images/starter1-DrdStNME.jpg",
  featuredDishes = [
    {
      id: 1,
      name: "Grilled Chicken",
      image: mainDishOne,
    },
    {
      id: 2,
      name: "Truffle Pasta",
      image: mainDishTwo,
    },
    {
      id: 3,
      name: "Classic Burger",
      image: starterOne,
    },
  ];
export { mainDishOne, mainDishTwo, starterOne, featuredDishes };
var restaurantBenefits = [
  {
    id: 1,
    icon: "/assets/images/taste-icon-Bvbn9-is.png",
    title: "Taste Matters",
    text: "Use this space to promote the business, its dishes or its services.",
  },
  {
    id: 2,
    icon: "/assets/images/chef-icon-CptT_POC.png",
    title: "The Best Chefs",
    text: "Use this space to promote the business, its dishes or its services.",
  },
  {
    id: 3,
    icon: "/assets/images/discount-icon-BsfmWHV2.png",
    title: "Discounts",
    text: "Use this space to promote the business, its dishes or its services.",
  },
  {
    id: 4,
    icon: "/assets/images/delivery-icon-BZ3f77oK.png",
    title: "Express Delivery",
    text: "Use this space to promote the business, its dishes or its services.",
  },
];
export { restaurantBenefits };
var starterTwo = "/assets/images/starter2-n1fWQvHY.jpg",
  starterThree = "/assets/images/starter3-QpowUdyY.jpg",
  starterFour = "/assets/images/starter4-DbDMTPqF.jpg",
  mainDishThree = "/assets/images/main3-B89MXrCv.jpg",
  mainDishFour = "/assets/images/main4-DjpDLZUk.jpg",
  dessertOne = "/assets/images/dessert1-Dw4OuJLQ.jpg",
  dessertTwo = "/assets/images/dessert2-Bi2Nefst.jpg",
  dessertThree = "/assets/images/dessert3-X-JFE72h.jpg",
  dessertFour = "/assets/images/dessert4-2mQo4mxw.jpg",
  drinkOne = "/assets/images/drink1-CJn_OAZ7.jpg",
  drinkTwo = "/assets/images/drink2-Bt9L47WC.jpg",
  popularDishesByCategory = {
    Starters: [
      {
        id: 1,
        name: "Bruschetta",
        price: "1500",
        image: starterOne,
      },
      {
        id: 2,
        name: "Calamari",
        price: "1000",
        image: starterTwo,
      },
      {
        id: 3,
        name: "Caesar Salad",
        price: "980",
        image: starterThree,
      },
      {
        id: 4,
        name: "Chicken Wings",
        price: "1100",
        image: starterFour,
      },
    ],
    "Main Course": [
      {
        id: 5,
        name: "Grilled chicken",
        price: "1000",
        image: mainDishOne,
      },
      {
        id: 6,
        name: "BBQ chicken",
        price: "890",
        image: mainDishTwo,
      },
      {
        id: 7,
        name: "Truffle Pasta",
        price: "1600",
        image: mainDishThree,
      },
      {
        id: 8,
        name: "Fried Rice",
        price: "1200",
        image: mainDishFour,
      },
    ],
    Desserts: [
      {
        id: 9,
        name: "Chocolate Lava Cake",
        price: "800",
        image: dessertOne,
      },
      {
        id: 10,
        name: "Tiramisu",
        price: "900",
        image: dessertTwo,
      },
      {
        id: 11,
        name: "Cheesecake",
        price: "700",
        image: dessertThree,
      },
      {
        id: 12,
        name: "Apple Pie",
        price: "700",
        image: dessertFour,
      },
    ],
    Beverages: [
      {
        id: 13,
        name: "Iced Coffee",
        price: "500",
        image: drinkOne,
      },
      {
        id: 14,
        name: "Mango Smoothie",
        price: "450",
        image: drinkTwo,
      },
      {
        id: 15,
        name: "Fresh Lemonade",
        price: "400",
        image: "/assets/images/drink3-tv7aRiMr.jpg",
      },
      {
        id: 16,
        name: "Hot Chocolate",
        price: "520",
        image: "/assets/images/drink4-D_uFrXvh.jpg",
      },
    ],
  },
  popularCategoryNames = Object.keys(popularDishesByCategory);
export {
  starterTwo,
  starterThree,
  starterFour,
  mainDishThree,
  mainDishFour,
  dessertOne,
  dessertTwo,
  dessertThree,
  dessertFour,
  drinkOne,
  drinkTwo,
  popularDishesByCategory,
  popularCategoryNames,
};
var homeReviews = [
  {
    id: 1,
    text: '"Every dish felt like it had a story behind it — smoky, rich, and unforgettable. The best meal we\'ve had in Islamabad this year."',
    name: "Sarah Johnson",
    role: "Food Blogger",
  },
  {
    id: 2,
    text: '"Warm hospitality, beautiful ambiance, and food that actually lives up to the atmosphere. We\'ll be back with the whole family."',
    name: "Ahmed Khan",
    role: "Regular Guest",
  },
  {
    id: 3,
    text: '"The truffle pasta alone is worth the visit. A hidden gem with the kind of attention to detail you rarely find anymore."',
    name: "Emily Davis",
    role: "Local Reviewer",
  },
  {
    id: 4,
    text: '"From the firelight glow to the last bite of dessert, everything about this place feels intentional and cared for."',
    name: "Daniel Kim",
    role: "CEO, Founder",
  },
];
export { homeReviews };
var restaurantTimeline = [
  {
    id: 1,
    year: "2004",
    text: "Opened small family kitchen with six tables.",
  },
  {
    id: 2,
    year: "2011",
    text: "Expanded the dining room, added our signature wood-fire grill.",
  },
  {
    id: 3,
    year: "2017",
    text: "Named one of the city's top dining spots for three years running.",
  },
  {
    id: 4,
    year: "2024",
    text: "Two decades in, still family-run, still slow-cooked.",
  },
];
export { restaurantTimeline };
var menuItems = [
    {
      id: 1,
      name: "Grilled Salmon",
      category: "Main Course",
      price: "1100",
      calories: 420,
      image: mainDishOne,
      recommended: !0,
    },
    {
      id: 2,
      name: "Truffle Pasta",
      category: "Main Course",
      price: "900",
      calories: 510,
      image: mainDishTwo,
      recommended: !0,
    },
    {
      id: 3,
      name: "Classic Burger",
      category: "Main Course",
      price: "800",
      calories: 650,
      image: mainDishOne,
      recommended: !1,
    },
    {
      id: 4,
      name: "Margherita Pizza",
      category: "Main Course",
      price: "1500",
      calories: 580,
      image: mainDishTwo,
      recommended: !1,
    },
    {
      id: 5,
      name: "BBQ Ribs",
      category: "Main Course",
      price: "720",
      calories: 720,
      image: mainDishOne,
      recommended: !0,
    },
    {
      id: 6,
      name: "Chicken Alfredo",
      category: "Main Course",
      price: "700",
      calories: 600,
      image: mainDishTwo,
      recommended: !1,
    },
    {
      id: 7,
      name: "Beef Steak",
      category: "Main Course",
      price: "650",
      calories: 780,
      image: mainDishOne,
      recommended: !0,
    },
    {
      id: 8,
      name: "Vegetable Stir Fry",
      category: "Main Course",
      price: "400",
      calories: 380,
      image: mainDishTwo,
      recommended: !1,
    },
    {
      id: 9,
      name: "Shrimp Scampi",
      category: "Main Course",
      price: "200",
      calories: 490,
      image: mainDishOne,
      recommended: !1,
    },
    {
      id: 10,
      name: "Lamb Chops",
      category: "Main Course",
      price: "200",
      calories: 690,
      image: mainDishTwo,
      recommended: !0,
    },
    {
      id: 11,
      name: "Bruschetta",
      category: "Starters",
      price: "900",
      calories: 220,
      image: starterOne,
      recommended: !1,
    },
    {
      id: 12,
      name: "Calamari",
      category: "Starters",
      price: "1000",
      calories: 340,
      image: starterTwo,
      recommended: !0,
    },
    {
      id: 13,
      name: "Spring Rolls",
      category: "Starters",
      price: "750",
      calories: 260,
      image: starterOne,
      recommended: !1,
    },
    {
      id: 14,
      name: "Garlic Bread",
      category: "Starters",
      price: "600",
      calories: 300,
      image: starterTwo,
      recommended: !1,
    },
    {
      id: 15,
      name: "Caesar Salad",
      category: "Starters",
      price: "900",
      calories: 280,
      image: starterOne,
      recommended: !0,
    },
    {
      id: 16,
      name: "Stuffed Mushrooms",
      category: "Starters",
      price: "900",
      calories: 250,
      image: starterTwo,
      recommended: !1,
    },
    {
      id: 17,
      name: "Onion Rings",
      category: "Starters",
      price: "670",
      calories: 400,
      image: starterOne,
      recommended: !1,
    },
    {
      id: 18,
      name: "Chicken Wings",
      category: "Starters",
      price: "1000",
      calories: 480,
      image: starterTwo,
      recommended: !0,
    },
    {
      id: 19,
      name: "Chocolate Lava Cake",
      category: "Desserts",
      price: "900",
      calories: 450,
      image: dessertOne,
      recommended: !0,
    },
    {
      id: 20,
      name: "Tiramisu",
      category: "Desserts",
      price: "900",
      calories: 420,
      image: dessertTwo,
      recommended: !1,
    },
    {
      id: 21,
      name: "Cheesecake",
      category: "Desserts",
      price: "800",
      calories: 400,
      image: dessertOne,
      recommended: !0,
    },
    {
      id: 22,
      name: "Ice Cream Sundae",
      category: "Desserts",
      price: "700",
      calories: 380,
      image: dessertTwo,
      recommended: !1,
    },
    {
      id: 23,
      name: "Apple Pie",
      category: "Desserts",
      price: "980",
      calories: 360,
      image: dessertOne,
      recommended: !1,
    },
    {
      id: 24,
      name: "Panna Cotta",
      category: "Desserts",
      price: "800",
      calories: 340,
      image: dessertTwo,
      recommended: !1,
    },
    {
      id: 25,
      name: "Fresh Lemonade",
      category: "Beverages",
      price: "400",
      calories: 120,
      image: drinkOne,
      recommended: !1,
    },
    {
      id: 26,
      name: "Iced Coffee",
      category: "Beverages",
      price: "500",
      calories: 150,
      image: drinkTwo,
      recommended: !0,
    },
    {
      id: 27,
      name: "Mango Smoothie",
      category: "Beverages",
      price: "600",
      calories: 220,
      image: drinkOne,
      recommended: !1,
    },
    {
      id: 28,
      name: "Mint Mojito (Virgin)",
      category: "Beverages",
      price: "600",
      calories: 140,
      image: drinkTwo,
      recommended: !1,
    },
    {
      id: 29,
      name: "Hot Chocolate",
      category: "Beverages",
      price: "600",
      calories: 260,
      image: drinkOne,
      recommended: !1,
    },
    {
      id: 30,
      name: "Fresh Orange Juice",
      category: "Beverages",
      price: "400",
      calories: 110,
      image: drinkTwo,
      recommended: !0,
    },
  ],
  menuCategories = ["All", "Starters", "Main Course", "Desserts", "Beverages"];
export { menuItems, menuCategories };
var chefs = [
  {
    id: 1,
    name: "Marco Rossi",
    position: "Head Chef",
    experience: "15 years",
    specialty: "Italian Cuisine",
    image: "/assets/images/chef1-CHIFWung.jpg",
    bio: "Marco trained in Rome before bringing authentic Italian flavors to our kitchen, blending tradition with modern technique.",
  },
  {
    id: 2,
    name: "Maz Chen",
    position: "Pastry Chef",
    experience: "10 years",
    specialty: "Desserts & Baking",
    image: "/assets/images/chef2-Dej2eXK_.jpg",
    bio: "Maz turns simple ingredients into edible art, known especially for his signature chocolate lava cake.",
  },
  {
    id: 3,
    name: "James Carter",
    position: "Sous Chef",
    experience: "8 years",
    specialty: "Grill & BBQ",
    image: "/assets/images/chef3-CIr7HhQF.jpg",
    bio: "James brings bold, smoky flavors to the menu, mastering the art of slow-cooked, perfectly grilled dishes.",
  },
  {
    id: 4,
    name: "Amar Khan",
    position: "Sushi Chef",
    experience: "12 years",
    specialty: "Japanese Cuisine",
    image: "/assets/images/chef4-CSzu2b1f.jpg",
    bio: "Amar honed his craft in Tokyo, bringing precision and elegance to every roll and sashimi plate.",
  },
  {
    id: 5,
    name: "Daniel Kim",
    position: "Executive Chef",
    experience: "18 years",
    specialty: "Fusion Cuisine",
    image: "/assets/images/chef5-BAbnqL_H.jpg",
    bio: "Daniel oversees the entire kitchen, crafting innovative fusion dishes that blend global influences.",
  },
  {
    id: 6,
    name: "Alez Moreau",
    position: "Pastry Sous Chef",
    experience: "7 years",
    specialty: "French Patisserie",
    image: "/assets/images/chef6-ByNImki9.jpg",
    bio: "ALez trained in Paris and specializes in delicate French pastries and refined dessert presentation.",
  },
];
export { chefs };
var interiorOne = "/assets/images/interior1-44d1Xo8r.jpg",
  interiorTwo = "/assets/images/interior2-BgqReE4h.jpg",
  galleryImages = [
    {
      id: 1,
      category: "Food",
      image: mainDishOne,
    },
    {
      id: 2,
      category: "Food",
      image: mainDishTwo,
    },
    {
      id: 3,
      category: "Food",
      image: starterOne,
    },
    {
      id: 4,
      category: "Food",
      image: starterTwo,
    },
    {
      id: 5,
      category: "Food",
      image: mainDishOne,
    },
    {
      id: 6,
      category: "Food",
      image: mainDishTwo,
    },
    {
      id: 7,
      category: "Interior",
      image: storyImage,
    },
    {
      id: 8,
      category: "Interior",
      image: interiorOne,
    },
    {
      id: 9,
      category: "Interior",
      image: interiorTwo,
    },
    {
      id: 10,
      category: "Interior",
      image: storyImage,
    },
    {
      id: 11,
      category: "Interior",
      image: interiorOne,
    },
    {
      id: 12,
      category: "Interior",
      image: interiorTwo,
    },
    {
      id: 13,
      category: "Drinks",
      image: drinkOne,
    },
    {
      id: 14,
      category: "Drinks",
      image: drinkTwo,
    },
    {
      id: 15,
      category: "Drinks",
      image: drinkOne,
    },
    {
      id: 16,
      category: "Drinks",
      image: drinkTwo,
    },
    {
      id: 17,
      category: "Drinks",
      image: drinkOne,
    },
    {
      id: 18,
      category: "Drinks",
      image: drinkTwo,
    },
    {
      id: 19,
      category: "Desserts",
      image: dessertOne,
    },
    {
      id: 20,
      category: "Desserts",
      image: dessertTwo,
    },
    {
      id: 21,
      category: "Desserts",
      image: dessertOne,
    },
    {
      id: 22,
      category: "Desserts",
      image: dessertTwo,
    },
    {
      id: 23,
      category: "Desserts",
      image: dessertOne,
    },
    {
      id: 24,
      category: "Desserts",
      image: dessertTwo,
    },
  ],
  galleryCategories = ["All", "Food", "Interior", "Drinks", "Desserts"];
export { interiorOne, interiorTwo, galleryImages, galleryCategories };
var testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Blogger",
      rating: 5,
      text: "Every dish felt like it had a story behind it — smoky, rich, and unforgettable.",
    },
    {
      id: 2,
      name: "Ahmed Khan",
      role: "Regular Guest",
      rating: 5,
      text: "Warm hospitality and food that actually lives up to the atmosphere.",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Local Reviewer",
      rating: 4,
      text: "The truffle pasta alone is worth the visit. A hidden gem.",
    },
    {
      id: 4,
      name: "Daniel Kim",
      role: "CEO, Founder",
      rating: 5,
      text: "From the firelight glow to the last bite, everything feels intentional.",
    },
    {
      id: 5,
      name: "Layla Ahmed",
      role: "Traveler",
      rating: 5,
      text: "Best meal I've had in Islamabad, hands down. The ambiance alone is worth it.",
    },
    {
      id: 6,
      name: "Omar Farooq",
      role: "Chef",
      rating: 4,
      text: "As someone who cooks professionally, I respect the patience in every dish here.",
    },
    {
      id: 7,
      name: "Hannah Lee",
      role: "Photographer",
      rating: 5,
      text: "Every plate is a photograph waiting to happen. Stunning presentation.",
    },
    {
      id: 8,
      name: "Bilal Hussain",
      role: "Regular Guest",
      rating: 5,
      text: "The staff remembers our order every time. That kind of care is rare.",
    },
    {
      id: 9,
      name: "Grace Miller",
      role: "Food Critic",
      rating: 4,
      text: "A rare balance of bold flavor and quiet elegance in the room itself.",
    },
    {
      id: 10,
      name: "Faisal Malik",
      role: "Business Owner",
      rating: 5,
      text: "Our go-to spot for client dinners. Never disappoints.",
    },
    {
      id: 11,
      name: "Zara Iqbal",
      role: "Student",
      rating: 5,
      text: "Affordable enough for a treat, special enough for a celebration.",
    },
    {
      id: 12,
      name: "Hassan Raza",
      role: "Local Guest",
      rating: 4,
      text: "The lamb chops are worth crossing the city for. Truly memorable. ",
    },
  ],
  achievements = [
    {
      id: 1,
      number: "20+",
      label: "years of service",
    },
    {
      id: 2,
      number: "15k+",
      label: "happy guests",
    },
    {
      id: 3,
      number: "30",
      label: "signature dishes",
    },
    {
      id: 4,
      number: "6",
      label: "awards won",
    },
  ];
export { testimonials, achievements };
var blogPosts = [
  {
    id: 1,
    title: "The Art of Slow Cooking",
    excerpt:
      "Why patience is the secret ingredient behind every great dish we serve.",
    date: "June 12, 2026",
    category: "Kitchen",
    image: mainDishOne,
  },
  {
    id: 2,
    title: "Sourcing from Local Farms",
    excerpt:
      "A look inside our relationships with the growers behind our freshest ingredients.",
    date: "May 28, 2026",
    category: "Sourcing",
    image: mainDishTwo,
  },
  {
    id: 3,
    title: "The Art of Slow Cooking",
    excerpt:
      "Why patience is the secret ingredient behind every great dish we serve.",
    date: "June 12, 2026",
    category: "Kitchen",
    image: starterOne,
  },
  {
    id: 4,
    title: "A Chef's Guide to Spice",
    excerpt:
      "Marco walks through the spice blends that define our menu's character.",
    date: "April 30, 2026",
    category: "Chefs",
    image: dessertOne,
  },
  {
    id: 5,
    title: "The Art of Slow Cooking",
    excerpt:
      "Why patience is the secret ingredient behind every great dish we serve.",
    date: "June 12, 2026",
    category: "Kitchen",
    image: mainDishOne,
  },
  {
    id: 6,
    title: "Sourcing from Local Farms",
    excerpt:
      "A look inside our relationships with the growers behind our freshest ingredients.",
    date: "May 28, 2026",
    category: "Sourcing",
    image: mainDishTwo,
  },
  {
    id: 7,
    title: "The Art of Slow Cooking",
    excerpt:
      "Why patience is the secret ingredient behind every great dish we serve.",
    date: "June 12, 2026",
    category: "Kitchen",
    image: starterOne,
  },
  {
    id: 8,
    title: "A Chef's Guide to Spice",
    excerpt:
      "Marco walks through the spice blends that define our menu's character.",
    date: "April 30, 2026",
    category: "Chefs",
    image: dessertOne,
  },
];
export { blogPosts };
var faqItems = [
  {
    id: 1,
    question: "Do I need a reservation?",
    answer:
      "Reservations are recommended, especially on weekends, but walk-ins are always welcome depending on availability.",
  },
  {
    id: 2,
    question: "What are your opening hours?",
    answer:
      "We're open Monday to Friday, 12:00 PM to 11:00 PM, and Saturday to Sunday, 11:00 AM to 12:00 AM.",
  },
  {
    id: 3,
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Yes, we offer vegetarian, vegan, and gluten-free options. Please inform your server of any allergies.",
  },
  {
    id: 4,
    question: "Can I modify my reservation?",
    answer:
      "Yes, please call us at least 2 hours in advance to modify or cancel your reservation.",
  },
  {
    id: 5,
    question: "Can I modify my reservation?",
    answer:
      "Yes, please call us at least 2 hours in advance to modify or cancel your reservation.",
  },
  {
    id: 6,
    question: "Do you host events or celebrations?",
    answer:
      "We love hosting birthdays, anniversaries, and celebrations — let us know in advance and we'll help make it special.",
  },
  {
    id: 7,
    question: "Do you have parking available?",
    answer:
      "Yes, we offer complimentary parking for all guests directly outside the restaurant.",
  },
  {
    id: 8,
    question: "Can I modify my reservation?",
    answer:
      "Yes, please call us at least 2 hours in advance to modify or cancel your reservation.",
  },
  {
    id: 9,
    question: "Do you offer takeout or delivery?",
    answer:
      "Yes, takeout is available directly, and we partner with major delivery platforms for delivery orders.",
  },
  {
    id: 10,
    question: "Can I modify my reservation?",
    answer:
      "Yes, please call us at least 2 hours in advance to modify or cancel your reservation.",
  },
  {
    id: 11,
    question: "Do you host events or celebrations?",
    answer:
      "We love hosting birthdays, anniversaries, and celebrations — let us know in advance and we'll help make it special.",
  },
  {
    id: 12,
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit/debit cards, and mobile payment options.",
  },
  {
    id: 13,
    question: "Do you offer catering services?",
    answer:
      "Yes, we provide catering for private events. Reach out through our contact page for a custom quote.",
  },
  {
    id: 14,
    question: "Can I modify my reservation?",
    answer:
      "Yes, please call us at least 2 hours in advance to modify or cancel your reservation.",
  },
  {
    id: 15,
    question: "Do you host events or celebrations?",
    answer:
      "We love hosting birthdays, anniversaries, and celebrations — let us know in advance and we'll help make it special.",
  },
];
export { faqItems };
