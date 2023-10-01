import styles from "../Detail.module.css";

//Page có hai button giống nhau nên reuse
const Button = () => {
  return (
    <button type="submit" className={styles["detail-btn"]}>
      Reserve or Book now!
    </button>
  );
};
export default Button;
