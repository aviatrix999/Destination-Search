import DestinationSearch from "../DestinationSearch";
import "./index.css";
const DestinationItem = (props) => {
  const { destinationDetails } = props;
  const { name, imageUrl } = destinationDetails;
  return (
    <li className="destination-item">
      <img src={imageUrl} alt={name} className="destination-image" />
      <p>{name}</p>
    </li>
  );
};
export default DestinationItem;
