import { Order } from "@/types/types";

// دیتای نمونه منو
export const menuList = [
  {
    menuId: "11111",
    menuName: "کافی شاپ حاج امیر",
    menuDescription:
      "نوشیدنی‌های گرم و سرد مبتنی بر قهوه به علاوه غذای گرم ایرونی",
    menuLocations: ["قزوین"],
    menuLogo: "/images/menu/logo.jpeg",
    pricing: [
      {
        priceListName: "غذای داغ",
        priceListLocations: ["کافی شاپ", "قزوین"],
      },
    ],
    categories: [
      {
        categoryId: "a",
        categoryName: "نوشیدنی‌های گرم",
        imageUrl: "",
        isActive: true,
        data: [
          {
            itemId: "a111", // شناسه تصادفی
            itemName: "اسپرسو",
            itemImage: "/images/products/espresso.jpg",
            itemDescription:
              "قهوه تلخ غلیظ تهیه شده از دانه‌های قهوه با کیفیت بالا",
            itemPrice: 60000,
          },
          {
            itemId: "a112", // شناسه تصادفی
            itemName: "لاته",
            itemImage: "/images/products/latte.jpg",
            itemDescription:
              "ترکیب اسپرسو با شیر بخار داده شده و یک لایه کف شیر",
            itemPrice: 70000,
          },
          {
            itemId: "a113", // شناسه تصادفی
            itemName: "کاپوچینو",
            itemImage: "/images/products/cappuccino.jpg",
            itemDescription: "اسپرسو با مقدار مساوی شیر و فوم شیر",
            itemPrice: 75000,
          },
        ],
      },
      {
        categoryId: "b",
        categoryName: "نوشیدنی‌های سرد",
        imageUrl: "",
        isActive: true,
        data: [
          {
            itemId: "b111", // شناسه تصادفی
            itemName: "آیس آمریکانو",
            itemImage: "/images/products/iced-americano.jpg",
            itemDescription: "قهوه اسپرسو با آب سرد و یخ",
            itemPrice: 80000,
          },
          {
            itemId: "b112", // شناسه تصادفی
            itemName: "آیس لاته",
            itemImage: "/images/products/iced-latte.jpg",
            itemDescription: "اسپرسو ترکیب شده با شیر سرد و یخ",
            itemPrice: 85000,
          },
          {
            itemId: "b113", // شناسه تصادفی
            itemName: "موهیتو",
            itemImage: "/images/products/mojito.jpg",
            itemDescription: "ترکیب لیمو، نعناع و سودا به همراه یخ",
            itemPrice: 90000,
          },
        ],
      },
      {
        categoryId: "c",
        categoryName: "غذای داغ",
        imageUrl: "",
        isActive: true,
        data: [
          {
            itemId: "c111", // شناسه تصادفی
            itemName: "کباب کوبیده",
            itemImage: "/images/products/kabab-koobideh.webp",
            itemDescription: "2 سیخ کباب 120 گرمی",
            itemPrice: 220000,
          },
          {
            itemId: "c112", // شناسه تصادفی
            itemName: "جوجه کباب",
            itemImage: "/images/products/chicken-kebab.jpg",
            itemDescription: "2 سیخ جوجه کباب 120 گرمی",
            itemPrice: 230000,
          },
          {
            itemId: "c113", // شناسه تصادفی
            itemName: "کباب برگ",
            itemImage: "/images/products/Barg-Kebab.png",
            itemDescription: "1 سیخ کباب 160 گرمی",
            itemPrice: 240000,
          },
        ],
      },
    ],
    addons: [
      {
        addonName: "سس‌ها",
        imageUrl: "",
        isActive: true,
        data: [
          {
            itemId: "d111", // شناسه تصادفی
            itemName: "سس مایونز",
            itemImage: "/images/products/",
            itemDescription: "سس 1",
            itemPrice: 10000,
          },
          {
            itemId: "d112", // شناسه تصادفی
            itemName: "سس کچاپ",
            itemImage: "/images/products/",
            itemDescription: "توضیحات",
            itemPrice: 12000,
          },
          {
            itemId: "d113", // شناسه تصادفی
            itemName: "سس تند",
            itemImage: "/images/products/",
            itemDescription: "توضیحات 2",
            itemPrice: 14000,
          },
        ],
      },
    ],
  },
];

export const orders: Order[] = [
  {
    orderId: "nqddyb",
    accepted: true,
    type: "order",
    reactionTime: "37",
    expectedRealTime: "15",
    date: new Date("2025-02-25T20:36:00"), // Converted to Date
    restaurant: "بناب",
    orderType: "pickup",
    fulfillmentTime: new Date("2025-02-25T20:50:00"), // Converted to Date
    customer: {
      name: "سینا نژادحسینی",
      phone: "9167991896",
      email: "sina4501@gmail.com",
    },
    paymentType: "cash",
    packingCost: 0, // Converted to number
    tax: 49000, // Converted to number
    totalPrice: 539000, // Converted to number
    orderedItems: [
      {
        itemId: "ab564",
        itemName: "kebab",
        count: 3,
        price: 120000, // Converted to number
        totalPrice: 360000, // Converted to number
      },
      {
        itemId: "ab574",
        itemName: "chicken",
        count: 1,
        price: 130000, // Converted to number
        totalPrice: 130000, // Converted to number
      },
    ],
  },
];

export const order: Order = {
  orderId: "nqddyb",
  accepted: false,
  type: "order",
  reactionTime: "37",
  expectedRealTime: "15",
  date: new Date("2025-02-25T20:36:00"), // Converted to Date
  restaurant: "بناب",
  orderType: "pickup",
  fulfillmentTime: new Date("2025-02-25T20:50:00"), // Converted to Date
  customer: {
    name: "سینا نژادحسینی",
    phone: "9167991896",
    email: "sina4501@gmail.com",
  },
  paymentType: "cash",
  packingCost: 0, // Converted to number
  tax: 49000, // Converted to number
  totalPrice: 539000, // Converted to number
  orderedItems: [
    {
      itemId: "ab564",
      itemName: "کباب کوبیده",
      count: 3,
      price: 120000, // Converted to number
      totalPrice: 360000, // Converted to number
    },
    {
      itemId: "ab574",
      itemName: "جوجه کباب",
      count: 1,
      price: 130000, // Converted to number
      totalPrice: 130000, // Converted to number
    },
  ],
};
