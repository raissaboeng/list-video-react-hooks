import React from 'react';
import Video from './Video';

const _list = [
    {
        id:1,
        title: 'Ocean',
        duration: 18,
        url: 'https://cdn.videvo.net/videvo_files/video/free/2020-05/small_watermarked/3d_ocean_1590675653_preview.webm',
        cover: 'https://images.freeimages.com/images/large-previews/fbb/ocean-1185036.jpg'
    },
    {
        id:2,
        title: 'Ocean',
        duration: 18,
        url: 'https://cdn.videvo.net/videvo_files/video/free/2020-05/small_watermarked/3d_ocean_1590675653_preview.webm',
        cover: 'https://images.freeimages.com/images/large-previews/fbb/ocean-1185036.jpg'
    },{
        id:3,
        title: 'Ocean',
        duration: 18,
        url: 'https://cdn.videvo.net/videvo_files/video/free/2020-05/small_watermarked/3d_ocean_1590675653_preview.webm',
        cover: 'https://images.freeimages.com/images/large-previews/fbb/ocean-1185036.jpg'
    }
]

export default function VideoList(){

    function onClick(video){
        console.log(video);
    }

    return(
        <ul className="list">
            {_list.map(item => (
                <Video key={item.id} onClick={onClick} video={item} />
            ))}
        </ul>
    );
}