function highlightHTMLContent(htmlContent, plainText, plainTextPositions){

  const tagleft = '<mark>';
  const tagRight = '</mark>';
  let diff = 0;
  for(let i of plainTextPositions){
    const startPos = i.start;
    const endPos = i.end;
    
    var highlightedContent  = htmlContent.slice(0,startPos+diff)+tagleft+htmlContent.slice(startPos+diff,endPos+diff)+tagRight+htmlContent.slice(endPos+diff+1);// 6 is the size of <mark> and 7 is for </mark>, everytime we put it, we increase it.

    diff+=13; // at the end, two mark is added so total size is 13
    

  }

  return highlightedContent;

}






module.exports = highlightHTMLContent;