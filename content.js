const whiteList = [];

function blurVideo() {
    const videos = document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer');

    videos.forEach(video => {
        const channelName = video.querySelector("#channel-name a")?.innerText?.trim();

        // No blur if channel name in whiteList
        if (channelName && whiteList.includes(channelName)){
            video.classList.remove('blurred');
        
        // Blur thumbnail and omit title otherwise
        } else {
            video.classList.add('blurred');
        }


    });
};

blurVideo();

const observer = new MutationObserver(() => blurVideo());
observer.observe(document.body, { childList: true, subtree: true });