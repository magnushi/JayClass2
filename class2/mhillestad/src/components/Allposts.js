import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Client from '../client.js';
import Bio from '../Bio.js';
import Books from '../Books.js';


function Allposts (){
    const me = 'Magnus Hillestad'

    const [allPostData, setAllPostData ] = useState(null);

    useEffect(() => {
        Client.fetch(
            `
            *[_type =='post']{
                title,
                "name": author->name,
                slug,
                }
            `
            )

        .then((data) => setAllPostData(data))
        .catch(console.error);
    }, [])

    return (
    <div className = 'widget'>
        <h1> mhillestad.com </h1>
        <Bio />
        <h3> Reflections:</h3>
    

        {allPostData && allPostData.map((post, index) => (
            <div>
            <p className = 'blogTitle'>
            <Link to={"/" + post.slug.current} key={post.slug.current}>
                {post.title}
            </Link>
            </p>
            </div>
        ))}

        <Books /> 

    </div>
  )
};


export default Allposts;


