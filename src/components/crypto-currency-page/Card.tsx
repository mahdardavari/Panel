import { FC, memo } from "react";
import { getPriceChangeColor } from "src/utility/getPriceChangeColor";

interface CardProps {
  c: string; // Last price
  s: string; // Symbol
  P: string; // Price change percent
}

const Card: FC<CardProps> = ({ s, c, P }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full max-w-6xl">
        <div className="flex items-center p-2 bg-gray-900 hover:bg-gray-800 text-white">
          <div className="flex-grow flex flex-col ml-4">
            <div className="flex items-center justify-between">
              <span>{s}</span>
              <span className="text-sm font-bold">{c}</span>
            </div>

            <span
              className={`${getPriceChangeColor(
                parseInt(P)
              )} text-sm font-semibold ml-2`}
            >
              {P}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
