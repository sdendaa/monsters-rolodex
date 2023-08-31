import { Component } from "react";
import "./card-list.styles.css";
import CardComponent from "../card/card.component";

class CardListComponent extends Component {
  render() {
    console.log("render");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardComponent monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardListComponent;
