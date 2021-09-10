// Dependencies
import { ReactElement, FC } from "react";

// Interfaces
import ProductProps from "./interfaces"

export const Product: FC<ProductProps> = ({ name, picture, price, children}: ProductProps): ReactElement => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <img
        className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
        src={picture} alt={name}
      />
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{name}</h3>
      <p className="leading-relaxed text-base">{price}</p>
      <div className="my-4 text-center w-full">
        {children}
      </div>
    </div>
  )
}
