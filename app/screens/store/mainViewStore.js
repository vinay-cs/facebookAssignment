var _ = require('lodash');

var MicroEvent = require('../../libraries/microevent/MicroEvent.js');
var MainViewProps = require('./model/mainViewPropsData');
var AppData = require('./model/mainViewAppData');

var randomProfilePic = ["app/themes/basic/images/minion_logo1.jpg","app/themes/basic/images/minion_logo2.jpg","app/themes/basic/images/minion_logo3.jpg","app/themes/basic/images/minion_logo4.jpg",
    "app/themes/basic/images/minion_logo5.jpg","app/themes/basic/images/minion_logo1.jpg","app/themes/basic/images/minion_logo2.jpg","app/themes/basic/images/minion_logo3.jpg",
    "app/themes/basic/images/minion_logo4.jpg","app/themes/basic/images/minion_logo5.jpg"];

var TreeViewStore = (function () {

    var oComponentProps = MainViewProps;
    // var newData = oComponentProps.getPostData();

    var triggerChange = function () {
        TreeViewStore.trigger('change');
    };

    var _getViewData = function () {
        /*return oComponentProps.getData();*/
    };

    var _savePostData = function (sPostData) {
        // console.log("ComponentProps...")
        // console.log(oComponentProps.getPostData());
        var obj ={};
        var dateObj = {};
        var newData = oComponentProps.getPostData();

        dateObj.day = new Date().getDate().toString();
        var temp  = new Date().getMonth() + 1 ;
        dateObj.month = temp.toString();
        dateObj.year = new Date().getFullYear().toString();
        dateObj.timeHH = new Date().getHours().toString();
        dateObj.timeMM = new Date().getMinutes().toString();
        dateObj.timeSS = new Date().getSeconds().toString();
        obj.comment=sPostData;
        obj.name="Vinay Gaikwad";
        obj.id= parseInt(Math.random(0,1000000000)*1000000000);
        // obj.like = parseInt(Math.random(0,100)*100);
        obj.like = 0;
        obj.createdTime = dateObj;
        obj.childNodes = [];
        obj.showChildNode = true;
        // var randomNo = parseInt(Math.random()*10);
        // console.log(randomNo);
        // obj.profilePic= randomProfilePic[randomNo];
        obj.profilePic = "app/themes/basic/images/minion_logo.png";
        // newData.push(obj);
        newData.unshift(obj);
        // console.log(newData);
        triggerChange();

    }

    var _saveLikeData = function (oData) {
        var newData = oComponentProps.getPostData();
        for(var i=0; i<newData.length; i++){
            if(newData[i].id == oData.id){
                newData[i].like += 1;
            }
        }
        triggerChange();
    }


    var _saveLikeSectionData = function (oData) {
        // console.log("oDATA :: ");
        // console.log(oData);
        var newData = oComponentProps.getPostData();
        var parentNode = getParentNodeId(newData,oData.id);
        // console.log("parent Node : ");
        // console.log(parentNode);
        parentNode.like += 1;
        triggerChange();
    }


    var _saveCommnetData = function (aCommentData,sCommentData,commentDataListID) {
        var newData = oComponentProps.getPostData();
        // console.log("Coming DATA : ");
        // console.log(newData);
        // console.log(aCommentData);
        // console.log("ID :"+commentDataListID);
        var obj ={};
        var dateObj = {};

        dateObj.day = new Date().getDate().toString();
        var temp  = new Date().getMonth() + 1 ;
        dateObj.month = temp.toString();
        dateObj.year = new Date().getFullYear().toString();
        dateObj.timeHH = new Date().getHours().toString();
        dateObj.timeMM = new Date().getMinutes().toString();
        dateObj.timeSS = new Date().getSeconds().toString();
        obj.comment=sCommentData;
        obj.id= parseInt(Math.random(0,1000000000)*1000000000);
        obj.name="New Comment-"+obj.id;
        // obj.like = parseInt(Math.random(0,100)*100);
        obj.like = 0;
        obj.createdTime = dateObj;
        obj.childNodes = [];
        obj.showChildNode = true;
        obj.profilePic = "app/themes/basic/images/minion_logo5.jpg";
        for(var i=0; i<newData.length ;i++){
            if(newData[i].id == commentDataListID){
                newData[i].childNodes.push(obj);
                // console.log("Data Id MAtch....");
                // console.log("ID :"+commentDataListID);
                // console.log(aCommentData.id+"-----"+newData[i].id);
            }
        }
        triggerChange();
    }

    var _saveCommnetSectionData = function (aCommentData,sCommentData,commentDataListID) {

        var newData = oComponentProps.getPostData();
        // console.log("Coming DATA Comment Section : ");
        // console.log(newData);
        // console.log(sCommentData);
        // console.log("ID :"+commentDataListID);

        var obj ={};
        var dateObj = {};

        dateObj.day = new Date().getDate().toString();
        var temp  = new Date().getMonth() + 1 ;
        dateObj.month = temp.toString();
        dateObj.year = new Date().getFullYear().toString();
        dateObj.timeHH = new Date().getHours().toString();
        dateObj.timeMM = new Date().getMinutes().toString();
        dateObj.timeSS = new Date().getSeconds().toString();
        obj.comment=sCommentData;
        obj.id= parseInt(Math.random(0,1000000000)*1000000000);
        obj.name="New Comment"+obj.id;
        // obj.like = parseInt(Math.random(0,100)*100);
        obj.like = 0;
        obj.createdTime = dateObj;
        obj.childNodes = [];
        obj.showChildNode = true;
        obj.profilePic = "app/themes/basic/images/minion_logo4.jpg";

        var parentNode = getParentNodeId(newData,commentDataListID);
        console.log("parent Node : ");
        console.log(parentNode);
        parentNode.childNodes.push(obj);
        triggerChange();
    }

    function getParentNodeId(newData,id) {
        for(var i = 0 ; i < newData.length ; i++){
            var commentsArray = [];
            commentsArray.push(newData[i]);
            while(commentsArray.length > 0){
                var obj = commentsArray.shift();
                if(obj.id == id){
                    console.log(obj);
                    return obj;
                }
                else {
                    for(var j = 0 ; j < obj.childNodes.length ; j++ ){
                        commentsArray.push(obj.childNodes[j]);
                    }
                }
            }
        }
    }


    // var _handleChildViewNodeClicked = function (oData) {
    //     /*console.log(oData);
    //      var sValue = oComponentProps.getValue();
    //      var aData = oComponentProps.getData();
    //      var oNewData = {};
    //      oNewData.id = aData.length;
    //      oNewData.name = sValue;
    //      //dfsdfs
    //      aData.push(oNewData);
    //      triggerChange();*/
    // };

    // var _handleChildViewTextValueChanged = function (sNewValue) {
    //     console.log(sNewValue);
    //     //oComponentProps.setValue(sNewValue);
    //     triggerChange();
    // };
    //
    // var _handleChildViewNameClicked = function (oSelectedValue) {
    //     //oComponentProps.setSelectedValue(oSelectedValue);
    //     triggerChange();
    // };
    // var _handleReactorLikeClicked = function (iPostId) {
    //     var aPostData = oComponentProps.getPostData();
    //     for (var iIndex = 0; iIndex < aPostData.length; iIndex++) {
    //         var oPostData = aPostData[iIndex];
    //         if (oPostData.postId == iPostId) {
    //             oPostData.reaction.like = oPostData.reaction.like + 1;
    //         }
    //     }
    //     triggerChange();
    // };
    //
    // var _handleReactionCommentEntered = function (iPostId, sNewComment) {
    //     var aPostData = oComponentProps.getPostData();
    //     for (var iIndex = 0; iIndex < aPostData.length; iIndex++) {
    //         var oPostData = aPostData[iIndex];
    //         if (oPostData.postId == iPostId) {
    //             var aComments = oPostData.reaction.comments;
    //             var oNewComment = {
    //                 name: "Mangesh Darekar",
    //                 imgUrl: "img/profile-head.jpg",
    //                 comment: sNewComment
    //             };
    //             aComments.push(oNewComment);
    //         }
    //     }
    //     triggerChange();
    // };
    //
    // var _handleEditorPostClicked= function(sPost){
    //     console.log(sPost);
    //     var aPostData = oComponentProps.getPostData();
    //     var oNewComment = {
    //         postId: aPostData.length+1,
    //         postHead: {
    //             name: "Mangesh Darekar",
    //             time: "1 sec",
    //             imgUrl: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p40x40/15941249_2414066825313666_9146792314046365649_n.jpg?oh=7a847b4640fe5d7d109f9387e4b597c8&oe=5940434A",
    //         },
    //         content: {
    //             postText: sPost,
    //             imgUrl: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-0/s480x480/16938811_1591653710858946_5653607659183136248_n.jpg?oh=0d396c95bdae61892aa8e6da634ec429&oe=596AA441",
    //         },
    //
    //         reaction: {
    //             like: 0,
    //             comments: [
    //
    //             ]
    //         }
    //     }
    //     aPostData.push(oNewComment);
    //     triggerChange();
    // };

    return {

        getData: function () {
            var data = {
                appData: AppData,
                componentProps: oComponentProps
            };

            return data;
        },

        fetchGlobalData: function (aPostData) {
            oComponentProps.setPostData(aPostData);
            console.log(aPostData);
        },

        getViewData: function () {
            return _getViewData();
        },

        savePostData : function (sPostData) {
            _savePostData(sPostData);

        },

        saveLikeData : function (oData) {
            _saveLikeData(oData);
        },
        saveLikeSectionData : function (oData) {
            _saveLikeSectionData(oData);
        },
        saveCommnetData : function (acommentData,sCommentData,commentDataListID) {
            _saveCommnetData(acommentData,sCommentData,commentDataListID);
        },

        saveCommnetSectionData : function (acommentData,sCommentData,commentDataListID) {
            _saveCommnetSectionData(acommentData,sCommentData,commentDataListID);
        }
        // handleChildViewNodeClicked: function (oData) {
        //     _handleChildViewNodeClicked(oData);
        // },
        //
        //
        // handleChildViewTextValueChanged: function (sNewValue) {
        //     _handleChildViewTextValueChanged(sNewValue);
        // },
        //
        // handleChildViewNameClicked: function (oData) {
        //     _handleChildViewNameClicked(oData);
        // },
        //
        // handleReactorLikeClicked: function (iPostId) {
        //     _handleReactorLikeClicked(iPostId);
        // },
        //
        // handleReactionCommentEntered: function (iPostId, sNewComment) {
        //     _handleReactionCommentEntered(iPostId, sNewComment);
        // },
        // handleEditorPostClicked: function (sPost) {
        //     _handleEditorPostClicked(sPost);
        // }

    }
})();

MicroEvent.mixin(TreeViewStore);

module.exports = TreeViewStore;
