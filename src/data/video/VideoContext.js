import React,{createContext} from 'react';

const _state = {
    selectedVideo: {
        id:1,
        title: 'Ocean',
        duration: 18,
        url: 'https://cdn.videvo.net/videvo_files/video/free/2020-05/small_watermarked/3d_ocean_1590675653_preview.webm',
        cover: 'https://images.freeimages.com/images/large-previews/fbb/ocean-1185036.jpg'
        },
        videos: [
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

};
export const videoStore = createContext(_state);
const {Provider} = videoStore;

export function VideoContext(props){
    return (
        <Provider value={[_state ]}>
            {props.children}
        </Provider>
    )
}