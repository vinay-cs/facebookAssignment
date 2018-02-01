var React = require('react');

const eventBus = require('../../../libraries/eventdispatcher/EventDispatcher');
var CommentSection = require('../commentSection/commentSection').view;
const oEvent = {
    LIKE_CLICK_INSIDE : 'LIKE_CLICK_INSIDE',
    COMMENT_ENTER_BUTTON_INSIDE : 'COMMENT_ENTER_BUTTON_INSIDE'
}
var sCommentData = "";
var commentDataList = [];
var commentDataListID = 0;
class ViewCommentSection extends React.Component{
    constructor(){
        super();

        this.increaseLikeCount = this.increaseLikeCount.bind(this);

    }

    increaseLikeCount(){
        var oData = this.props.compViewCommentData;
        eventBus.dispatch(oEvent.LIKE_CLICK_INSIDE,this,oData);
    }

    saveComment(e){
        sCommentData = e.target.value;
        // console.log("Comment Data :"+sCommentData);
    }

    saveCommentInStore(id,e){
        // console.log("Outer Data .... : ");
        // console.log(this.props.compDataOuter);
        // alert(id);
        // console.log("Comment Data 1223334343 :"+sCommentData);
        // sCommentData = e.target.value;
        commentDataListID = id;
        if(e.which == 13){
            eventBus.dispatch(oEvent.COMMENT_ENTER_BUTTON_INSIDE,this,commentDataList,sCommentData,commentDataListID);
            var elems = document.getElementsByTagName("input");
            var l = elems.length;
            for (var i = 0; i < l; ++i){
                elems[i].value="";
            }
        }
    }



    render(){
        commentDataList = this.props.dataOfPost;
        var profilePic = "app/themes/basic/images/minion_logo4.jpg";
        return(
            <div className="background-color-view-comments">
                <br/>
                <img className="img-pad" src={this.props.compViewCommentData.profilePic} width="30" height="30"/>
                <strong className="view-post-font-date-comment">{this.props.compViewCommentData.createdTime.day}/{this.props.compViewCommentData.createdTime.month}/{this.props.compViewCommentData.createdTime.year}&nbsp;&nbsp;&nbsp;
                    {this.props.compViewCommentData.createdTime.timeHH}:{this.props.compViewCommentData.createdTime.timeMM}:{this.props.compViewCommentData.createdTime.timeSS}</strong>
                <strong className="view-post-font-comment">{this.props.compViewCommentData.name} : <label className="label-view-comment"> {this.props.compViewCommentData.comment}</label></strong><br/>
                <strong className="commets-block-font">
                    <a className="commets-block-pad" onClick={this.increaseLikeCount}>Like - {this.props.compViewCommentData.like}</a>
                    <a className="commets-block-pad" onClick={this.addCommentsBlock}>Comment - {this.props.compViewCommentData.childNodes.length}</a>
                    <a className="commets-block-pad">Share</a>
                </strong><br/>
                <div className="div-comment">
                    <img className="img-pos" src={profilePic} width="29" height="29"/>
                    <input className="comment-input-inside "  onChange={this.saveComment} onKeyPress={this.saveCommentInStore.bind(this,this.props.compViewCommentData.id)} type="text" placeholder="write a comment ..."/>
                </div>
                {this.props.compViewCommentData.childNodes.map((data,i) => <ViewCommentSection key={i} compViewCommentData = {data} />)}
                {/*<CommentSection dataOfPost={this.props.compViewCommentData}/>*/}
                {/*{this.props.compViewCommentData.childNodes.map((data,i) =>  <CommentSection key={i} dataOfPost={data}/>)}*/}
            </div>
        )
    }
}

module.exports = {
    view :ViewCommentSection,
    event : oEvent
}