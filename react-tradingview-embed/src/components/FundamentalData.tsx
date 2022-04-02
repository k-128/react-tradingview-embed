import React from "react";


export type FundamentalDataWidgetProps = {
  symbol?: string;
  colorTheme?: string;
  isTransparent?: boolean;
  largeChartUrl?: string;
  displayMode?: string;
  width?: string | number;
  height?: string | number;
  locale?: string;
}

type FundamentalDataProps = {
  widgetProps?: FundamentalDataWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const FundamentalData = (props: FundamentalDataProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-financials.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "symbol": "NASDAQ:NVDA",
        "colorTheme": "dark",
        "isTransparent": false,
        "largeChartUrl": "",
        "displayMode": "regular",
        "width": 480,
        "height": 830,
        "locale": "en",
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

export default FundamentalData;
