import React from "react";
import { PropTypes } from "prop-types";


const WIDGET_LINKS = {
  "ADVANCED_CHART": ["Chart", "https://www.tradingview.com/symbols/"],
  "COMPANY_PROFILE": ["Profile", "https://www.tradingview.com/symbols/"],
  "ECONOMIC_CALENDAR": ["Economic Calendar", "https://www.tradingview.com/markets/currencies/economic-calendar/"],
  "FOREX_CROSS_RATES": ["Forex Rates", "https://www.tradingview.com/markets/currencies/forex-cross-rates/"],
  "FOREX_HEATMAP": ["Forex Heat Map", "https://www.tradingview.com/markets/currencies/forex-heat-map/"],
  "FUNDAMENTAL_DATA": ["Fundamental Data", "https://www.tradingview.com/symbols/"],
  "MARKET_DATA": ["Market Data", "https://www.tradingview.com"],
  "MARKET_OVERVIEW": ["Market Data", "https://www.tradingview.com"],
  "MINI_CHART": ["Rates", "https://www.tradingview.com/symbols/"],
  "SCREENER": ["Forex Screener", "https://www.tradingview.com/forex-screener/"],
  "SCREENER_CRYPTOCURRENCY": ["Cryptocurrency Markets", "https://www.tradingview.com/markets/cryptocurrencies/prices-all/"],
  "SYMBOL_INFO": ["Symbol Info", "https://www.tradingview.com/symbols/"],
  "SYMBOL_OVERVIEW": ["Quotes", "https://www.tradingview.com"],
  "STOCK_MARKET": ["Stock Market", "https://www.tradingview.com/markets/stocks-usa/market-movers-gainers/"],
  "TECHNICAL_ANALYSIS": ["Technical Analysis", "https://www.tradingview.com/symbols/NASDAQ-GOOG/technicals/"],
  "TICKER": ["Quotes", "https://www.tradingview.com"],
  "TICKER_SINGLE": ["Rates", "https://www.tradingview.com/symbols/"],
  "TICKER_TAPE": ["Ticker Tape", "https://www.tradingview.com"],
};


const WIDGETS_URLS = {
  "ADVANCED_CHART": "https://s3.tradingview.com/tv.js",
  "COMPANY_PROFILE": "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js",
  "ECONOMIC_CALENDAR": "https://s3.tradingview.com/external-embedding/embed-widget-events.js",
  "FOREX_CROSS_RATES": "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js",
  "FOREX_HEATMAP": "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js",
  "FUNDAMENTAL_DATA": "https://s3.tradingview.com/external-embedding/embed-widget-financials.js",
  "MARKET_DATA": "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",
  "MARKET_OVERVIEW": "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",
  "MINI_CHART": "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js",
  "SCREENER": "https://s3.tradingview.com/external-embedding/embed-widget-screener.js",
  "SCREENER_CRYPTOCURRENCY": "https://s3.tradingview.com/external-embedding/embed-widget-screener.js",
  "SYMBOL_INFO": "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js",
  "SYMBOL_OVERVIEW": "https://s3.tradingview.com/tv.js",
  "STOCK_MARKET": "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",
  "TECHNICAL_ANALYSIS": "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",
  "TICKER": "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",
  "TICKER_SINGLE": "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js",
  "TICKER_TAPE": "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",
};


function buildHtml(widgetType, script=null, id=null, copyrightLink=true) {
  var baseHtml = "<!-- TradingView Widget BEGIN -->";
  baseHtml += `<div class="tradingview-widget-container">`;
  baseHtml += id ? `<div id="${id}"></div>` : "";
  baseHtml += '<div class="tradingview-widget-container__widget"></div>';
  baseHtml += copyrightLink ? (
    `<div class="tradingview-widget-copyright">
      <a href="${WIDGET_LINKS[widgetType][1]}" rel="noopener" target="_blank">
        <span class="blue-text">${WIDGET_LINKS[widgetType][0]}</span>
      </a> by TradingView
    </div>`
  ) : ("");
  baseHtml += `<script type="text/javascript" src="${WIDGETS_URLS[widgetType]}" async>`;
  baseHtml += script ? `${script}</script></div>` : "</script></div>";
  baseHtml += "<!-- TradingView Widget END -->";
  return baseHtml;
}


