// shared.js

function convertDates() {
  // /\s*(令和|平成|昭和|大正|明治)\s*(\d+)\s*年\s*/gu;
  const japaneseDateRegex =
    /\s*(\u4EE4\u548C|\u5E73\u6210|\u662D\u548C|\u5927\u6B63|\u660E\u6CBB)\s*(\d+)\s*\u5E74\s*/gu;

  const lookup = {
    "\u4EE4\u548C": 2018, // 令和
    "\u5E73\u6210": 1988, // 平成
    "\u662D\u548C": 1925, // 昭和
    "\u5927\u6B63": 1911, // 大正
    "\u660E\u6CBB": 1867, // 明治
  };

  function convertTheDates() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue != null) {
        node.nodeValue = node.nodeValue.replace(
          japaneseDateRegex,
          (match, era, year) => {
            console.log(`Era: ${era}, Year: ${year}`);
            return `${lookup[era] + parseInt(year)}\u5E74`;
          }
        );
      }

      node.nodeValue = node.nodeValue.replaceAll("\u4E07", "0000"); // replace 万 with 0000
    }
  }

  convertTheDates();
}
