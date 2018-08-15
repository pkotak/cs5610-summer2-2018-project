import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';

import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from "../actions/login";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    },
};

function ButtonAppBar(props, {type, logout, loggedIn}) {
    const {classes} = props;
    let searchText;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Movies
                    </Typography>
                    <Link to={'/'}>
                        <Button className="text-white">
                            Home
                        </Button>
                    </Link>
                    <Link to={'/discover'}>
                        <Button className="text-white">
                            Discover
                        </Button>
                    </Link>
                    <Link to={'/news/top'}>
                        <Button className="text-white">
                            News
                        </Button>
                    </Link>
                    <Link to={'/news/popular'}>
                        <Button className="text-white">
                            Trending
                        </Button>
                    </Link>
                    <Link to={'/news/reviews'}>
                        <Button className="text-white">
                            External Reviews
                        </Button>
                    </Link>
                    <div hidden={ loggedIn}>
                        <Link style={{display: 'block', height: '100%'}}
                              className="navbar-nav" to="/login">
                            <Button className="text-white">Login</Button>
                        </Link>
                    </div>
                    <div hidden={ loggedIn }>
                        <Link style={{display: 'block', height: '100%'}}
                              className="navbar-nav" to="/register">
                            <Button className="text-white">Registration</Button>
                        </Link>
                    </div>
                    <div hidden={type === undefined || !loggedIn}>
                        <Link style={{display: 'block', height: '100%'}}
                              className="navbar-nav" to="/profile">
                            <Button className="text-white">Profile</Button>
                        </Link>
                    </div>

                    <FormControl className={classes.margin}>
                        <input
                            className='form-control'
                            ref={node => searchText = node}
                            placeholder='Search'
                            id="custom-css-input"
                        />
                    </FormControl>
                    <Button color="inherit" onClick={() => {
                        props.searchMovie(searchText.value);
                    }}>Search</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


const dispatchToPropsMapper = dispatch => ({
    logout: () => actions.logout(dispatch)
});
const stateToPropsMapper = state => ({
    type: state.userType,
    loggedIn: state.loggedIn
});

const NavigationBar = connect(stateToPropsMapper, dispatchToPropsMapper)(ButtonAppBar);

export default withStyles(styles)(NavigationBar);