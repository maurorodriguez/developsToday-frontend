import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CountryListView from "../../components/CountryListView/CountryListView";
import ChartBasic from "../../components/ChartBasic/ChartBasic";
import styles from "./CountryInfo.module.css";

function CountryInfo() {
  const { countryCode } = useParams();
  const { isLoading, data } = useQuery(countryCode, () =>
    axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/country/countryInfo/${countryCode}`
    )
  );

  const countryData = data?.data;

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div id={styles.container}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && countryData && (
        <div id={styles.data}>
          <div id={styles.head}>
            <h1 className={styles.countryName}>{countryData.name}</h1>
            <img
              className={styles.flag}
              src={countryData.flag}
              alt={`${countryData.name} flag`}
            />
          </div>

          <div>
            <h2 className={styles.borderCountriesTitle}>Border Countries</h2>
            <CountryListView
              countries={countryData.borders.map((country) => ({
                countryCode: country.countryCode,
                name: country.commonName,
              }))}
            />
          </div>

          <div className={styles.chartContainer}>
            <ChartBasic
              xAxisTag="Years"
              xAxisValues={countryData.populationData.map((pd) => pd.year)}
              yAxisTag="Population in millions"
              yAxisValues={countryData.populationData.map((pd) => pd.value / 1_000_000)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
