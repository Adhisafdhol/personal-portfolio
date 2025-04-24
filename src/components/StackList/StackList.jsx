import styles from "./StackList.module.css";
import PropTypes from "prop-types";

const StackList = ({ stackList }) => {
  return (
    <ul className={styles.techStack}>
      {stackList.map((item, index) => {
        return (
          <li key={index} className={styles.iconContainer}>
            <img className={styles.icon} src={item.icon} alt={item.name} />
          </li>
        );
      })}
    </ul>
  );
};

StackList.propTypes = {
  stackList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
};

export default StackList;
