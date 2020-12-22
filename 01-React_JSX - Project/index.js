const htmlDOM = document.getElementById('example');

const arrayNames = ['John', 'Trump', 'Biden', 'Corona'];
const htmlArray =["Congragulations!", 'React is awesome'];

const names = arrayNames.map((item, i)=><li key={i} className={i===0 ? 'first' : i===1 ? 'second': 'third'}>{item}</li>)
const text = (
  <div>
    <div className='card'>
      <h1>Hello World</h1>
      <ol>{names}</ol> 
    </div>
    <div>
      <h2>{htmlArray[0]}</h2>
      <h3>{htmlArray[1]}</h3>
    </div>
  </div>
  )




ReactDOM.render(text,htmlDOM);