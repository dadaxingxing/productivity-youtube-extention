const whiteList = ['pashamoga'];

const CARD_SELECTORS = [
  'ytd-rich-item-renderer',
  'ytd-video-renderer',
  'ytd-grid-video-renderer',
  'ytd-compact-promoted-video-renderer',
  'ytd-promoted-video-renderer',
  'ytd-display-ad-renderer',
  'ytd-promoted-sparkles-ad-renderer',
  'ytd-ad-slot-renderer'
].join(',');


function blurVideo() {
    const videos = document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer, ytd-search-pyv-renderer');
    
    
        videos.forEach(video => {
        const channelName = video.querySelector("#channel-name a")?.innerText?.trim();
        // const sponsored = video.querySelector(
        //     'ytd-badge-supported-renderer, .badge-style-type-ad, .badge-style-type-simple, .ytd-ad-badge-renderer'
        // )?.innerText?.toLowerCase();

        // Blur thumbnail and omit title otherwise
        if (channelName && whiteList.includes(channelName)){
            video.classList.remove('blurred');
            
        // No blur if channel name in whiteList
        } else {
            video.classList.add('blurred');
        }


    });
};

blurVideo();

const observer = new MutationObserver(() => blurVideo());
observer.observe(document.body, { childList: true, subtree: true });

