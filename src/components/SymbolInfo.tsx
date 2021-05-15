import React from "react";


export type SymbolInfoWidgetProps = {
  symbol?: string;
  width?: string | number;
  locale?: string;
  colorTheme?: string;
  isTransparent?: boolean;
}

type SymbolInfoProps = {
  widgetProps?: SymbolInfoWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const SymbolInfo = (props: SymbolInfoProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-symbol-info.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "symbol": "BITMEX:XBTUSD",
        "width": 1000,
        "locale": "en",
        "colorTheme": "dark",
        "isTransparent": false,
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

export default SymbolInfo;
