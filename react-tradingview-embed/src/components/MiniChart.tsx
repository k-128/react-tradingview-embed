import React from "react";


export type MiniChartWidgetProps = {
  symbol?: string;
  width?: string | number;
  height?: string | number;
  locale?: string;
  dateRange?: string;
  colorTheme?: string;
  trendLineColor?: string;
  underLineColor?: string;
  isTransparent?: boolean;
  autosize?: boolean;
  largeChartUrl?: string;
}

type MiniChartProps = {
  parentStyle?: React.CSSProperties;
  widgetProps?: MiniChartWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const MiniChart = (props: MiniChartProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-mini-symbol-overview.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "symbol": "BITMEX:XBTUSD",
        "width": 350,
        "height": 220,
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
        "trendLineColor": "#37a6ef",
        "underLineColor": "rgba(55, 166, 239, 0.15)",
        "isTransparent": false,
        "autosize": false,
        "largeChartUrl": "",
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

export default MiniChart;
