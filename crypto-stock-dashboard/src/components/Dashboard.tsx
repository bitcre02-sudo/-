import { RefreshCw, TrendingUp, Activity } from 'lucide-react';
import { useCryptoData } from '../hooks/useCryptoData';
import { PriceCard } from './PriceCard';
import { MiniChart } from './MiniChart';

export const Dashboard = () => {
  const { data, loading, error, lastUpdate, refetch } = useCryptoData(30000);

  if (loading && data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading crypto data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-effect rounded-2xl p-8 max-w-md">
          <p className="text-red-500 text-xl mb-4">Error loading data</p>
          <p className="text-gray-400 mb-6">{error.message}</p>
          <button
            onClick={refetch}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="glass-effect rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center gap-3">
                <TrendingUp className="text-blue-500" />
                Crypto Dashboard
              </h1>
              <p className="text-gray-400 text-lg">
                Real-time cryptocurrency prices and trends
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">Last updated</p>
                <p className="text-white font-semibold">
                  {lastUpdate?.toLocaleTimeString()}
                </p>
              </div>
              <button
                onClick={refetch}
                disabled={loading}
                className="p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white rounded-xl transition-all duration-300 hover:scale-110 disabled:scale-100"
                title="Refresh data"
              >
                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-4 border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="text-blue-400 w-5 h-5" />
                <span className="text-gray-300 text-sm">Total Assets</span>
              </div>
              <p className="text-2xl font-bold text-white">{data.length}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-4 border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-green-400 w-5 h-5" />
                <span className="text-gray-300 text-sm">Gainers</span>
              </div>
              <p className="text-2xl font-bold text-white">
                {data.filter(c => c.price_change_percentage_24h > 0).length}
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl p-4 border border-red-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="text-red-400 w-5 h-5" />
                <span className="text-gray-300 text-sm">Losers</span>
              </div>
              <p className="text-2xl font-bold text-white">
                {data.filter(c => c.price_change_percentage_24h < 0).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((crypto) => (
            <div key={crypto.id}>
              <PriceCard crypto={crypto} />
              {crypto.sparkline_in_7d && (
                <div className="mt-2 glass-effect rounded-xl p-3">
                  <p className="text-gray-400 text-xs mb-2">7 Day Trend</p>
                  <MiniChart
                    data={crypto.sparkline_in_7d.price}
                    color={crypto.price_change_percentage_24h >= 0 ? '#10b981' : '#ef4444'}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Powered by CoinGecko API • Updates every 30 seconds
        </p>
      </div>
    </div>
  );
};
