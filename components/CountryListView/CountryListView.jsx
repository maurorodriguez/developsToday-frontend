import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryListView.module.css";

function CountryListView({ countries }) {
  return (
    <div id={styles.cardContainer}>
      {countries.map(({ countryCode, name }) => (
        <CountryCard key={countryCode} code={countryCode} name={name} />
      ))}
    </div>
  );
}

export default CountryListView;
