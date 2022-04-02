import React from "react";


export type MarketDataWidgetProps = {
  width?: string | number;
  height?: string | number;
  showSymbolLogo?: boolean;
  colorTheme?: string;
  isTransparent?: boolean;
  locale?: string;
  symbolsGroups?: any;
}

type MarketDataProps = {
  widgetProps?: MarketDataWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const MarketData = (props: MarketDataProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-market-quotes.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "width": 770,
        "height": 450,
        "showSymbolLogo": true,
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "en",
        "symbolsGroups": [
          {
            "name": "Indices",
            "originalName": "Indices",
            "symbols": [
              {
                "name": "FOREXCOM:SPXUSD",
                "displayName": "S&P 500"
              },
              {
                "name": "FOREXCOM:NSXUSD",
                "displayName": "Nasdaq 100"
              },
              {
                "name": "FOREXCOM:DJI",
                "displayName": "Dow 30"
              },
              {
                "name": "INDEX:NKY",
                "displayName": "Nikkei 225"
              },
              {
                "name": "INDEX:DEU30",
                "displayName": "DAX Index"
              },
              {
                "name": "FOREXCOM:UKXGBP",
                "displayName": "UK 100"
              }
            ]
          },
          {
            "name": "Commodities",
            "originalName": "Commodities",
            "symbols": [
              {
                "name": "CME_MINI:ES1!",
                "displayName": "S&P 500"
              },
              {
                "name": "CME:6E1!",
                "displayName": "Euro"
              },
              {
                "name": "COMEX:GC1!",
                "displayName": "Gold"
              },
              {
                "name": "NYMEX:CL1!",
                "displayName": "Crude Oil"
              },
              {
                "name": "NYMEX:NG1!",
                "displayName": "Natural Gas"
              },
              {
                "name": "CBOT:ZC1!",
                "displayName": "Corn"
              }
            ]
          },
          {
            "name": "Bonds",
            "originalName": "Bonds",
            "symbols": [
              {
                "name": "CME:GE1!",
                "displayName": "Eurodollar"
              },
              {
                "name": "CBOT:ZB1!",
                "displayName": "T-Bond"
              },
              {
                "name": "CBOT:UB1!",
                "displayName": "Ultra T-Bond"
              },
              {
                "name": "EUREX:FGBL1!",
                "displayName": "Euro Bund"
              },
              {
                "name": "EUREX:FBTP1!",
                "displayName": "Euro BTP"
              },
              {
                "name": "EUREX:FGBM1!",
                "displayName": "Euro BOBL"
              }
            ]
          },
          {
            "name": "Forex",
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
            ]
          }
        ],
        ...widgetProps,
        ...widgetPropsAny,
      });

      ref.current.appendChild(script);
      refValue = ref.current;
    }

    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    }
  }, [ref, widgetProps, widgetPropsAny]);

  return <div ref={ref} />;
}

export default MarketData;
