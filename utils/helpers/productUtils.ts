export const getCardWidth = (count: number) => {
  if (count === 1) {
    return "w-[68%] xs:w-[58%] sm:w-[42%] md:w-[31%] lg:w-full";
  }

  if (count === 2) {
    return "w-[92%] xs:w-[58%] sm:w-[42%] md:w-[48%] lg:w-[calc((100%-1.25rem)/2)]";
  }

  return "w-[92%] xs:w-[58%] sm:w-[42%] md:w-[60%] lg:w-[calc((100%-2.5rem)/3)]";
};