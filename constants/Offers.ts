import { type IOffer } from "@/components/Offers/OfferCard";

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

export const OFFERS: IOffer[] = [
  {
    id: "o1",
    image: "/images/monthly/Monthly-01.png",
    alt: "Wool trench coat on a hanger",
    showDetails: false,
    name: "Wool Trench Coat",
  },
  {
    id: "o2",
    image: "/images/monthly/Monthly-02.png",
    alt: "Ceramic table lamp",
  },
  {
    id: "o3",
    image: "/images/monthly/Monthly-03.png",
    alt: "Wireless earbuds in charging case",
    showDetails: false,
  },
  {
    id: "o4",
    image: "/images/monthly/Monthly-04.png",
    alt: "Skincare serum bottle",
  },
  {
    id: "o5",
    image: "/images/monthly/Monthly-05.png",
    alt: "Leather tote bag",
    showDetails: false,
    name: "Leather Tote",
  },
  {
    id: "o6",
    image: "/images/monthly/Monthly-06.png",
    alt: "Hand-thrown ceramic vase",
  },
  {
    id: "o7",
    image: "/images/monthly/Monthly-07.png",
    alt: "Minimal wristwatch",
  },
  {
    id: "o8",
    image: "/images/monthly/Monthly-08.png",
    alt: "Silk scarf folded flat",
    showDetails: false,
  },
  {
    id: "o9",
    image: "/images/monthly/Monthly-09.png",
    alt: "Poured soy candle",
  },
  {
    id: "o10",
    image: "/images/monthly/Monthly-10.png",
    alt: "Pressed powder blush",
    showDetails: false,
  },
];