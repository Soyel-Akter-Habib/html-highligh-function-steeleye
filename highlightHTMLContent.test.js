
  
const highlightHTMLContent = require("./highlightHTMLContent");
  // Unit Tests using Jest
  describe('highlightHTMLContent', () => {
    it('should highlight the specified plainText positions in the htmlContent', () => {
      var htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';
      const plainText = 'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------';
      const plainTextPositions = [
        {
          start: 241,
          end: 247,
        },
        {
          start: 518,
          end: 525,
        },
      ];
      const expectedOutput = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax <mark>Equity</mark> Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility <mark>Equity</mark> scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | <mark>Privacy</mark> Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';
      expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expectedOutput);
    });




    // Test case 2 -->
    
  
    it('should handle multiple plainText positions', () => {
        var htmlContent = '<p><span>Text example with multiple occurrences of the word<br><br>Headline: Energix Energix<br><br>Summary: This is a summary with Energix appearing more than once<br><br>End of the text<br><br></span></p>';
        const plainText = 'Text example with multiple occurrences of the word Headline: Energix Energix Summary: This is a summary with Energix appearing more than once End of the text';
        const plainTextPositions = [
          {
            start: 13,
            end: 17,
          },
          {
            start: 27,
            end: 38,
          },
          {
            start: 51,
            end: 59,
          },
        ];
        const expectedOutput = '<p><span>Text example <mark>with</mark> multiple <mark>occurrences</mark> of the word<br><br><mark>Headline</mark>: Energix Energix<br><br>Summary: This is a summary with Energix appearing more than once<br><br>End of the text<br><br></span></p>';
        expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expectedOutput);
      });


      //Test case 3 -->
    
      it('should handle overlapping plainText positions', () => {
        var htmlContent = '<p><span>Text example with overlapping positions<br><br>Headline: Test example<br><br>Summary: This is a summary with some overlapping words<br><br>End of the text<br><br></span></p>';
        const plainText = 'Text example with overlapping positions Headline: Test example Summary: This is a summary with some overlapping words End of the text';
        const plainTextPositions = [
          {
            start: 5,
            end: 11,
          },
          {
            start: 40,
            end: 47,
          },
          {
            start: 78,
            end: 79,
          },
          {
            start: 101,
            end: 111,
          },
        ];
        const expectedOutput = '<p><span>Text <mark>example</mark> with overlapping positions<br><br><mark>Headline</mark>: Test example<br><br>Summary: This <mark>is</mark> a summary with some <mark>overlapping</mark> words<br><br>End of the text<br><br></span></p>';
        expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(expectedOutput);
      });
    
      it('should not change the htmlContent if no plainText positions are provided', () => {
        const htmlContent = '<p><span>No plainText positions provided</span></p>';
        const plainText = 'No plainText positions provided';
        const plainTextPositions = [];
        expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(htmlContent);
      });
    });