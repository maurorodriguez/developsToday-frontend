import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";

function CountryCard({ code, name }) {
  return (
    <div id={styles.card}>
      <Link key={code} to={`/countryInfo/${code}`}>
        <div id={styles.name}>{name}</div>
      </Link>
      <div id={styles.code}>{code}</div>
    </div>
  );
}

export default CountryCard;
