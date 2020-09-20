import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Client from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import {Link} from 'react-router-dom';


const builder = imageUrlBuilder(Client)

function urlFor(source){
    return (
        builder.image(source)
    )
}

function OnePost (){
    const [postData, setPostData ] = useState(null);
    const { slug } = useParams();

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

    if (!postData) return <div> loading... </div>


    return (
    <div className = 'widget'>
        <h2> {postData.title} </h2>
        <div>
            {postData.mainImage &&
                <img src={urlFor(postData.mainImage)}/>
            }
        </div>
        <div>
            <h3> By {postData.name} on publishdate to be updated </h3>
        </div>
        <div>
            <BlockContent
                blocks = {postData.body}
                projectId = {Client.clientConfig.projectId}
                dataset = {Client.clientConfig.dataset}
            />
        </div>
        <div>
            <a href="/">...back</a>
        </div>
    </div>
  )
};

export default OnePost;


