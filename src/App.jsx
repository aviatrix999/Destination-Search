import DestinationSearch from "./components/DestinationSearch";
import "./App.css";
const destinationList = [
  {
    id: 1,
    name: "Melaka Mosque",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png",
  },
  {
    id: 2,
    name: "Shrubland",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/shrubland-img.png",
  },
  {
    id: 3,
    name: "New York",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/new-york-img.png",
  },
  {
    id: 4,
    name: "Escarpament",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/escarpment-img.png",
  },
  {
    id: 5,
    name: "Westminster Abbey",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png",
  },
  {
    id: 6,
    name: " South Downs National Park",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png",
  },
  {
    id: 7,
    name: "National Historic  Site",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png",
  },
  {
    id: 8,
    name: "Tower Bridge",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png",
  },
  {
    id: 9,
    name: "Arc Here",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/arc-here-img.png",
  },
  {
    id: 10,
    name: "Steeple",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/steeple-img.png",
  },
  {
    id: 11,
    name: "Glaciokarst",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png",
  },
  {
    id: 12,
    name: "Parco Nazionale delle Cinque Terre",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png",
  },
];
const App = () => <DestinationSearch destinationList={destinationList} />;
export default App;
