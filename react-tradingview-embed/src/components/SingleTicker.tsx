import React from "react";


export type SingleTickerWidgetProps = {
  symbol?: string;
  width?: string | number;
  colorTheme?: string;
  isTransparent?: boolean;
  locale?: string;
}

type SingleTickerProps = {
  widgetProps?: SingleTickerWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const SingleTicker = (props: SingleTickerProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-single-quote.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "symbol": "BITMEX:XBTUSD",
        "width": 350,
        "colorTheme": "dark",
        "isTransparent": false,
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

export default SingleTicker;
