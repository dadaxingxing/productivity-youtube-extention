// Set default enabled flag if none exists
chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
    toggleBlur(); // run once at start
});

// Listen for changes (like when toggle button is clicked)
chrome.storage.onChanged.addListener((changes) => {
    if (changes.enabled) {
        toggleBlur();
    }
});


const whiteList = ["The Resolve Effect"];

function blurVideo() {
    const videos = document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer, ytd-search-pyv-renderer');
    
        videos.forEach(video => {
        const channelName = video.querySelector("#channel-name a")?.innerText?.trim();
        
        // Blur thumbnail and omit title otherwise
        if (channelName && whiteList.includes(channelName)){
            video.classList.remove('blurred');
            
        // No blur if channel name in whiteList
        } else {
            video.classList.add('blurred');
        }

    });
};

function toggleBlur() {
    chrome.storage.sync.get("enabled", ({ enabled }) => {
        if (enabled) {
            blurVideo();
        } else {
            const videos = document.querySelectorAll('.blurred');
            videos.forEach(video => video.classList.remove('blurred'));
        }
    });
};

toggleBlur();

const observer = new MutationObserver(() => toggleBlur());
observer.observe(document.body, { childList: true, subtree: true });

