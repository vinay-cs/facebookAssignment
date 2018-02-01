var React = require('react');
class HeaderNavBar extends React.Component{
    constructor(){
        super();
    }

    render(){
       return(
            <div id="font-family-new" className="header-nav">
                <div className="header-nav-div-title" >
                    <img className="fb-img-main" src="app/themes/basic/images/fb_logo.jpg"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="input-size" type="text" placeholder="Search"/>
                    <button className="btn"><img className="search-btn" src="app/themes/basic/images/search_icon3.png"/></button>
                    {/*<img className="button-holder" src="app/themes/basic/images/search_icon.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                    <img className="profile-img-main" src="app/themes/basic/images/minion_logo.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a className="pad4">Vinay</a><a className="pad6">|</a><a className="pad5">Home</a>
                        <img className="nav-img-main pad1" src="app/themes/basic/images/users_icon_1.png"/>
                        <img className="nav-img-main pad2" src="app/themes/basic/images/msg.png"/>
                        <img className="nav-img-main pad3" src="app/themes/basic/images/globe_icon_1.png"/>

                        <img className="nav-img-main pad7" src="app/themes/basic/images/quest_mark1.png"/>
                        <img className="nav-img-main pad8" src="app/themes/basic/images/collapse.png"/>
                </div>
            </div>
        )
    }
}

module.exports = HeaderNavBar;