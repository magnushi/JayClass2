import React, {useEffect, useState} from 'react';
import Client from '../client.js';
import BlockContent from '@sanity/block-content-to-react';


function Bio (){

  const [bioData, setBioData ] = useState(null);

  useEffect(() => {
      Client.fetch(
          `
          *[_type =='bio']{
              name,
              bio,
              }
          `
          )

      .then((data) => setBioData(data[0]))
      .catch(console.error);
  }, [])

console.log(bioData)
if (!bioData) return <div> loading... </div>


return (
    <div>
      <h2> This is the blog of {bioData.name} </h2>
      <BlockContent
          blocks = {bioData.bio}
          projectId = {Client.clientConfig.projectId}
          dataset = {Client.clientConfig.dataset}
      />
    </div>

  )
};


export default Bio;