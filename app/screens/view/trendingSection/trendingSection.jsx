var React = require('react');

class TrendingSection extends React.Component {
  constructor (){
    super();

  }
  render(){

    return(
        <div className="trending-block">
          <div className="trending-block-inside">
            <strong className="update-status-font-updated">Trending</strong>
            <div className="trending-block-pad-color">
              <img  className="img-side-menu-trending" src="app/themes/basic/images/trending.jpg" /><strong className="view-post-font-comment">ABC <br/>
                <label className="label-view-comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
              </strong><br/><br/>
              <img  className="img-side-menu-trending" src="app/themes/basic/images/trending.jpg" /><strong className="view-post-font-comment">PQR <br/>
                 <label className="label-view-comment">Various versions have evolved over the years, sometimes by accident.</label>
               </strong><br/><br/>
              <img  className="img-side-menu-trending" src="app/themes/basic/images/trending.jpg" /><strong className="view-post-font-comment">XYZ <br/>
                 <label className="label-view-comment">There are many variations of passages of Lorem Ipsum available.</label>
               </strong><br/><br/>
              <img  className="img-side-menu-trending" src="app/themes/basic/images/trending.jpg" /><strong className="view-post-font-comment">LMN <br/>
                 <label className="label-view-comment">Contrary to popular belief, Lorem Ipsum is not simply random text.</label>
               </strong><br/><br/>
              <img  className="img-side-menu-trending" src="app/themes/basic/images/trending.jpg" /><strong className="view-post-font-comment">UVW <br/>
                 <label className="label-view-comment">Letraset sheets containing Lorem Ipsum passages.</label>
               </strong><br/><br/>


            </div>

          </div>
        </div>
    )
  }

}


module.exports = {
  view:TrendingSection
};