import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatPrice, formatPercent } from '../utils/api';
import type { CryptoData } from '../types';

interface PriceCardProps {
  crypto: CryptoData;
}

export const PriceCard = ({ crypto }: PriceCardProps) => {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={crypto.image}
            alt={crypto.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-white font-bold text-lg">{crypto.name}</h3>
            <p className="text-gray-400 text-sm uppercase">{crypto.symbol}</p>
          </div>
        </div>
        <div className={`p-2 rounded-full ${isPositive ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
          {isPositive ? (
            <TrendingUp className="text-green-500 w-5 h-5" />
          ) : (
            <TrendingDown className="text-red-500 w-5 h-5" />
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-3xl font-bold text-white">
            {formatPrice(crypto.current_price)}
          </p>
          <p className={`text-lg font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {formatPercent(crypto.price_change_percentage_24h)}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-700/50 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">24h High</span>
            <span className="text-white font-semibold">{formatPrice(crypto.high_24h)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">24h Low</span>
            <span className="text-white font-semibold">{formatPrice(crypto.low_24h)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
