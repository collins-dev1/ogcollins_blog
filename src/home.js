import { useState } from 'react';

const Home = () => {

    // let name = "Collins"
    const [name, setName] = useState('Collins');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Somto');
        setAge(34);
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name, e.target);
    // }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain('Collins', e)}>Click me again</button> */}
        </div>
     );
}
 
export default Home;