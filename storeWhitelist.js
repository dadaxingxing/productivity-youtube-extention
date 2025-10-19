
// document.getElementById('addChannelBtn').addEventListener('click', () => {
//     const input = document.getElementById('channelInput');
//     const channelName = input.value.trim();

//     if (channelName) {
//         chrome.storage.sync.get({ whiteList: [] }, (data) => {
//             const updatedList = [...new Set([...data.whiteList, channelName])]; // avoid duplicates
//             chrome.storage.sync.set({ whiteList: updatedList }, () => {
//                 document.getElementById('status').innerText = `${channelName} added!`;
//                 input.value = '';
//             });
//         });
//     }
// });
