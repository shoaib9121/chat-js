import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";
import "./style.scss";

const Card = () => {
  return (
    <div className="card">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
};

export default Card;
