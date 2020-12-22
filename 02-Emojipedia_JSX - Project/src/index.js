import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let entry = (
  emojipedia.map(emoji => <div className="term">
  <dt>
    <span>{emoji.name}</span>
    <span className="emoji" role="img">{emoji.icon}</span>
  </dt>
  <dd>{emoji.meaning}</dd>
  </div>)
  )
let app = (
     <div>
       <h1>Emojis</h1>
       <dl className='dictionary'>{entry}</dl>
     </div>

)
ReactDOM.render(app, document.getElementById('root'))