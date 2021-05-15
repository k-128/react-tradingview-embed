import React from "react";


export type EconomicCalendarWidgetProps = {
  colorTheme?: string;
  isTransparent?: boolean;
  width?: string | number;
  height?: string | number;
  locale?: string;
  importanceFilter?: string;
}

type EconomicCalendarProps = {
  widgetProps?: EconomicCalendarWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const EconomicCalendar = (props: EconomicCalendarProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-events.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "colorTheme": "dark",
        "isTransparent": false,
        "width": "510",
        "height": "600",
        "locale": "en",
        "importanceFilter": "-1,0,1",
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

export default EconomicCalendar;
