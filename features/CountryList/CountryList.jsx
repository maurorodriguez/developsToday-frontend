import axios from "axios";
import { useQuery } from "react-query";
import styles from "./CountryList.module.css";
import CountryListView from "../../components/CountryListView/CountryListView";

function CountryList() {
  const { isLoading, error, data } = useQuery("availableCountries", () =>
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/country/availableCountries`)
  );
  return (
    <div id={styles.container}>
      {isLoading && <div>Loading....</div>}
      {error && <div>Error loading the countries</div>}
      <div >{data && <CountryListView countries={data.data}/>}</div>
    </div>
  );
}

export default CountryList;