function getTradingViewObj(widget="widget") {
  /* global TradingView */
  return TradingView[widget];
}


/*
 *
 * Widgets
 */
// Advanced Chart
function widgetAdvancedChart(count, copyrightLink) {
  const widgetHtml = buildHtml(
    "ADVANCED_CHART",
    null,
    `tradingview_AC_${count}`,
    copyrightLink
  );
  return widgetHtml;
}


function widgetAdvancedChartOnload(script, count, widgetConfig={}) {
  const defaultConfigAdvancedChart = {
    "symbol": "NASDAQ:GOOG",
    "timezone": "Etc/UTC",
    "interval": "D",
    "style": "1",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "withdateranges": true,
    "range": "ytd",
    "hide_side_toolbar": false,
    "allow_symbol_change": true,
    "watchlist": false,
    "details": false,
    "hotlist": false,
    "calendar": false,
    "news": false,
    "show_popup_button": true,
    "popup_width": "1000",
    "popup_height": "650",
    "no_referral_id": true,
    "referral_id": "",
    "width": 980,
    "height": 610,
    "colorTheme": "light",
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigAdvancedChart, widgetConfig);
  var {
    symbol, timezone, interval, style, toolbar_bg, enable_publishing,
    withdateranges, range, hide_side_toolbar, allow_symbol_change,
    details, hotlist, calendar,
    show_popup_button,
    popup_width, popup_height, no_referral_id, referral_id,
    width, height, colorTheme, locale, autosize,
    news, studies, watchlist,
  } = config;
  no_referral_id = referral_id === "" ? true : false;
  const refKey = no_referral_id ? "no_referral_id" : "referral_id";
  const refId = no_referral_id ? true: referral_id;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  // onload
  script.onload = function() {
    if (typeof(TradingView) === "undefined") {
      return;
    } else {
      const TV = getTradingViewObj();
      const config = {
        "symbol": symbol,
        "timezone": timezone,
        "interval": interval,
        "style": style,
        "toolbar_bg": toolbar_bg,
        "hide_side_toolbar": hide_side_toolbar,
        "withdateranges": withdateranges,
        "range": range,
        "allow_symbol_change": allow_symbol_change,
        "details": details,
        "hotlist": hotlist,
        "calendar": calendar,
        "news": news,
        "studies": studies,
        "watchlist": watchlist,
        "show_popup_button": show_popup_button,
        "popup_width": popup_width,
        "popup_height": popup_height,
        "width": width,
        "height": height,
        "enable_publishing": enable_publishing,
        "theme": colorTheme,
        "locale": locale,
        "container_id": `tradingview_AC_${count}`
      };
      config[refKey] = refId;
      new TV(config);
    }
  };
}


