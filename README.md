# React TradingView Embeds
---
- React + TypeScript components for [TradingView Embeds](https://www.tradingview.com/widget/)
- <https://k-128.github.io/react-tradingview-embed/>

<br />

*Usage*
- `npm install --save react-tradingview-embed`

```ts
import { AdvancedChart } from "react-tradingview-embed";

const App = () => <AdvancedChart widgetProps={{"theme": "dark"}} />;
```

<br />

*Missing widget props*
```ts
import { AdvancedChart } from "react-tradingview-widget";

// If widgets props are missing, use widgetPropsAny
const App = () => <AdvancedChart widgetPropsAny={{"newProp": true}} />;
```

> If redeclared, props set in widgetPropsAny will override those in widgetProps.

<br />

*Widget support*
- [x] [AdvancedChart](<https://www.tradingview.com/widget/advanced-chart/>)
- [x] [TechnicalAnalysis](<https://www.tradingview.com/widget/technical-analysis/>)
- [x] [MarketOverview](<https://www.tradingview.com/widget/market-overview/>)
- [x] [MarketData](<https://www.tradingview.com/widget/market-quotes/>)
- [x] [StockMarket](<https://www.tradingview.com/widget/market-movers/>)
- [x] [EconomicCalendar](<https://www.tradingview.com/widget/economic-calendar/>)
- [x] [TickerWidget](<https://www.tradingview.com/widget/ticker/>)
- [x] [TickerTape](<https://www.tradingview.com/widget/ticker-tape/>)
- [x] [SingleTicker](<https://www.tradingview.com/widget/single-ticker/>)
- [x] [MiniChart](<https://www.tradingview.com/widget/mini-chart/>)
- [x] [SymbolOverview](<https://www.tradingview.com/widget/symbol-overview/>)
- [x] [SymbolInfo](<https://www.tradingview.com/widget/symbol-info/>)
- [x] [ForexCrossRates](<https://www.tradingview.com/widget/forex-cross-rates/>)
- [x] [ForexHeatMap](<https://www.tradingview.com/widget/forex-heat-map/>)
- [x] [ScreenerWidget](<https://www.tradingview.com/widget/screener/>)
- [x] [CryptocurrencyMarket](<https://www.tradingview.com/widget/crypto-mkt-screener/>)
- [x] [FundamentalData](<https://www.tradingview.com/widget/fundamental-data/>)
- [x] [CompanyProfile](<https://www.tradingview.com/widget/symbol-profile/>)
- [x] [Timeline](<https://www.tradingview.com/widget/timeline/>)

<br />
