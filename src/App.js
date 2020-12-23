import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabButton,
  IonTabBar,
  IonLabel,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  createOutline,
  listCircleOutline,
  personCircleOutline,
  searchOutline,
  trendingUpOutline,
} from "ionicons/icons";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Submit from "./pages/Submit";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/"
              render={() => <Redirect to="/home" />}
              exact={true}
            />
            <Route path="/home" component={Home} />
            <Route path="/trending" component={Trending} />
            <Route path="/submit" component={Submit} />
            <Route path="/search" component={Search} />
            <Route path="/profile" component={Profile} />
            <Route component={() => <Redirect to="/home" />} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={listCircleOutline} />
              <IonLabel>PKGHound</IonLabel>
            </IonTabButton>
            <IonTabButton tab="trending" href="/trending">
              <IonIcon icon={trendingUpOutline} />
              <IonLabel>Trending</IonLabel>
            </IonTabButton>
            <IonTabButton tab="submit" href="/submit">
              <IonIcon icon={createOutline} />
              <IonLabel>Submit</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={searchOutline} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Profile" href="/profile">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;