import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
// import Layout from '../layout/Layout';
// import Title from '../basics/Title';
import YoutubeList from '../pages/YoutubeList';
import YoutubeSearch from './YoutubeSearch';




function Youtube(){
    const [lists, videos] = useState([]);
    const search =(query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=AIzaSyC_i_12JR0_B5jwP6cOs-riylqZXS_1CFw`, requestOptions)
            .then(response => response.json())
            .then(result => videos(result.items))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=webstoryboy&type=video&key=AIzaSyC_i_12JR0_B5jwP6cOs-riylqZXS_1CFw", requestOptions)
            .then(response => response.json())
            .then(result => videos(result.items))
            .catch(error => console.log('error', error));
    },[]);

    return (
        <div>
            <Header />
            <div className="youtube__cont">
                 <YoutubeSearch onSearch={search}/> //받아오는거
                <YoutubeList lists={lists} />//보내주는거
            </div>
        </div>
    );
}

// function Youtube(){
//     return (
//         <>
//             <Header />
//             <Layout>
//                 <section id="youtubeCont">
//                     <div className="container">
//                         <Title text={["Youtube", "Site"]} />  
//                         <div className="youtube__cont"></div>
//                     </div>
//                 </section>
//             </Layout>
//         </>
//     );
// }

export default Youtube;