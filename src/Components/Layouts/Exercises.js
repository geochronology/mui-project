import React, { Component, Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { } from "@material-ui/core/List"

const styles = {
  Paper: {
    padding: 20,
    margin: "10px 0px",
    fontFamily: "inherit",
    height: 500,
    overflowY: "auto"
  }
}

class Exercises extends Component {
  render() {
    const { exercises } = this.props;
    return (
      <Grid container >
        <Grid item sm>
          <Paper style={styles.Paper}>
            {exercises.map(([group, exercises]) =>
              <Fragment>
                <Typography variant="h4" style={{ textTransform: "capitalize" }}>
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title }) =>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  )}
                </List>
              </Fragment>
            )}
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={styles.Paper}>
            <Typography variant="h3" style={{ marginTop: 20 }}>
              Welcome!
            </Typography>
            <Typography>
              Please select an exercise from the list on the left.
            </Typography>
          </Paper>
        </Grid>
      </Grid >
    );
  }
}

export default Exercises;