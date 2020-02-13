import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = ({ history, location, match }) => {
  console.log(match, location);
  return (
    <div>
      <div>home</div>
      <Link to="/Roter">Roter</Link>
    </div>
  );
};
