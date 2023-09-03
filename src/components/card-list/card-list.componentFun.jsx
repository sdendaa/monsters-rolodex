import CardComponent from "../card/card.componentFun";
import "./card-list.styles.css";

const CardListComponent = ({ monsters }) => {
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardComponent monster={monster} />;
    })}
  </div>;
};
export default CardListComponent;
