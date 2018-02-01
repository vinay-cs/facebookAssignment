var React = require('react');
var eventBus = require('../../../libraries/eventdispatcher/EventDispatcher');
var sCommentData = "";

const oEvent = {
    COMMENT_ENTER_BUTTON : 'COMMENT_ENTER_BUTTON'
}
var commentDataList = [];
var obj = {};
var commentDataListID = 0;
class CommentSection extends React.Component{
    constructor(){
        super();
        this.saveComment = this.saveComment.bind(this);
        this.saveCommentInStore = this.saveCommentInStore.bind(this);

    }

    saveComment(e){
       sCommentData = e.target.value;
    }

    saveCommentInStore(id,e){
        // console.log("Outer Data .... : ");
        // console.log(this.props.compDataOuter);
        commentDataListID = id;
        if(e.which == 13){
            eventBus.dispatch(oEvent.COMMENT_ENTER_BUTTON,this,commentDataList,sCommentData,commentDataListID);
            var elems = document.getElementsByTagName("input");
            var l = elems.length;
            for (var i = 0; i < l; ++i){
                elems[i].value="";
            }
        }
    }


    render(){
        // var randomProfilePic = ["app/themes/basic/images/minion_logo1.jpg","app/themes/basic/images/minion_logo2.jpg","app/themes/basic/images/minion_logo3.jpg","app/themes/basic/images/minion_logo4.jpg",
        //     "app/themes/basic/images/minion_logo5.jpg","app/themes/basic/images/minion_logo1.jpg","app/themes/basic/images/minion_logo2.jpg","app/themes/basic/images/minion_logo3.jpg",
        //     "app/themes/basic/images/minion_logo4.jpg","app/themes/basic/images/minion_logo5.jpg"];
        // var randomNo = parseInt(Math.random()*10);
        //
        // var profilePic= randomProfilePic[randomNo];
        commentDataList = this.props.dataOfPost;
        commentDataListID = this.props.id;
        // console.log("commentDataListID :");
        // console.log(commentDataListID);
        var profilePic = "app/themes/basic/images/minion_logo5.jpg";
        return(
            <div>

                <img src={profilePic} width="29" height="29"/>
                <input className="comment-input"  onChange={this.saveComment} onKeyPress={this.saveCommentInStore.bind(this,this.props.id)} type="text" placeholder="write a comment ..."/>
                {/*<h2>{this.props.dataOfPost.id}</h2>*/}
            </div>
        )

    }
}

module.exports = {
    view : CommentSection,
    event : oEvent
};