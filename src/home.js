import { useState } from 'react';
import BlogList from './bloglist';

const Home = () => {

    // let name = "Collins"
    // const [name, setName] = useState('Collins');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('Somto');
    //     setAge(34);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name, e.target);
    // }

    // return ( 
    //     <div className="home">
    //         <h2>Homepage</h2>
    //         <p>{name} is {age} years old</p>
    //         <button onClick={handleClick}>Click me</button>
    //         <button onClick={(e) => handleClickAgain('Collins', e)}>Click me again</button>
    //     </div>
    //  );

    // Setting up my Blog with the help of useState Method
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum....', author: 'mario', id:1},
        {title: 'Welcome party!', body: 'lorem ipsun....', author: 'collins', id:2},
        {title: 'Web dev top tips', body: 'lorem ipsum.....', author: 'Blessing', id:3}
    ]);

    // Delete Function for deleting my Blog
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    return(
        <div className="home">
            {/* Sending variables and function to the bloglist file */}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            
            {/* Viewing my blog one by one method */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'collins')} title="Collins's Blogs!" handleDelete={handleDelete}/> */}
        </div>
    );
}
 
export default Home;