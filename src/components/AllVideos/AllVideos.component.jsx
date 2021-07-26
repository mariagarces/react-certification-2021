import React, { useRef } from 'react';
import Video from '../Video/Video.component'
import videos from '../../mocks/youtube-videos.json';

import {
    StyledVideos
} from './AllVideos.styles';

function AllVideos() {

    return (
        <>
            <h2>Videos</h2>
            <StyledVideos>
                {videos.items.map((video, i) => (
                    <Video
                        key={i}
                        imageUrl={video.snippet.thumbnails.high.url}
                        etag={video.etag}
                        title={video.snippet.title}
                        channelTitle={video.snippet.channelTitle}
                        publishedDate={video.snippet.publishedAt}
                    />
                ))}
            </StyledVideos>
        </>
    );
}

export default AllVideos;