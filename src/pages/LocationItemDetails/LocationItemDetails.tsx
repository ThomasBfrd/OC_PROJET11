import { useLocation, useNavigate, useParams } from "react-router-dom";
import { LocationInterface } from "../../interfaces/Location.interface";
import { useEffect, useState } from "react";
import "./LocationItemDetails.scss";
import CollapseDetails from "../../components/CollapseDetails/CollapseDetails";
import Slideshow from "../../components/Slideshow/Slideshow";
import Stars from "../../components/Stars/Stars";
import Tag from "../../components/Tag/Tag";
import useGetLocations from "../../Api/Api";

export default function LocationItemDetails() {
  const navigate = useNavigate();
  const { locationId } = useParams();
  const location = useLocation();
  const { from } = location.state || {};
  const [locationResult, setLocationResult] = useState<LocationInterface>();
  const { loading, data, error } = useGetLocations();

  const stars: Array<number> = [0, 1, 2, 3, 4];

  useEffect(() => {

    if (!loading) {

      if (from === undefined) {

        if (locationId && data) {
          const foundLocation = data.find(
            (location: LocationInterface) => location.id === locationId
          );
          if (foundLocation) {

            setLocationResult(foundLocation);
          } else {
            navigate("/*");
          }
        } else {
          navigate("/*");
        }
      } else {
        setLocationResult(from);
      }
    }

    return () => {};
  }, [from, locationId, loading, data, location.state, locationResult, navigate, error]);

  return (
    <>
      <div className="container-location">
        {loading ? (
          <span className="loader"></span>
        ) : locationResult !== undefined ? (
          <>
            <Slideshow locationGallery={locationResult?.pictures} />
            <div className="location-informations">
              <div className="location__localization">
                <h1 className="location__localization__title">
                  {locationResult?.title}
                </h1>
                <h3 className="location__localization__position">
                  {locationResult?.location}
                </h3>
                <ul className="location__localization__tag-list">
                  {locationResult?.tags.map((tag, index) => (
                    <li key={index}>
                      <Tag tag={tag} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="location__host">
                <div className="location__host__informations">
                  <h2 className="location__host__informations__name">
                    {locationResult?.host.name}
                  </h2>
                  <img
                    className="location__host__informations__picture"
                    src={locationResult?.host.picture}
                    alt={locationResult?.host.name}
                  />
                </div>
                <Stars stars={stars} locationRate={locationResult?.rating} />
              </div>
            </div>
            <div className="location__informations__menus">
              <CollapseDetails
                content={locationResult?.description}
                arrayContent={[]}
                title="Description"
              />
              <CollapseDetails
                content={""}
                arrayContent={locationResult?.equipments}
                title="Équipements"
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
