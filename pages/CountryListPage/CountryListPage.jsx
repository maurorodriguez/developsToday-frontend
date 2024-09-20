import CountryList from "../../features/CountryList/CountryList";
import styles from "./CountrylistPage.module.css";

function CountryListPage() {
  return (
    <div>
      <div id={styles.CountryListContainer}>
        <CountryList />
      </div>
    </div>
  );
}

export default CountryListPage;
