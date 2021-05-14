import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";
import Form from "./Form";
import ProfilePic from "./ProfilePic";
import { makeStyles } from "@material-ui/core/styles";
import Empty from "./Empty";
import Grid from "@material-ui/core/Grid";
import useApplicationData from "../hooks/useApplicationData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingBottom: "50px",
    paddingTop: "50px",
  },
}));

export default function User(props) {
  const { state, setPortfolio } = useApplicationData();
  const classes = useStyles();
  const [art, setArt] = useState(false);

  const addArt = () => {
    setArt(true);
  };

  let { id } = useParams();

  const onDelete = (id) => {
    axios.delete(`/api/artworks/${id}`).then(() => {
      setPortfolio();
    });
  };

  const onCreate = (artwork) => {
    axios.put(`/api/artworks`, artwork).then(() => {
      setArt(false);
      setPortfolio();
    });
  };

  return (
    <div className={classes.root}>
      {console.log("state.users[id-1]", state.users)}
      {console.log("state.portfolio", state.portfolio)}
      <Grid
        container
        item
        xs={12}
        spacing={1}
        className={classes.gridContainer}
        justify="center"
      >
        {/* PROFILE PIC */}
        <Grid item xs={12} sm={6} md={4}>
          {/* THIS id WILL BECOME BUGGY WHEN USERS CAN DELETE PROFILES FROM THE DATABASE */}
          {state.users[id] && <ProfilePic userInfo={state.users[id - 1]} />}
        </Grid>

        {/* USER INFO */}
        <Grid item xs={12} sm={6} md={4}>
          <div>{state.portfolio[0] && state.portfolio[id - 1].username}</div>
          <div>{state.portfolio[0] && state.portfolio[id - 1].first_name}</div>
          <div>{state.portfolio[0] && state.portfolio[id - 1].last_name}</div>
          <div>{state.portfolio[0] && state.portfolio[id - 1].cool_fact}</div>
        </Grid>

        {/* ADD ARTWORK BUTTON */}
        <Grid item xs={12} sm={6} md={4}>
          {id === `${state.activeUser}` && state.activeUser !== 0 && !art && (
            <Empty onAdd={addArt} />
          )}
          {id === `${state.activeUser}` && state.activeUser !== 0 && art && (
            <Form onCreate={onCreate} activeUser={state.activeUser} />
          )}
        </Grid>
      </Grid>
      <div>
        <Artworks
          art={state.portfolio}
          activeUser={state.activeUser}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}
