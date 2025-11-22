export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  sparkline_in_7d?: {
    price: number[];
  };
}

export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
}

export interface HistoricalData {
  timestamp: number;
  price: number;
}

export type AssetType = 'crypto' | 'stock';

export interface Asset {
  type: AssetType;
  symbol: string;
  name: string;
  amount?: number;
}
