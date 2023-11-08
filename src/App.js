import './App.css';

function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;
  const link = "http://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <h1> {title} </h1>
        <p>Liked { likes } times</p>
        <p>{10+20}</p>
        <p>{Math.floor(Math.random() * (10) ) }</p>
        <a href={link} >Google </a>
      </div>
    </div>
  );
}

export default App;
