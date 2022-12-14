import React from "react";


export type ScreenerWidgetProps = {
  width?: string | number;
  height?: string | number;
  defaultColumn?: string;
  defaultScreen?: string;
  market?: string;
  showToolbar?: boolean;
  colorTheme?: string;
  locale?: string;
}

type ScreenerProps = {
  parentStyle?: React.CSSProperties;
  widgetProps?: ScreenerWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const Screener = (props: ScreenerProps) => {
  const { widgetProps , widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-screener.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "width": 1100,
        "height": 512,
        "defaultColumn": "overview",
        "defaultScreen": "general",
        "market": "forex",
        "showToolbar": true,
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

export default Screener;
