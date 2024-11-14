import { LocationInterface } from "../../interfaces/Location.interface";
import "./LocationItem.scss";

function LocationItem(locationItem: LocationInterface) {
  return (
    <>
      <div className="location-item">
        <img src={locationItem.cover} alt="" className="location-item-cover" />
        <div className="location-item-cover-mask"></div>
        <span className="location-item-text">{locationItem.title}</span>
      </div>
    </>
  );
}

export default LocationItem;
