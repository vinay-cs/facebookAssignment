// import React from 'react';
var React = require('react');
const ReactPropTypes = require('prop-types');

var HeaderNavBar = require('../view/header/header-nav-bar');
var SideMenu = require('../view/sideMenu/side-menu');
var CreatePost = require('../view/createPost/createPost').view;
var ViewPost = require('../view/viewPost/viewPost').view;
var TrendingSection = require('../view/trendingSection/trendingSection').view;
var StoriesSection = require('../view/storiesSection/storiesSection').view;
var PostOptions = require('../view/postOptions/post-options').view;
var OnlineChat = require('../view/onlineChat/onlineChat').view;
var PeopleYouMayKnow = require('../view/peopleYouMayKnow/peopleYouMayKnow').view;

const oProps =  {
    store: ReactPropTypes.object.isRequired,
    action: ReactPropTypes.object.isRequired
};

class MainViewController extends  React.Component {
    constructor(props) {
        super(props);


        var initialState = {
            appData: this.getStore().getData().appData,
            componentProps: this.getStore().getData().componentProps,
        };
        this.state = initialState;

        this.handleTreeViewStateChanged = this.handleTreeViewStateChanged.bind(this);
    }

    //@Bind: Store with state
    componentDidMount() {
        this.getStore().bind('change', this.handleTreeViewStateChanged);
        this.props.action.registerEvent();
    }

    componentDidUpdate() {
    }

    componentWillMount() {
        var aMockDataForPost = this.state.appData.getMockDataForPosts();
        this.getStore().fetchGlobalData(aMockDataForPost);
    }

    //@UnBind: store with state
    componentWillUnmount() {
        this.getStore().unbind('change', this.handleTreeViewStateChanged);
        this.props.action.deRegisterEvent();
    }

    //@set: state
    handleTreeViewStateChanged() {

        var changedState = {
            appData: this.getStore().getData().appData,
            componentProps: this.getStore().getData().componentProps,
            // appData: this.getStore().getData().appData,
            // componentProps: this.getStore().getData().componentProps
        };

        this.setState(changedState);
        }

    getStore() {
        return this.props.store;
    }


    render()
    {
        var oComponentProps = this.state.componentProps;
        var aPostData = oComponentProps.getPostData();
        // var aPostData = aPostData.reverse();

        console.log("Main Data : ");
        console.log(aPostData);
        var onlineChat = [ {name : "Vinay Gaikwad",pic:""},{name:"Abhay Chouhan",pic:""},{name:"Navin Kalakoti",pic:""},{name:"Ashish Patak",pic:""},{name:"Jayant Patil",pic:""},
          {name:"Rinku Rajole",pic:""},{name:"Vijay Mode",pic:""},{name:"Prashant Dev",pic:""},{name:"Ajit Bhakre",pic:""},{name:"Nitin Sahay",pic:""}];
        return (

            <div>
                <HeaderNavBar/>
                <SideMenu/>
                <OnlineChat/>
                {/*{onlineChat.map((data,i) => <OnlineChat key={i} onlineChatData={data}/>)}<br/>*/}
                <StoriesSection/>
                <TrendingSection/>
                <PeopleYouMayKnow/>
                {/*{aPostData.map((data,i) => <TrendingSection key={i} trendingData={data}/>)}*/}
                <CreatePost/>
                {aPostData.map((data,i) => <ViewPost key={i} compData={data}/>)}
                {/*<PostOptions/>*/}
                {/*<h2> In Main View Controller ...</h2>*/}

                </div>
        )
    }
}

MainViewController.propTypes = oProps;
module.exports = MainViewController;