// Company Profile
function widgetCompanyProfile(widgetConfig={}, copyrightLink) {
  const defaultConfigCompanyProfile = {
    "symbol": "NASDAQ:GOOG",
    "width": 480,
    "height": 650,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigCompanyProfile, widgetConfig);
  var {symbol, width, height, colorTheme, isTransparent, locale, autosize} = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "COMPANY_PROFILE",
    `{
      "symbol": "${symbol}",
      "width": "${width}",
      "height": "${height}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Economic Calander
function widgetEconomicCalendar(widgetConfig={}, copyrightLink) {
  const defaultConfigEconomicCalendar = {
    "width": 510,
    "height": 600,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en",
    "importanceFilter": "-1,0,1",
    "autosize": false
  };
  const config = Object.assign(defaultConfigEconomicCalendar, widgetConfig);
  var {
    width, height, colorTheme, isTransparent, locale, autosize, importanceFilter
  } = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "ECONOMIC_CALENDAR",
    `{
      "width": "${width}",
      "height": "${height}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}",
      "importanceFilter": "${importanceFilter}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Forex Cross Rates
function widgetForexCrossRates(widgetConfig={}, copyrightLink) {
  const defaultConfigForexCrossRates = {
    "currencies": [
      "EUR",
      "USD",
      "JPY",
      "GBP",
      "CHF",
      "AUD",
      "CAD",
      "NZD",
      "CNY"
    ],
    "width": 770,
    "height": 400,
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigForexCrossRates, widgetConfig);
  var {currencies, width, height, locale, autosize} = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "FOREX_CROSS_RATES",
    `{
      "currencies": ${JSON.stringify(currencies)},
      "width": "${width}",
      "height": "${height}",
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Forex Heatmap
function widgetForexHeatmap(widgetConfig={}, copyrightLink) {
  const defaultConfigForexHeatmap = {
    "currencies": [
      "EUR",
      "USD",
      "JPY",
      "GBP",
      "CHF",
      "AUD",
      "CAD",
      "NZD",
      "CNY"
    ],
    "width": 770,
    "height": 400,
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigForexHeatmap, widgetConfig);
  var {currencies, width, height, locale, autosize} = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "FOREX_HEATMAP",
    `{
      "currencies": ${JSON.stringify(currencies)},
      "width": "${width}",
      "height": "${height}",
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Fundamental Data
function widgetFundamentalData(widgetConfig={}, copyrightLink) {
  const defaultConfigFundamentalData = {
    "symbol": "NASDAQ:GOOG",
    "largeChartUrl": "",
    "width": 480,
    "height": 830,
    "colorTheme": "light",
    "isTransparent": false,
    "displayMode": "regular",
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigFundamentalData, widgetConfig);
  var {
    symbol, largeChartUrl, width, height, colorTheme,
    isTransparent, displayMode, locale, autosize
  } = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "FUNDAMENTAL_DATA",
    `{
      "symbol": "${symbol}",
      "largeChartUrl": "${largeChartUrl}",
      "width": "${width}",
      "height": "${height}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "displayMode": "${displayMode}",
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Market Data
function widgetMarketData(widgetConfig={}, copyrightLink) {
  const defaultConfigMarketData = {
    "symbolsGroups": [
      {
        "originalName": "Indices",
        "symbols": [
          {
            "displayName": "S&P 500",
            "name": "OANDA:SPX500USD"
          },
          {
            "displayName": "Nasdaq 100",
            "name": "OANDA:NAS100USD"
          },
          {
            "displayName": "Dow 30",
            "name": "FOREXCOM:DJI"
          },
          {
            "displayName": "Nikkei 225",
            "name": "INDEX:NKY"
          },
          {
            "displayName": "DAX Index",
            "name": "INDEX:DEU30"
          },
          {
            "displayName": "FTSE 100",
            "name": "OANDA:UK100GBP"
          }
        ],
        "name": "Indices"
      },
      {
        "originalName": "Commodities",
        "symbols": [
          {
            "displayName": "E-Mini S&P",
            "name": "CME_MINI:ES1!"
          },
          {
            "displayName": "Euro",
            "name": "CME:6E1!"
          },
          {
            "displayName": "Gold",
            "name": "COMEX:GC1!"
          },
          {
            "displayName": "Crude Oil",
            "name": "NYMEX:CL1!"
          },
          {
            "displayName": "Natural Gas",
            "name": "NYMEX:NG1!"
          },
          {
            "displayName": "Corn",
            "name": "CBOT:ZC1!"
          }
        ],
        "name": "Commodities"
      },
      {
        "originalName": "Bonds",
        "symbols": [
          {
            "displayName": "Eurodollar",
            "name": "CME:GE1!"
          },
          {
            "displayName": "T-Bond",
            "name": "CBOT:ZB1!"
          },
          {
            "displayName": "Ultra T-Bond",
            "name": "CBOT:UB1!"
          },
          {
            "displayName": "Euro Bund",
            "name": "EUREX:FGBL1!"
          },
          {
            "displayName": "Euro BTP",
            "name": "EUREX:FBTP1!"
          },
          {
            "displayName": "Euro BOBL",
            "name": "EUREX:FGBM1!"
          }
        ],
        "name": "Bonds"
      },
      {
        "originalName": "Forex",
        "symbols": [
          {
            "name": "FX:EURUSD"
          },
          {
            "name": "FX:GBPUSD"
          },
          {
            "name": "FX:USDJPY"
          },
          {
            "name": "FX:USDCHF"
          },
          {
            "name": "FX:AUDUSD"
          },
          {
            "name": "FX:USDCAD"
          }
        ],
        "name": "Forex"
      }
    ],
    "largeChartUrl": "",
    "width": 770,
    "height": 450,
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigMarketData, widgetConfig);
  var {
    symbolsGroups, largeChartUrl, width, height, locale, autosize} = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "MARKET_DATA",
    `{
      "symbolsGroups": ${JSON.stringify(symbolsGroups)},
      "largeChartUrl": "${largeChartUrl}",
      "locale": "${locale}",
      "width": "${width}",
      "height": "${height}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Market Overview
function widgetMarketOverview(widgetConfig={}, copyrightLink) {
  const defaultConfigMarketOverview = {
    "tabs": [
      {
        "title": "Indices",
        "symbols": [
          {
            "s": "OANDA:SPX500USD",
            "d": "S&P 500"
          },
          {
            "s": "OANDA:NAS100USD",
            "d": "Nasdaq 100"
          },
          {
            "s": "FOREXCOM:DJI",
            "d": "Dow 30"
          },
          {
            "s": "INDEX:NKY",
            "d": "Nikkei 225"
          },
          {
            "s": "INDEX:DEU30",
            "d": "DAX Index"
          },
          {
            "s": "OANDA:UK100GBP",
            "d": "FTSE 100"
          }
        ],
        "originalTitle": "Indices"
      },
      {
        "title": "Commodities",
        "symbols": [
          {
            "s": "CME_MINI:ES1!",
            "d": "E-Mini S&P"
          },
          {
            "s": "CME:6E1!",
            "d": "Euro"
          },
          {
            "s": "COMEX:GC1!",
            "d": "Gold"
          },
          {
            "s": "NYMEX:CL1!",
            "d": "Crude Oil"
          },
          {
            "s": "NYMEX:NG1!",
            "d": "Natural Gas"
          },
          {
            "s": "CBOT:ZC1!",
            "d": "Corn"
          }
        ],
        "originalTitle": "Commodities"
      },
      {
        "title": "Bonds",
        "symbols": [
          {
            "s": "CME:GE1!",
            "d": "Eurodollar"
          },
          {
            "s": "CBOT:ZB1!",
            "d": "T-Bond"
          },
          {
            "s": "CBOT:UB1!",
            "d": "Ultra T-Bond"
          },
          {
            "s": "EUREX:FGBL1!",
            "d": "Euro Bund"
          },
          {
            "s": "EUREX:FBTP1!",
            "d": "Euro BTP"
          },
          {
            "s": "EUREX:FGBM1!",
            "d": "Euro BOBL"
          }
        ],
        "originalTitle": "Bonds"
      },
      {
        "title": "Forex",
        "symbols": [
          {
            "s": "FX:EURUSD"
          },
          {
            "s": "FX:GBPUSD"
          },
          {
            "s": "FX:USDJPY"
          },
          {
            "s": "FX:USDCHF"
          },
          {
            "s": "FX:AUDUSD"
          },
          {
            "s": "FX:USDCAD"
          }
        ],
        "originalTitle": "Forex"
      }
    ],
    "dateRange": "12m",
    "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
    "plotLineColorFalling": "rgba(33, 150, 243, 1)",
    "gridLineColor": "rgba(233, 233, 234, 1)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
    "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
    "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
    "showChart": true,
    "largeChartUrl": "",
    "width": 400,
    "height": 660,
    "colorTheme": "light",
    "isTransparent": false,
    "displayMode": "regular",
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigMarketOverview, widgetConfig);
  var {
    tabs, dateRange, plotLineColorGrowing, plotLineColorFalling,
    gridLineColor, scaleFontColor, belowLineFillColorGrowing,
    belowLineFillColorFalling, symbolActiveColor, showChart,
    largeChartUrl, width, height, colorTheme,
    isTransparent, locale, autosize
  } = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "MARKET_OVERVIEW",
    `{
      "tabs": ${JSON.stringify(tabs)},
      "dateRange": "${dateRange}",
      "plotLineColorGrowing": "${plotLineColorGrowing}",
      "plotLineColorFalling": "${plotLineColorFalling}",
      "gridLineColor": "${gridLineColor}",
      "scaleFontColor": "${scaleFontColor}",
      "belowLineFillColorGrowing": "${belowLineFillColorGrowing}",
      "belowLineFillColorFalling": "${belowLineFillColorFalling}",
      "symbolActiveColor": "${symbolActiveColor}",
      "showChart": ${showChart},
      "largeChartUrl": "${largeChartUrl}",
      "width": "${width}",
      "height": "${height}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Mini Chart
function widgetMiniChart(widgetConfig={}, copyrightLink) {
  const defaultConfigMiniChart = {
    "symbol": "BITMEX:XBTUSD",
    "dateRange": "12m",
    "trendLineColor": "#37a6ef",
    "underLineColor": "rgba(55, 166, 239, 0.15)",
    "largeChartUrl": "",
    "width": 350,
    "height": 220,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigMiniChart, widgetConfig);
  var {
    symbol, dateRange, trendLineColor, underLineColor, largeChartUrl,
    width, height, colorTheme, isTransparent, locale, autosize
  } = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  if (colorTheme === "dark") {
    underLineColor = "rgba(55, 166, 239, 0.15)";
  }

  const widgetHtml = buildHtml(
    "MINI_CHART",
    `{
      "symbol": "${symbol}",
      "dateRange": "${dateRange}",
      "trendLineColor": "${trendLineColor}",
      "underLineColor": "${underLineColor}",
      "largeChartUrl": "${largeChartUrl}",
      "width": "${width}",
      "height": "${height}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Screener
function widgetScreener(widgetConfig={}, copyrightLink) {
  const defaultConfigScreener = {
    "defaultColumn": "overview",
    "defaultScreen": "general",
    "market": "forex",
    "showToolbar": true,
    "largeChartUrl": "",
    "width": 1100,
    "height": 512,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigScreener, widgetConfig);
  var {
    defaultColumn, defaultScreen, market, showToolbar, largeChartUrl,
    width, height, colorTheme, isTransparent, locale, autosize
  } = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "SCREENER",
    `{
      "defaultColumn": "${defaultColumn}",
      "defaultScreen": "${defaultScreen}",
      "market": "${market}",
      "showToolbar": ${showToolbar},
      "largeChartUrl": "${largeChartUrl}",
      "width": "${width}",
      "height": "${height}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Screener Cryptocurrency
function widgetScreenerCryptocurrrency(widgetConfig={}, copyrightLink) {
  const defaultConfigScreenerCryptocurrrency = {
    "defaultColumn": "overview",
    "screener_type": "crypto_mkt",
    "displayCurrency": "BTC",
    "width": 1000,
    "height": 490,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigScreenerCryptocurrrency, widgetConfig);
  var {
    defaultColumn, screener_type, displayCurrency, width, height, colorTheme,
    isTransparent, locale, autosize
  } = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "SCREENER_CRYPTOCURRENCY",
    `{
      "defaultColumn": "${defaultColumn}",
      "screener_type": "${screener_type}",
      "displayCurrency": "${displayCurrency}",
      "width": "${width}",
      "height": "${height}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Symbol Info
function widgetSymbolInfo(widgetConfig={}, copyrightLink) {
  const defaultConfigSymbolInfo = {
    "symbol": "BITMEX:XBTUSD",
    "width": 1000,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en"
  };
  const config = Object.assign(defaultConfigSymbolInfo, widgetConfig);
  const {symbol, width, colorTheme, isTransparent, locale} = config;
  const widgetHtml = buildHtml(
    "SYMBOL_INFO",
    `{
      "symbol": "${symbol}",
      "width": "${width}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Symbol Overview
function widgetSymbolOverview(count, copyrightLink) {
  const widgetHtml = buildHtml(
    "SYMBOL_OVERVIEW",
    null,
    `tradingview_SO_${count}`,
    copyrightLink
  );
  return widgetHtml;
}


function widgetSymbolOverviewOnload(script, count, widgetConfig={}) {
  const defaultConfigSymbolOverview = {
    "symbols": [
      [
        "Apple",
        "AAPL"
      ],
      [
        "Google",
        "GOOGL"
      ],
      [
        "Microsoft",
        "MSFT"
      ]
    ],
    "greyText": "Quotes by",
    "gridLineColor": "#e9e9ea",
    "fontColor": "#83888D",
    "underLineColor": "#dbeffb",
    "trendLineColor": "#4bafe9",
    "width": "1000",
    "height": "400",
    "locale": "en",
    "chartOnly": false,
    "autosize": false
  };
  const config = Object.assign(defaultConfigSymbolOverview, widgetConfig);
  var {
    symbols, greyText, gridLineColor, fontColor, underLineColor,
    trendLineColor, width, height, locale, chartOnly, autosize
  } = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  // onload
  script.onload = function() {
    if (typeof(TradingView) === "undefined") {
      return;
    } else {
      const TV = getTradingViewObj("MediumWidget");
      const config = {
        "symbols": symbols,
        "greyText": greyText,
        "gridLineColor": gridLineColor,
        "fontColor": fontColor,
        "underLineColor": underLineColor,
        "trendLineColor": trendLineColor,
        "width": width,
        "height": height,
        "locale": locale,
        "chartOnly": chartOnly,
        "container_id": `tradingview_SO_${count}`,
      };
      new TV(config);
    }
  }
}


// Stock Market
function widgetStockMarket(widgetConfig={}, copyrightLink) {
  const defaultConfigStockMarket = {
    "dateRange": "12m",
    "exchange": "US",
    "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
    "plotLineColorFalling": "rgba(33, 150, 243, 1)",
    "gridLineColor": "rgba(240, 243, 250, 1)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
    "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
    "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
    "showChart": true,
    "largeChartUrl": "",
    "width": "400",
    "height": "600",
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en",
  };
  const config = Object.assign(defaultConfigStockMarket, widgetConfig);
  var {
    dateRange, exchange, plotLineColorGrowing, plotLineColorFalling,
    gridLineColor, scaleFontColor, belowLineFillColorGrowing,
    belowLineFillColorFalling, symbolActiveColor, showChart,
    largeChartUrl, width, height, colorTheme, isTransparent, locale, autosize
  } = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  if (colorTheme === "dark") {
    plotLineColorGrowing = "rgba(25, 118, 210, 1)";
    plotLineColorFalling = "rgba(25, 118, 210, 1)";
    gridLineColor = "rgba(42, 46, 57, 1)";
  }
  const widgetHtml = buildHtml(
    "STOCK_MARKET",
    `{
      "dateRange": "${dateRange}",
      "exchange": "${exchange}",
      "plotLineColorGrowing": "${plotLineColorGrowing}",
      "plotLineColorFalling": "${plotLineColorFalling}",
      "gridLineColor": "${gridLineColor}",
      "scaleFontColor": "${scaleFontColor}",
      "belowLineFillColorGrowing": "${belowLineFillColorGrowing}",
      "belowLineFillColorFalling": "${belowLineFillColorFalling}",
      "symbolActiveColor": "${symbolActiveColor}",
      "showChart": ${showChart},
      "largeChartUrl": "${largeChartUrl}",
      "width": "${width}",
      "height": "${height}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Technical Analysis
function widgetTechnicalAnalysis(widgetConfig={}, copyrightLink) {
  const defaultConfigTechnicalAnalysis = {
    "symbol": "BTCUSD",
    "showIntervalTabs": true,
    "interval": "1m",
    "largeChartUrl": "",
    "width": "425",
    "height": "450",
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en",
    "autosize": false
  };
  const config = Object.assign(defaultConfigTechnicalAnalysis, widgetConfig);
  var {
    symbol, showIntervalTabs, interval, largeChartUrl, width, height,
    colorTheme, isTransparent, locale, autosize,
  } = config;
  if (autosize) {
    width = "100%";
    height = "100%";
  }
  const widgetHtml = buildHtml(
    "TECHNICAL_ANALYSIS",
    `{
      "symbol": "${symbol}",
      "showIntervalTabs": ${showIntervalTabs},
      "interval": "${interval}",
      "largeChartUrl": "${largeChartUrl}",
      "width": "${width}",
      "height": "${height}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Ticker
function widgetTicker(widgetConfig={}, copyrightLink) {
  const defaultConfigTicker = {
    "symbols": [
      {
        "title": "XBT/USD",
        "proName": "BITMEX:XBTUSD"
      },
      {
        "title": "BTC/USD",
        "proName": "BITSTAMP:BTCUSD"
      },
      {
        "title": "ETH/BTC",
        "proName": "BITSTAMP:ETHBTC"
      }
    ],
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en"
  };
  const config = Object.assign(defaultConfigTicker, widgetConfig);
  const {symbols, colorTheme, isTransparent, locale} = config;
  const widgetHtml = buildHtml(
    "TICKER",
    `{
      "symbols": ${JSON.stringify(symbols)},
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Ticker Single
function widgetTickerSingle(widgetConfig={}, copyrightLink) {
  const defaultConfigTickerSingle = {
    "symbol": "BITMEX:XBTUSD",
    "width": 350,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "en"
  };
  const config = Object.assign(defaultConfigTickerSingle, widgetConfig);
  const {symbol, width, colorTheme, isTransparent, locale} = config;
  const widgetHtml = buildHtml(
    "TICKER_SINGLE",
    `{
      "symbol": "${symbol}",
      "width": "${width}",
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


// Ticker Tape
function widgetTickerTape(widgetConfig={}, copyrightLink) {
  const defaultConfigTickerTape = {
    "symbols": [
      {
        "title": "XBT/USD",
        "proName": "BITMEX:XBTUSD"
      },
      {
        "title": "BTC/USD",
        "proName": "BITSTAMP:BTCUSD"
      },
      {
        "title": "ETH/BTC",
        "proName": "BITSTAMP:ETHBTC"
      }
    ],
    "colorTheme": "light",
    "isTransparent": false,
    "displayMode": "adaptive",
    "locale": "en"
  };
  const config = Object.assign(defaultConfigTickerTape, widgetConfig);
  const {symbols, colorTheme, isTransparent, displayMode, locale} = config;
  const widgetHtml = buildHtml(
    "TICKER_TAPE",
    `{
      "symbols": ${JSON.stringify(symbols)},
      "colorTheme": "${colorTheme}",
      "isTransparent": ${isTransparent},
      "displayMode": "${displayMode}",
      "locale": "${locale}"
    }`,
    null,
    copyrightLink
  );
  return widgetHtml;
}


/*
 *
 * React Component
 */
const widgetType = {
  ADVANCED_CHART: "ADVANCED_CHART",
  COMPANY_PROFILE: "COMPANY_PROFILE",
  ECONOMIC_CALENDAR: "ECONOMIC_CALENDAR",
  FOREX_CROSS_RATES: "FOREX_CROSS_RATES",
  FOREX_HEATMAP: "FOREX_HEATMAP",
  FUNDAMENTAL_DATA: "FUNDAMENTAL_DATA",
  MARKET_DATA: "MARKET_DATA",
  MARKET_OVERVIEW: "MARKET_OVERVIEW",
  MINI_CHART: "MINI_CHART",
  SCREENER: "SCREENER",
  SCREENER_CRYPTOCURRENCY: "SCREENER_CRYPTOCURRENCY",
  SYMBOL_INFO: "SYMBOL_INFO",
  SYMBOL_OVERVIEW: "SYMBOL_OVERVIEW",
  STOCK_MARKET: "STOCK_MARKET",
  TECHNICAL_ANALYSIS: "TECHNICAL_ANALYSIS",
  TICKER: "TICKER",
  TICKER_SINGLE: "TICKER_SINGLE",
  TICKER_TAPE: "TICKER_TAPE",
};


const WIDGETS_HTML = {
  "ADVANCED_CHART": widgetAdvancedChart,
  "COMPANY_PROFILE": widgetCompanyProfile,
  "ECONOMIC_CALENDAR": widgetEconomicCalendar,
  "FOREX_CROSS_RATES": widgetForexCrossRates,
  "FOREX_HEATMAP": widgetForexHeatmap,
  "FUNDAMENTAL_DATA": widgetFundamentalData,
  "MARKET_DATA": widgetMarketData,
  "MARKET_OVERVIEW": widgetMarketOverview,
  "MINI_CHART": widgetMiniChart,
  "SCREENER": widgetScreener,
  "SCREENER_CRYPTOCURRENCY": widgetScreenerCryptocurrrency,
  "SYMBOL_INFO": widgetSymbolInfo,
  "SYMBOL_OVERVIEW": widgetSymbolOverview,
  "STOCK_MARKET": widgetStockMarket,
  "TECHNICAL_ANALYSIS": widgetTechnicalAnalysis,
  "TICKER": widgetTicker,
  "TICKER_SINGLE": widgetTickerSingle,
  "TICKER_TAPE": widgetTickerTape,
};


const ONLOAD = {
  "ADVANCED_CHART": widgetAdvancedChartOnload,
  "SYMBOL_OVERVIEW": widgetSymbolOverviewOnload
};


class TradingViewEmbed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widget: {
        id: `${props.widgetType}_1`,
        html: null,
      }
    };
  }

  componentDidMount() {
    this.setEmbed();
  }

  setEmbed() {
    const widgetType = this.props.widgetType;
    const widgetConfig = this.props.widgetConfig;
    const elems = document.getElementsByClassName(widgetType);
    const widgetCount = elems.length + 1;
    // Add script
    var script = document.createElement("script");
    script.src = WIDGETS_URLS[this.props.widgetType];
    var scriptDiv = document.getElementById(this.state.widget.id);
    scriptDiv.className = widgetType;
    scriptDiv.append(script);
    // Build html
    var html;
    if (widgetType === "ADVANCED_CHART" || widgetType === "SYMBOL_OVERVIEW") {
      html = WIDGETS_HTML[widgetType](widgetCount, this.props.copyrightLink);
      ONLOAD[widgetType](script, widgetCount, widgetConfig);
    } else {
      html = WIDGETS_HTML[widgetType](widgetConfig, this.props.copyrightLink);
    }
    // Update states
    let widget = this.state.widget;
    widget["id"] = `${widgetType}_${widgetCount}`;
    widget["html"] = html;
    this.setState({widget: widget});
  }

  render() {
    return (
      <div
        id={this.state.widget.id}
        dangerouslySetInnerHTML={{__html: this.state.widget.html}}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    );
  }
}

TradingViewEmbed.propTypes = {
  widgetType: PropTypes.oneOf([
    "ADVANCED_CHART",
    "COMPANY_PROFILE",
    "ECONOMIC_CALENDAR",
    "FOREX_CROSS_RATES",
    "FOREX_HEATMAP",
    "FUNDAMENTAL_DATA",
    "MARKET_DATA",
    "MARKET_OVERVIEW",
    "MINI_CHART",
    "SCREENER",
    "SCREENER_CRYPTOCURRENCY",
    "SYMBOL_INFO",
    "SYMBOL_OVERVIEW",
    "STOCK_MARKET",
    "TECHNICAL_ANALYSIS",
    "TICKER",
    "TICKER_SINGLE",
    "TICKER_TAPE"
  ]).isRequired,
  widgetConfig: PropTypes.object,
  copyrightLink: PropTypes.bool
};


export { TradingViewEmbed, widgetType };
