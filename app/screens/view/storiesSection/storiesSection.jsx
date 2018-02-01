var React = require('react');

var UpcomingBdaySection = require('../upcomingBdaySection/upcomingBdaySection').view;

class StoriesSection extends React.Component{
  constructor (){
    super();
  }
  render(){
    return(
        <div className="stories-block">
          <div className="stories-block-inside">
            <strong className="update-status-font-updated">Stories</strong>
            <figure className="stories-figure">
              <img className="stories-img-dashboard" src="app/themes/basic/images/minion1.png"/>
              {/*<figcaption id="intro4" className="fb-body"><strong>ABC</strong></figcaption>*/}
              <img className="stories-img-dashboard" src="app/themes/basic/images/minion2.jpg"/>
              {/*<figcaption id="intro5" className="fb-body"><strong>PQR</strong></figcaption>*/}
              <img className="stories-img-dashboard" src="app/themes/basic/images/minion3.jpg"/>
              {/*<figcaption id="intro6" className="fb-body"><strong>XYZ</strong></figcaption>*/}
              <img className="stories-img-dashboard" src="app/themes/basic/images/minion4.jpg"/>
              {/*<figcaption id="intro7" className="fb-body"><strong>LMN</strong></figcaption>*/}
            </figure>
            <div className="div-pad">
                <a id="intro7">ABC</a>
                <a id="intro7">PQR</a>
                <a id="intro7">XYZ</a>
                <a id="intro7">LMN</a>
            </div>
          </div>
          <UpcomingBdaySection /><br/>
        </div>
    )
  }
}

module.exports = {
  view : StoriesSection
};