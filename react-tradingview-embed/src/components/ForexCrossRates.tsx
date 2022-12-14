import React from "react";


export type ForexCrossRatesWidgetProps = {
  width?: string | number;
  height?: string | number;
  currencies?: string[];
  isTransparent?: boolean;
  colorTheme?: string;
  locale?: string;
}

type ForexCrossRatesProps = {
  parentStyle?: React.CSSProperties;
  widgetProps?: ForexCrossRatesWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const ForexCrossRates = (props: ForexCrossRatesProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-forex-cross-rates.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "width": 770,
        "height": 400,
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
        "isTransparent": false,
        "colorTheme": "dark",
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

  return <div style={props.parentStyle} ref={ref} />;
}

export default ForexCrossRates;
