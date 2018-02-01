var React = require('react');

class UpcomingBdaySection extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
        <div className="upBday-block">
          <div className="upBday-block-inside">
            {/*<strong className="update-status-font">Birthday</strong><hr/>*/}
            <div className="bday-font">
              <img className="img-side-menu-bday" src="app/themes/basic/images/bday_logo.jpg"/>
              <span className="bday-text">
                <strong className="update-status-font-bday-1">Vinay Gaikwad</strong>&nbsp;and <a className="update-status-font-bday-2">3 other's</a>
                {/*&nbsp;<strong className="update-status-font-bday-3  ">Birthday Today</strong>*/}
              </span>
            </div>
          </div>
        </div>
    )
  }
}

module.exports = {
  view : UpcomingBdaySection
}