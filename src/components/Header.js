import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add Task"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

// Die zweite Variante ist mit props in der funtion
// const Header = (props) => {}

// und den defaultProps

// defaultProps
Header.defaultProps = {
  title: "Task Tracker",
};
// defaultProps werden allerdings überschrieben, sobald in der App.js im Header Tag ein title als prop übergeben wird.

// propTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS möglich, wenn oben deklariert ist <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
