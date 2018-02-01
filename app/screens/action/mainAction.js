var eventBus = require('../../../app/libraries/eventdispatcher/EventDispatcher');
var postEvent = require('../../screens/view/createPost/createPost').event;
var likeEvent = require('../../screens/view/viewPost/viewPost').event;
var commentEvent = require('../../screens/view/commentSection/commentSection').event;
var viewCommentEvent = require('../../screens/view/viewCommentSection/viewCommentSection').event;

//var ChildViewEvents = require('../view/child-view').events;


var MainViewStore = require('../store/mainViewStore');


var TreeViewAction = (function () {

    let postClickFuntion = function(oContext,sPostData){
        MainViewStore.savePostData(sPostData);
    };

    let likeFuntion = function (oContext,oData) {
        MainViewStore.saveLikeData(oData);

    };

    let commentFuntion = function (oContext,aCommentData,sCommentData,commentDataListID) {
        MainViewStore.saveCommnetData(aCommentData,sCommentData,commentDataListID);
    };


    let commentSectionFuntion = function (oContext,aCommentData,sCommentData,commentDataListID) {
        MainViewStore.saveCommnetSectionData(aCommentData,sCommentData,commentDataListID);
    };
    
    let likeSectionFuntion = function (oContext,oData) {
        MainViewStore.saveLikeSectionData(oData);
        
    }
    // var handleChildViewNodeClicked = function (oContext, oData) {
    //     MainViewStore.handleChildViewNodeClicked(oData);
    // };
    //
    // var handleChildViewTextValueChanged = function (oContext, sNewValue) {
    //     MainViewStore.handleChildViewTextValueChanged(sNewValue);
    // };
    //
    // var handleChildViewNameClicked = function (oContext, oSelectedValue) {
    //     MainViewStore.handleChildViewNameClicked(oSelectedValue);
    // };
    //
    // var handleReactorLikeClicked = function (oCntext, iPostId) {
    //     MainViewStore.handleReactorLikeClicked(iPostId);
    // };
    //
    // var handleReactionCommentEntered = function (oContext, iPostId, sNewComment) {
    //     MainViewStore.handleReactionCommentEntered(iPostId, sNewComment);
    // };
    // var handleEditorPostClicked = function (oContext, sPost) {
    //     console.log(sPost);
    //     MainViewStore.handleEditorPostClicked(sPost);
    // };

    return {
        //Register Event Listener
        registerEvent: function () {
            // eventBus.addEventListener(EditorrowEvent.HANDLE_EDITOR_POST_CLICKED, handleEditorPostClicked);
            eventBus.addEventListener(postEvent.BUTTON_CLICK_POST,postClickFuntion);
            eventBus.addEventListener(likeEvent.LIKE_CLICK,likeFuntion);
            eventBus.addEventListener(commentEvent.COMMENT_ENTER_BUTTON,commentFuntion);
            eventBus.addEventListener(viewCommentEvent.COMMENT_ENTER_BUTTON_INSIDE,commentSectionFuntion);
            eventBus.addEventListener(viewCommentEvent.LIKE_CLICK_INSIDE,likeSectionFuntion);
        },

        //De-Register Event Listener
        deRegisterEvent: function () {
            //eventBus.removeEventListener(EditorrowEvent.HANDLE_EDITOR_POST_CLICKED, handleEditorPostClicked);
            eventBus.removeEventListener(postEvent.BUTTON_CLICK_POST,postClickFuntion);
            eventBus.removeEventListener(likeEvent.LIKE_CLICK,likeFuntion);
            eventBus.removeEventListener(commentEvent.COMMENT_ENTER_BUTTON,commentFuntion);
            eventBus.removeEventListener(viewCommentEvent.COMMENT_ENTER_BUTTON_INSIDE,commentSectionFuntion);
            eventBus.removeEventListener(viewCommentEvent.LIKE_CLICK_INSIDE,likeSectionFuntion);
        }
    }
})();

module.exports = TreeViewAction;