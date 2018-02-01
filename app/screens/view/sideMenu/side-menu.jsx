var React = require('react');

class SideMenu extends React.Component {
    constructor(){
        super();
    }
    render(){

        return(
            <div className="div-position">
                <figure className="profile-figure">
                    <img className="profile-img-dashboard" src="app/themes/basic/images/minion_logo.png"/>
                    <figcaption id="intro1" className="fb-body">Vinay Gaikwad</figcaption>
                    {/*<figcaption id="intro2" className="fb-body">Edit profile</figcaption>*/}
                </figure>
                <div id="intro3" className="fb-body">
                    <div className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/fb_logo3.png"/>
                      <span className="side-span">Welcome</span>
                    </div><br/>
                    <div className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/news_logo1.png"/>
                      <span className="side-span">News Feed</span>
                    </div><br/>
                    <div className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/comments_3.png"/>
                      <span className="side-span">Messages</span>
                    </div><br/>
                    <div className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/events_logo.png"/>
                      <span className="side-span">Event</span>
                    </div><br/>
                    <div className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/default_img_logo1.jpg"/>
                      <span className="side-span">Photos</span>
                    </div><br/>
                    <div className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/search_icon1.png"/>
                      <span className="side-span">Browse</span>
                    </div><br/>
                    <div className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/users_icon2.png"/>
                      <span className="side-span">Find Friends</span>
                    </div><br/>
                    <div>
                      <strong><span className="side-span-title">Groups</span></strong>
                    </div><br/>
                    <div  className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/trek.png"/>
                      <span className="side-span">Trek Group</span>
                    </div><br/>
                    <div className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/family.png"/>
                      <span className="side-span">Family Group</span>
                    </div><br/>
                    <div  className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/biker.svg"/>
                      <span className="side-span">Biker's Group</span>
                    </div><br/>
                    <div  className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/football.png"/>
                      <span className="side-span">Football Club</span>
                    </div><br/>
                    <div>
                      <strong><span className="side-span-title">Games</span></strong>
                    </div><br/>
                    <div  className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/candy_crush.jpg"/>
                      <span className="side-span">Candy Crush</span>
                    </div><br/>
                    <div  className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/farm_ville.jpg"/>
                      <span className="side-span">Farm Ville</span>
                    </div><br/>
                    <div  className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/zynga-poker.png"/>
                      <span className="side-span">Zynga Poker</span>
                    </div><br/>
                    <div className="div-width">
                      <img className="img-side-menu" src="app/themes/basic/images/temple_run.jpg"/>
                      <span className="side-span">Temple Run</span>
                    </div><br/>
                </div>
            </div>
        )
    }
}

module.exports = SideMenu;