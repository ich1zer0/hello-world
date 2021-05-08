const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

console.log(DOMPurify.sanitize('<img src=x onerror=alert(1)//>'));
console.log(DOMPurify.sanitize('<svg><g/onload=alert(2)//<p>'));
console.log(DOMPurify.sanitize('<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>'));
console.log(DOMPurify.sanitize('<math><mi//xlink:href="data:x,<script>alert(4)</script>">'));
console.log(DOMPurify.sanitize('<TABLE><tr><td>HELLO</tr></TABL>'));
console.log(DOMPurify.sanitize('<UL><li><A HREF=//google.com>click</UL>'));