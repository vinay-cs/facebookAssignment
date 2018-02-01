var React = require('react');

class PeopleYouMayKnow extends React.Component{
  constructor (){
    super();
  }
  render(){
    return(
        <div className="people-block">
          <div className="people-block-inside">
            <strong className="update-status-font-updated">People You May Know</strong>
            <div className="trending-block-pad-color">
              <img  className="img-side-menu-people" src="app/themes/basic/images/minion_logo2.jpg" />
              <strong className="people-text-align">Chinmay Desai <br/>
                <label className="label-view-comment">Vishal Kamble is mutual friend</label><br/><br/>
                <button> + Add friend</button>
              </strong><br/><br/>
              <img  className="img-side-menu-people" src="app/themes/basic/images/minion_logo6.jpg" />
              <strong className="people-text-align">Vidya Gaikwad <br/>
                <label className="label-view-comment">Gauri Dixit is mutual friend</label><br/><br/>
                <button> + Add friend</button>
              </strong><br/><br/>
            </div>

          </div>
        </div>
    )
  }
}

module.exports={
  view:PeopleYouMayKnow
}