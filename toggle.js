const toggleBtn = document.getElementById("toggleBtn");

// Update button text based on current state when popup opens
chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
    toggleBtn.textContent = enabled ? "Turn Blur Off" : "Turn Blur On";
});

// Toggle button click
toggleBtn.addEventListener("click", async () => {
    const { enabled } = await chrome.storage.sync.get("enabled");
    const newState = !enabled;

    // Save new state
    await chrome.storage.sync.set({ enabled: newState });

    // Update button text
    toggleBtn.textContent = newState ? "Turn Blur Off" : "Turn Blur On";
});
