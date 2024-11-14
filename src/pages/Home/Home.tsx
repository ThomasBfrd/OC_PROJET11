import "./Home.scss";
import BaniereAccueil from "../../components/Banner/BaniereAccueil";
import LocationItem from "../../components/LocationItem/LocationItem";
import { LocationInterface } from "../../interfaces/Location.interface";
import { Link } from "react-router-dom";
import useGetLocations from "../../Api/Api";

export default function Accueil() {
  const { loading, data, error } = useGetLocations();

  return (
    <>
      <div className="main">
        <BaniereAccueil />
        <div
          className={`locations ${
            data.length > 0 ? "locations-background" : ""
          } ${error || loading ? "locations-prevent" : ""}`}
        >
          {loading ? (
            <span className="loader"></span>
          ) : data.length > 0 ? (
            <ul className="locations-list">
              {data.map((locationItem: LocationInterface) => (
                  <li key={locationItem.id}>
                    <Link
                      to={`/locations/${locationItem.id}`}
                      state={{ from: locationItem }}>
                      <LocationItem {...locationItem} />
                    </Link>
                  </li>
                ))}
            </ul>
          ) : (
            <h2 className="error-locations-message">
              Aucuns logements n'ont pu être récupérés
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
