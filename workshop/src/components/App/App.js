import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {useDispatch} from "react-redux";

import {requestAccessToken, receiveAccessToken, receiveAccessTokenError} from "../../actions"
import GlobalStyles from "../GlobalStyles"
import ArtistRoute from "../ArtistRoute"

const DEFAULT_ARTIST_ID = '4gzpq5DPGxSnKTe4SA8HAU';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token")
      .then(res => res.json())
      .then(data => dispatch(receiveAccessToken(data.access_token)))
      .catch(error => {
        console.error(error);
        dispatch(receiveAccessTokenError())
      })
      
  }, [])

  return (
  <Router>
    <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
        </Route>
        <Route exact path="/artists/:id"><ArtistRoute /></Route>
      </Switch>
  </Router>)
};

export default App;