document.addEventListener('DOMContentLoaded', function () {
    const fillBtn = document.getElementById('fillBtn');
    const forceFillBtn = document.getElementById('forceFillBtn');
    const clearBtn = document.getElementById('clearBtn');

    fillBtn.addEventListener('click', async function () {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.tabs.sendMessage(tab.id, { action: 'fillFields' });
    });

    // NEW: Force Fill Action
    forceFillBtn.addEventListener('click', async function () {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.tabs.sendMessage(tab.id, { action: 'forceFillFields' });
    });

    clearBtn.addEventListener('click', async function () {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.tabs.sendMessage(tab.id, { action: 'clearFields' });
    });
});