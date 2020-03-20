function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile('index').evaluate()
  htmlOutput
    .setTitle('弓道スケジューラー')
    .setFaviconUrl('https://drive.google.com/uc?id=1gJ7C0L-qlelarZym7u5DLJjmOBkV5Yl0&.png');
  return htmlOutput;
}

function myFunction() {
  
}
