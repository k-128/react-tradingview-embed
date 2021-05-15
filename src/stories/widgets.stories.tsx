import React from "react";
import { Story } from "@storybook/react";

import {
  AdvancedChart,
  CompanyProfile,
  CryptocurrencyMarket,
  EconomicCalendar,
  ForexCrossRates,
  ForexHeatMap,
  FundamentalData,
  MarketData,
  MarketOverview,
  MiniChart,
  Screener,
  SingleTicker,
  StockMarket,
  SymbolInfo,
  SymbolOverview,
  TechnicalAnalysis,
  Ticker,
  TickerTape,
  Timeline,
} from "../components";
import README_AdvancedChart from "./AdvancedChart.md";


const Widgets = (props: {widget: React.ReactNode}) => <>{props.widget}</>;
const Template: Story<React.ComponentProps<typeof Widgets>> = (p) => {
  return <Widgets {...p} />
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {title: "Widgets", component: Widgets};

export const AdvancedChartStory = Template.bind({});
AdvancedChartStory.args = {widget: <AdvancedChart />};
AdvancedChartStory.storyName = "Avanced Chart";
AdvancedChartStory.parameters = {readme: {content: README_AdvancedChart}};

export const CompanyProfileStory = Template.bind({});
CompanyProfileStory.args = {widget: <CompanyProfile />};
CompanyProfileStory.storyName = "Company Profile";

export const CryptocurrencyMarketStory = Template.bind({});
CryptocurrencyMarketStory.args = {widget: <CryptocurrencyMarket />};
CryptocurrencyMarketStory.storyName = "Cryptocurrency Market";

export const EconomicCalendarStory = Template.bind({});
EconomicCalendarStory.args = {widget: <EconomicCalendar />};
EconomicCalendarStory.storyName = "Economic Calendar";

export const ForexCrossRatesStory = Template.bind({});
ForexCrossRatesStory.args = {widget: <ForexCrossRates />};
ForexCrossRatesStory.storyName = "Forex Cross Rates";

export const ForexHeatMapStory = Template.bind({});
ForexHeatMapStory.args = {widget: <ForexHeatMap />};
ForexHeatMapStory.storyName = "Forex Heat Map";

export const FundamentalDataStory = Template.bind({});
FundamentalDataStory.args = {widget: <FundamentalData />};
FundamentalDataStory.storyName = "Fundamental Data";

export const MarketDataStory = Template.bind({});
MarketDataStory.args = {widget: <MarketData />};
MarketDataStory.storyName = "Market Data";

export const MarketOverviewStory = Template.bind({});
MarketOverviewStory.args = {widget: <MarketOverview />};
MarketOverviewStory.storyName = "Market Overview";

export const MiniChartStory = Template.bind({});
MiniChartStory.args = {widget: <MiniChart />};
MiniChartStory.storyName = "Mini Chart";

export const ScreenerStory = Template.bind({});
ScreenerStory.args = {widget: <Screener />};
ScreenerStory.storyName = "Screener";

export const SingleTickerStory = Template.bind({});
SingleTickerStory.args = {widget: <SingleTicker />};
SingleTickerStory.storyName = "Single Ticker";

export const StockMarketStory = Template.bind({});
StockMarketStory.args = {widget: <StockMarket />};
StockMarketStory.storyName = "Stock Market";

export const SymbolInfoStory = Template.bind({});
SymbolInfoStory.args = {widget: <SymbolInfo />};
SymbolInfoStory.storyName = "Symbol Info";

export const SymbolOverviewStory = Template.bind({});
SymbolOverviewStory.args = {widget: <SymbolOverview />};
SymbolOverviewStory.storyName = "Symbol Overview";

export const TechnicalAnalysisStory = Template.bind({});
TechnicalAnalysisStory.args = {widget: <TechnicalAnalysis />};
TechnicalAnalysisStory.storyName = "Technical Analysis";

export const TickerStory = Template.bind({});
TickerStory.args = {widget: <Ticker />};
TickerStory.storyName = "Ticker";

export const TickerTapeStory = Template.bind({});
TickerTapeStory.args = {widget: <TickerTape />};
TickerTapeStory.storyName = "Ticker Tape";

export const TimelineStory = Template.bind({});
TimelineStory.args = {widget: <Timeline />};
TimelineStory.storyName = "Timeline";