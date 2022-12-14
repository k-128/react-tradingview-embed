import React from "react";


declare const TradingView: any;


export type SymbolOverviewWidgetProps = {
  symbols?: any;
  chartOnly?: boolean;
  width?: string | number;
  height?: string | number;
  locale?: string;
  colorTheme?: string;
  gridLineColor?: string;
  trendLineColor?: string;
  fontColor?: string;
  underLineColor?: string;
  isTransparent?: boolean;
  autosize?: boolean;
  container_id?: string;
}

type SymbolOverviewProps = {
  parentStyle?: React.CSSProperties;
  widgetProps?: SymbolOverviewWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const SymbolOverview = (props: SymbolOverviewProps) => {
  const { widgetProps, widgetPropsAny } = props;

  let containerId = "symbol-overview-widget-container";
  if (widgetProps?.container_id) {
    containerId = widgetProps?.container_id;
  }

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        if (typeof TradingView !== "undefined") {
          new TradingView.MediumWidget(
            {
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
              "chartOnly": false,
              "width": "100%",
              "height": 400,
              "locale": "en",
              "colorTheme": "dark",
              "gridLineColor": "#2A2E39",
              "trendLineColor": "#1976D2",
              "fontColor": "#787B86",
              "underLineColor": "rgba(55, 166, 239, 0.15)",
              "isTransparent": false,
              "autosize": false,
              "container_id": containerId,
              ...widgetProps,
              ...widgetPropsAny,
            }
          );
        }
      }
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
  }, [ref, widgetProps, widgetPropsAny, containerId]);

  return <div id={containerId} ref={ref} />;
}

export default SymbolOverview;
