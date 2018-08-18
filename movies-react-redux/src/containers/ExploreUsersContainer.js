import {connect} from 'react-redux'
import ExploreUser from "../components/ExploreUser";
import * as actions from "../actions/fan";

const dispatchToPropsMapper = dispatch => ({
    findAllFans:() => actions.findAllFans(dispatch),
    followFan: (id,username) => actions.followFan(dispatch,id,username),
    getFanContent: (id) => actions.getFanContent(dispatch,id),
    closeContentPane:() => actions.closeContentPane(dispatch)
});

const stateToPropsMapper = state => ({
    fans:state.fanReducer.fanResults,
    items:state.fanReducer.fanItems,
    toShowId:state.fanReducer.fanDetailsId
});

const ExploreUsersContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ExploreUser);
export default ExploreUsersContainer;