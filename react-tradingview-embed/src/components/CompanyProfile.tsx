import React from "react";


export type CompanyProfileWidgetProps = {
  symbol?: string;
  width?: string | number;
  height?: string | number;
  colorTheme?: string;
  isTransparent?: boolean;
  locale?: string;
}

type CompanyProfileProps = {
  parentStyle?: React.CSSProperties;
  widgetProps?: CompanyProfileWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const CompanyProfile = (props: CompanyProfileProps) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref: {current: HTMLDivElement | null} = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/"
                    + "embed-widget-symbol-profile.js";

      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "symbol": "NASDAQ:NVDA",
        "width": 480,
        "height": 650,
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

  return <div style={props.parentStyle} ref={ref} />;
}

export default CompanyProfile;
