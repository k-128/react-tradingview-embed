import React from "react";


export type TechnicalAnalysisWidgetProps = {
  interval?: string;
  width?: string | number;
  isTransparent?: boolean;
  height?: string | number;
  symbol?: string;
  showIntervalTabs?: boolean;
  locale?: string;
  colorTheme?: string;
}

type TechnicalAnalysisProps = {
  parentStyle?: React.CSSProperties;
  widgetProps?: TechnicalAnalysisWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const TechnicalAnalysis = (props: TechnicalAnalysisProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-technical-analysis.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "symbol": "NASDAQ:NVDA",
        "showIntervalTabs": true,
        "interval": "1m",
        "width": 425,
        "height": 450,
        "isTransparent": false,
        "locale": "en",
        "colorTheme": "dark",
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

export default TechnicalAnalysis;
