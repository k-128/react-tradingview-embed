import React from "react";


export type TimelineWidgetProps = {
  colorTheme?: string;
  isTransparent?: boolean;
  displayMode?: string;
  width?: string | number;
  height?: string | number;
  locale?: string;
}

type TimelineProps = {
  widgetProps?: TimelineWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const Timeline = (props: TimelineProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-timeline.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "colorTheme": "dark",
        "isTransparent": false,
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

export default Timeline;
