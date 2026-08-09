document.addEventListener('DOMContentLoaded', function () {
    const fillBtn = document.getElementById('fillBtn');
    const clearBtn = document.getElementById('clearBtn');

    fillBtn.addEventListener('click', async function () {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.tabs.sendMessage(tab.id, { action: 'fillFields' });
    });

    clearBtn.addEventListener('click', async function () {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.tabs.sendMessage(tab.id, { action: 'clearFields' });
    });
});