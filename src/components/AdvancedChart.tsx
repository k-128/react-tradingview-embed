import React from "react";


declare const TradingView: any;


export type AdvancedChartWidgetProps = {
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  symbol?: string;
  interval?: string;
  range?: string;
  timezone?: string;
  theme?: string;
  style?: string;
  locale?: string;
  toolbar_bg?: string;
  hide_top_toolbar?: boolean;
  hide_side_toolbar?: boolean;
  withdateranges?: boolean;
  save_image?: boolean;
  enable_publishing?: boolean;
  allow_symbol_change?: boolean;
  container_id?: string;
}

type AdvancedChartProps = {
  widgetProps?: AdvancedChartWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const AdvancedChart = (props: AdvancedChartProps) => {
  const { widgetProps, widgetPropsAny } = props;

  let containerId = "advanced-chart-widget-container";
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
          new TradingView.widget(
            {
              "width": "100%",
              "height": "640px",
              "symbol": "BITMEX:XBTUSD",
              "interval": "240",
              "range": "1M",
              "timezone": "Etc/UTC",
              "theme": "dark",
              "style": "9",
              "locale": "en",
              "toolbar_bg": "rgba(0, 0, 0, 0.8)",
              "hide_top_toolbar": false,
              "hide_side_toolbar": false,
              "withdateranges": true,
              "save_image": true,
              "enable_publishing": false,
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

export default AdvancedChart;
