import Image from "next/image";
import { IProduct } from "@/constants/ProductList";
import { Sparkles } from "lucide-react";

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <a
      href={product.href ?? "#"}
      className="group block focus:outline-none"
    >
      <div className="relative h-105 overflow-hidden rounded-[1.75rem] bg-base-600 sm:h-110 lg:h-105">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 40vw, 65vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          loading="eager"
        />

        {product.isNew && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-base-50/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary-700 shadow-sm backdrop-blur-sm">
            <Sparkles
              className="h-3 w-3"
              strokeWidth={2}
            />
            New
          </span>
        )}

        <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-primary-900/5 transition-colors duration-300 group-hover:ring-primary-900/10" />
      </div>

      <div className="mt-3.5 flex items-start justify-between gap-3 px-0.5">
        <p className="text-base font-medium leading-snug text-primary-800 transition-colors duration-200 group-hover:text-secondary-700">
          {product.name}
        </p>

        <p className="shrink-0 text-sm font-semibold text-primary-600">
          {product.price}
        </p>
      </div>
    </a>
  );
}