import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import { TopBar, NavDrawer, DRAWER_WIDTH } from '../components/navigation/NavBar';
import { Home } from '../pages/home';
import { Recipes, Recipe } from '../pages/recipes';
import { theme } from '../themes/default';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

function App(props : any) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        <Hidden smUp implementation="css">
          <TopBar handleDrawerToggle={handleDrawerToggle} />
        </Hidden>

        <BrowserRouter>
          <NavDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
          <main className={classes.content}>
            <Hidden smUp implementation="css">
              <div className={classes.toolbar} />
            </Hidden>

            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/recipes"><Recipes /></Route>
              <Route exact path="/recipes/show"><Recipe /></Route>
            </Switch>

            <Zoom
              key="primary"
              in={true}
              timeout={transitionDuration}
              style={{
                transitionDelay: `0ms`,
              }}
              unmountOnExit
            >
              <Fab aria-label="new" className={classes.fab} color="primary">
                <EditIcon />
              </Fab>
            </Zoom>
          </main>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export { App, DRAWER_WIDTH };
