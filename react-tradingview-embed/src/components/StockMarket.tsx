import React from "react";


export type StockMarketWidgetProps = {
  colorTheme?: string;
  dateRange?: string;
  exchange?: string;
  showChart?: boolean;
  locale?: string;
  largeChartUrl?: string;
  isTransparent?: boolean;
  showSymbolLogo?: boolean;
  width?: string | number;
  height?: string | number;
  plotLineColorGrowing?: string;
  plotLineColorFalling?: string;
  gridLineColor?: string;
  scaleFontColor?: string;
  belowLineFillColorGrowing?: string;
  belowLineFillColorFalling?: string;
  symbolActiveColor?: string;
}

type StockMarketProps = {
  widgetProps?: StockMarketWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const StockMarket = (props: StockMarketProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-hotlists.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "colorTheme": "dark",
        "dateRange": "12M",
        "exchange": "US",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": false,
        "width": "400",
        "height": "600",
        "plotLineColorGrowing": "rgba(25, 118, 210, 1)",
        "plotLineColorFalling": "rgba(25, 118, 210, 1)",
        "gridLineColor": "rgba(42, 46, 57, 1)",
        "scaleFontColor": "rgba(120, 123, 134, 1)",
        "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
        "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
        "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
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

export default StockMarket;
