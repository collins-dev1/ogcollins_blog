import Navbar from './navbar';
import Home from './home';

// function App() {
//   const title = 'Welcome to the new blog';
//   const like = 50;
//   const link = "https://facebook.com";
//   const person = {name: 'collins', age: 40};
//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{title}</h1>
//         <p>Liked { like } times</p>

//         <p>{person}</p>
//         <p>{10}</p>
//         <p>{"Hello, Everyone"}</p>
//         <p>{[1,2,3,4,5]}</p>
//         <p>{Math.random() * 20}</p>

//         <a href="https://www.google.com">Google Site</a>
//         <br></br>
//         <a href={link}>Facebook Site</a>
//       </div>
//     </div>
//   );
// }

function App(){
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>

    </div>
  );
}
export default App;
