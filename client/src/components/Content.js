import Discover from "./Discover";
import { Route, Switch } from "react-router-dom";
import ArtworkDetail from "./ArtworkDetail";
import Gallery from "./Gallery";

function Content({ artCollection, favorites }) {
  return (
    <Switch>
      <Route path="/home/discover">
        <Discover artCollection={artCollection} />
      </Route>
      <Route path="/details/:id">
        <ArtworkDetail />
      </Route>
      <Route path="/home/gallery">
        <Gallery favorites={favorites} />
      </Route>
    </Switch>
  );
}

export default Content;
