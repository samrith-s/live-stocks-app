# Live Stocks App

This application is a demo created using React, Redux and RxJS. The entire CSS for this application is writte in SASS-Lang. This application was bootstrapped using `create-react-app`.

From here on, the application may be referred to as "LSA" or "app" sporadically.

You can [view working application](samrith-s.github.io/live-stocks-app) on all devices, though for mobile phones and tablets, you will have to run the app locally.

To run the app locally use the `npm run start` command and connect to the IP address mentioned in the terminal window to run the application on different devices.

** Note: For the application to work on Chrome and Firefox, you will have to allow Mixed Content. **
To know more about mixed content and how to enable it, follow this <a href="https://kb.iu.edu/d/bdny" target="_blank">link</a>.

## Table of Contents

- [Responsiveness](#responsiveness)
  - [Large Screens](#large-screens)
  - [Laptops](#laptops)
  - [Tablets](#tablets)
  - [Mobile Phones](#mobile-phones)
- [Thought Process](#thought-process)
  - [Color Scheme](#color-scheme)
  - [Pinned Stocks](#pinned-stocks)
  - [Filters](#filters)
  - [Trends](#trends)
  - [Min/Max](#min-max)
- [Improvements and Extensibility](#improvements-and-extensibility)

## Responsiveness
This app has been made completely responsive for all devices. In larger screens and tablets the application restricts itself to a certain max-width for readability and accessibility. On the mobile device, the application takes up the full width of the device and adjusts fonts relevantly to present itself gracefully. The app works on both portrait and landscape mode.

### Large Screens
<img src="https://raw.githubusercontent.com/samrith-s/live-stocks-app/master/screenshots/large_screens.png" alt="Large Screens">

### Laptops
<img src="https://raw.githubusercontent.com/samrith-s/live-stocks-app/master/screenshots/laptop.png" alt="Laptops">

### Tablets
<p align="center">
  <img src="https://raw.githubusercontent.com/samrith-s/live-stocks-app/master/screenshots/tablet.png" alt="Tablet" width="500" style="margin:0 auto;">
</p>

### Mobile Phones
<p align="center">
  <img src="https://raw.githubusercontent.com/samrith-s/live-stocks-app/master/screenshots/mobile.png" alt="Mobile" width="500" style="margin:0 auto;">
</p>

## Thought Process
All of the features present in this app have been weel thought of to make the end-result very usable and improve navigation and experience.

### Color Scheme
The color scheme of this application is a dark and bright pastel contrast. The primary color `$gray-dark` sits on the cool spectrum of colors and is very easy-going on the eye. This ensures that continuous visual interaction with the application does not put a mental drain on the user. Various shades `$gray-light` are used throughout the app to present a sense of uniformity and familiarity.

The `$green` and `$red` colors take up on bright pastel colors which are a perfect constrast to our primary color. These colors are also extremely crucial to the application as they work as change indicators and provide useful information at a glance, whether the price has gone up or gone down.

The `$white` is features rarely across the application. The color is inspired by the Nightlight and has a light and negligible yellow tint to it to make reading less strenuous.

### Pinned Stocks
The pinned stocks feature is a very crucial for this app. Stocks keep changing prices and are a lot in number. This feature allows the user to pin stocks to the top of the page and regardless of how the entire stocks-list is filtered, allows them to quickly check out how their favoured stocks are doing. A quick click on the stock puts it back into the all stocks pile.

Pinned stocks are by default sorted by name and this sorting is not customizable.

### Filters
LSA has a couple of filters to enhance navigation around the application.

The user can filter the stocks by name or price and can order them in the ascending or descending order. By default the stocks are filtered by price and in descending order. These filters only work on the all-stocks list.

The other filter is a switch, which toggles between showing the change in terms of actual price value or percentage value. By default this filter is set to display price value difference instead of percentage.

### Trends
Each stock maintains a history of it's last 10 prices. The trends graph displays over the course of the last 10 price changes, how the stock is performing. Whether it is rising, falling or remaining constant. The graph is observably gradiented from a `$green` to a `$red` to quickly show crests and troughs in its trajectory.

### Min/Max
The insights component for now, only renders the maximum and minimum stock values every reached globally, from the history of stock prices. Since every stock maintains a history of 10 prices, the minimum and maximum values are displayed to let the user know which stocks have recorder the highest and lowest prices among all stocks.

## Improvements and Extensibility
LSA can be improved upon by adding a few features like searching for stocks, pagination for large data sets and better graphing. This app can be extended easily by providing more relevant data, and proper disection of components on a more miniscule purpose level architecture.


