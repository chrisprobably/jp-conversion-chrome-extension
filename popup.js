document.addEventListener("DOMContentLoaded", () => {
  const convertDatesButton = document.getElementById("convertDates");
  if (convertDatesButton) {
    convertDatesButton.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: convertDates,
        });
      });
    });
  } else {
    console.error("convertDates button not found");
  }
});
