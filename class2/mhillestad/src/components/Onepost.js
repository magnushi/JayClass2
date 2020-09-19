import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Client from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(Client)

function urlFor(source){
    return (
        builder.image(source)
    )
}

function OnePost (){
    const [postData, setPostData ] = useState(null);
    const {slug} = useParams();

    useEffect(() => {
        Client.fetch(
            `*[slug.current == $slug]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage":author->image
            }`,
            {slug}
        )
        .then((data) => setPostData(data[0]))
        .catch(console.error);
    }, [slug])

    return (
    <div className = 'widget'>
        <h2> {postData.title} </h2>
    </div>
  )
};

export default OnePost;


