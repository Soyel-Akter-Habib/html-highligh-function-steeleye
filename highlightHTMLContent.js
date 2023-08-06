// function highlightHTMLContent(htmlContent, plainText, positions) {
//   const words = plainText.split(' ');
//   let editedHtml = htmlContent;

//   // positions.forEach(pos => {
//     for(const pos of positions){
//     // const [startIndex, endIndex] = pos;
//     const startIndex = pos.start;
//     const endIndex = pos.end;

//     if (startIndex >= 0 && endIndex >= 0 && endIndex < words.length) {
//       const editedWord = words[startIndex];
//       const wordToReplace = words[endIndex];
//       const startTag = "<mark>";
//       const endTag = "</mark>";
//       const replacement = `${startTag}${editedWord}${endTag}`;
//       editedHtml = editedHtml.replace(new RegExp(`\\b${wordToReplace}\\b`, 'g'), replacement);
//     }
//   }

//   return editedHtml;
// }



// function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
//   // Iterate through each object in plainTextPositions
//   for (const position of plainTextPositions) {
//     const { start, end } = position;
//     const word = plainText.substring(start, end);

  

//     // Creating a regular expression pattern to match the word in htmlContent
//     const pattern = new RegExp(`\\b${word}\\b`, 'gi');

//     // Replacing the matched word with the highlighted version using the <mark> tag
//     htmlContent = htmlContent.replace(pattern, `<mark>${word}</mark>`);
//   }

//   return htmlContent;
// }




function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  let highlightedHTML = htmlContent;

  // Helper function to convert plainText position to htmlContent position
  function getCorrectPosition(start, end) {
    const startText = plainText.slice(0, start);
    const startPos = htmlContent.indexOf(startText);
    const highlightLength = plainText.slice(start, end).length;
    const endPos = startPos + highlightLength;
    return { startPos, endPos };
  }

  // Sort the plainTextPositions array in descending order
  plainTextPositions.sort((a, b) => b.start - a.start);

  // Iterate through each position object and highlight the corresponding content

  for (const position of plainTextPositions) {
    const start = position.start;
    const end = position.end;
    const { startPos, endPos } = getCorrectPosition(start, end);
    var diff=startPos-start;
    const highlightTag1 = '<mark>';
    const highlightTag2 = '</mark>';
    highlightedHTML =
      highlightedHTML.slice(0, startPos+diff) +
      highlightTag1 +
      highlightedHTML.slice(startPos+diff, endPos+diff) +
      highlightTag2 +
      highlightedHTML.slice(endPos+diff);

      
  }

  return highlightedHTML;
}

// Example usage:
const htmlContent = '<p><span>Hi David<br>...</span></p>';
const plainText =
  'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity...';
const plainTextPositions = [
  { start: 8, end: 13 },
  { start: 24, end: 31 },
];

const highlightedContent = highlightHTMLContent(
  htmlContent,
  plainText,
  plainTextPositions
);
console.log(highlightedContent);




module.exports = highlightHTMLContent;