import { useState } from 'react';

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

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum....', author: 'mario', id:1},
        {title: 'Welcome party!', body: 'lorem ipsun....', author: 'collins', id:2},
        {title: 'Web dev top tips', body: 'lorem ipsum.....', author: 'Blessing', id:3}
    ]);

    return(
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;