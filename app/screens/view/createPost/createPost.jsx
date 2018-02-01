var React = require('react');
const eventBus = require('../../../libraries/eventdispatcher/EventDispatcher');

var sPostData = '';

const oEvent = {
    BUTTON_CLICK_POST : 'BUTTON_CLICK_POST'
}


class CreatePostBlock extends React.Component{
    constructor(){
        super();

        this.savePostData = this.savePostData.bind(this);
        this.storePostDataInMainStore = this.storePostDataInMainStore.bind(this);
    }

    savePostData(e){
        sPostData = e.target.value;
    }

    storePostDataInMainStore(){

        if(sPostData.length != 0){

            eventBus.dispatch(oEvent.BUTTON_CLICK_POST,this,sPostData);
            var elems = document.getElementsByTagName("textarea");
            var l = elems.length;
            for (var i = 0; i < l; ++i){
                elems[i].value="";
            }
        }

    }

    render(){
        return(
            <div className="post-block">
                <div className="post-block-inside">
                    <div>
                        <strong className="update-status-font-1">Make Post</strong>
                        <strong className="update-status-font-1">|</strong>
                        <strong className="update-status-font-2">Photo/Video Album</strong>
                        <strong className="update-status-font-1">|</strong>
                        <strong className="update-status-font-3">Live Video</strong>
                    </div>
                    <hr/>
                    <textarea className="textarea-adjust" onChange={this.savePostData} placeholder="Whats in your mind ?" rows="3" cols="117" /><br/>
                    <div>
                        <button className="post-btn-1"><img className="post-img" src="app/themes/basic/images/default_img_logo2.png"/><a className="btn-padding">Photo/Video</a></button>
                        <button className="post-btn-2"><img className="post-img" src="app/themes/basic/images/emoji.png"/><a className="btn-padding">Feeling/Activity</a></button>
                        {/*<button className="post-btn-3"><a className="btn-padding">...</a></button>*/}
                        <button className="post-btn" onClick={this.storePostDataInMainStore}>Post</button>
                        {/*<div className="post-btn-div">*/}
                            {/*<button onClick={this.storePostDataInMainStore} className="post-btn">Post</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

module.exports = {
    view : CreatePostBlock,
    event : oEvent
}