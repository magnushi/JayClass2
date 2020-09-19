import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Client from '../client.js';
import Bio from '../Bio.js';
import Books from '../Books.js';


function Allposts (){
    const me = 'Magnus Hillestad'

    return (
    <div className = 'widget'>
        <h1> {me} Homepage </h1>
        <Bio />
        <h1> Here is my blog:</h1>
    
        {/*
        {posts.map(post => (
            <h4> {post.toUpperCase()} </h4>
        ))}
        */}

        <Books /> 

    </div>
  )
};


export default Allposts;


