import { useEffect, useState } from "react";
import { LocationInterface } from "../interfaces/Location.interface";

export default function useGetLocations() {
  const [data, setData] = useState<{
    loading: boolean;
    data: Array<LocationInterface>;
    error: boolean;
  }>({
    loading: true,
    data: [],
    error: false,
  });

  useEffect(() => {
    const getLocationsData = () => {
      fetch("/logements.json")
        .then((response: Response) => {
          if (!response.ok) {
            throw (new Error());
          }
          return response.json();
        })
        .then((data: Array<LocationInterface>) =>
          setData({ loading: false, error: false, data: data })
        )
        .catch(() => {
          setData({ loading: false, error: true, data: [] });
        });
    };

    getLocationsData();

    return () => {};
  }, []);

  return data;
}
