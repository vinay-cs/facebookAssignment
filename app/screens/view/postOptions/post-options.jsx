var React = require("react");

class PostOptions extends React.Component{
  constructor (){
    super();
  }
  render(){
    return(
        <div>
          <ul>
            <li><a>ABC</a></li>
            <li><a>ABC</a></li>
            <li><a>ABC</a></li>
            <li><a>ABC</a></li>
          </ul>
        </div>
    )
  }

}

module.exports = {
  view : PostOptions
}