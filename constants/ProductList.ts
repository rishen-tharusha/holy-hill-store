export interface IProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  isNew?: boolean;
  href?: string;
}

export const DEFAULT_PRODUCTS: IProduct[] = [
  {
    id: "woven-throw",
    name: "Hand-Woven Wool Throw",
    price: "$96",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    isNew: true,
  },
  {
    id: "clay-mug-set",
    name: "Hillside Clay Mug Set",
    price: "$54",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    isNew: true,
  },
  {
    id: "botanical-candle",
    name: "Botanical Candle Trio",
    price: "$62",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "linen-runner",
    name: "Stonewashed Linen Runner",
    price: "$44",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pour-over",
    name: "Stoneware Pour-Over Set",
    price: "$78",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    isNew: true,
  },
  {
    id: "bath-salts",
    name: "Sage & Cedar Bath Salts",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "serving-board",
    name: "Cedar Serving Board",
    price: "$52",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  },
];

export const EVERY_DAY_DEALS: IProduct[] = [
  {
    id: "EDD01",
    name: "Muller",
    price: "",
    image: "/images/daily/deal-01.jpeg",
    isNew: false,
  },
  {
    id: "EDD02",
    name: "HOVIS Soft White",
    price: "",
    image: "/images/daily/deal-02.jpeg",
    isNew: false,
  },
  {
    id: "EDD03",
    name: "BuzzBall",
    price: "",
    image: "/images/daily/deal-03.jpeg",
    isNew: false,
  },
]

export const NEW_ARRIVALS: IProduct[] = [
  {
    id: "NA01",
    name: "",
    price: "",
    image: "/images/arrivals/New-Arrivals-01.jpeg",
    isNew: false,
  },
  {
    id: "NA02",
    name: "",
    price: "",
    image: "/images/arrivals/New-Arrivals-02.jpeg",
    isNew: false,
  },
]

export const MONTHLY_PROMOTIONS: IProduct[] = [
  {
    id: "MP01",
    name: "",
    price: "",
    image: "/images/monthly/Sep-01.png",
    isNew: false,
  },
  {
    id: "MP02",
    name: "",
    price: "",
    image: "/images/monthly/Sep-02.png",
    isNew: false,
  },
  {
    id: "MP03",
    name: "",
    price: "",
    image: "/images/monthly/Sep-03.png",
    isNew: false,
  },
  {
    id: "MP04",
    name: "",
    price: "",
    image: "/images/monthly/Sep-04.png",
    isNew: false,
  },
  {
    id: "MP05",
    name: "",
    price: "",
    image: "/images/monthly/Sep-05.png",
    isNew: false,
  },
  {
    id: "MP06",
    name: "",
    price: "",
    image: "/images/monthly/Sep-06.png",
    isNew: false,
  },
  {
    id: "MP07",
    name: "",
    price: "",
    image: "/images/monthly/Sep-07.png",
    isNew: false,
  },
  {
    id: "MP08",
    name: "",
    price: "",
    image: "/images/monthly/Sep-08.png",
    isNew: false,
  },
  {
    id: "MP09",
    name: "",
    price: "",
    image: "/images/monthly/Sep-09.png",
    isNew: false,
  },
  {
    id: "MP10",
    name: "",
    price: "",
    image: "/images/monthly/Sep-10.png",
    isNew: false,
  },
]