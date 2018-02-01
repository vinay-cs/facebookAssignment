var React = require('react');
// var TimeAgo = require('react-timeago');
// var SmartTimeAgo = require('react-smart-time-ago');
// var Moment = require('react-moment');
// var TimeAgo = require('javascript-time-ago');
// var en = require('javascript-time-ago/locale/en');
// TimeAgo.locale(en);

var CommentSection = require('../commentSection/commentSection').view;
var ViewCommentSection = require('../viewCommentSection/viewCommentSection').view;
const eventBus = require('../../../libraries/eventdispatcher/EventDispatcher');
const oEvent = {
    LIKE_CLICK : "LIKE_CLICK"
}

var showOptions = false;

class ViewPost extends React.Component{
    constructor(){
        super();

        this.increaseLikeCount = this.increaseLikeCount.bind(this);
        this.addCommentsBlock = this.addCommentsBlock.bind(this);
        this.clickOption = this.clickOption.bind(this);
        this.timeSince = this.timeSince.bind(this);
    }

    increaseLikeCount(){
        var oData = this.props.compData;
      eventBus.dispatch(oEvent.LIKE_CLICK,this,oData);
    }

    addCommentsBlock(){
        // document.getElementById(displayInput).style.display=="none"

    }

    clickOption(){
        showOptions = true;
        console.log("Options : "+showOptions);
    }

    timeSince() {

  }


    render(){
        // var oComonSectionView = showComment? <CommentSection /> : null;
        console.log("Time : ");
        console.log(new Date().toString());
        var newDate = new Date();
        return(

            <div className="post-view-block">
                <div className="post-block-inside">
                  <img src={this.props.compData.profilePic} width="50" height="50"/>
                    {/*<p>{this.compData.profilePic}</p>*/}
                    <strong className="view-post-font">{this.props.compData.name}</strong>
                    {/*<TimeAgo>{newDate}</TimeAgo>*/}
                    {/*<SmartTimeAgo value={newDate}/>*/}
                    {/*<Moment>{newDate}</Moment>*/}
                    {/*<TimeAgo date='Feb 1, 1966' />*/}
                    <strong className="view-post-font-option"><a className="collapse-class" onClick={this.clickOption}>...</a></strong>
                    <strong className="view-post-font-date">{this.props.compData.createdTime.day}/{this.props.compData.createdTime.month}/{this.props.compData.createdTime.year}&nbsp;&nbsp;&nbsp;
                        {this.props.compData.createdTime.timeHH}:{this.props.compData.createdTime.timeMM}:{this.props.compData.createdTime.timeSS}</strong>
                    <p className="p-font">{this.props.compData.comment}</p>
                    <strong className="commets-block-font">
                        <a className="commets-block-pad" onClick={this.increaseLikeCount}>Like - {this.props.compData.like}</a>
                        <a className="commets-block-pad" onClick={this.addCommentsBlock}>Comment - {this.props.compData.childNodes.length}</a>
                        <a className="commets-block-pad">Share</a>
                    </strong><br/>
                    {this.props.compData.childNodes.map((data,i) => <ViewCommentSection key={i} compViewCommentData = {data} />)}
                    {/*{this.props.compData.childNodes.map((data,i) =>  <CommentSection key={i} dataOfPost={data}/>)}*/}
                </div>
                {/*{this.props.compData.array(data,i => <CommentSection key={i} compDataOuter={data}/> )}*/}
                {/*{this.props.compData.childNodes.map((data,i) =>  <CommentSection key={i} dataOfPost={data}/>)}*/}
                <CommentSection id={this.props.compData.id} dataOfPost={this.props.compData.childNodes}/>
            </div>

        )

    }
}

module.exports = {
    view : ViewPost,
    event : oEvent
};