**Reference guide resources:** https://html.com/ 


In this course we will be using HTML5.
 
HyperText Markup Language (aka HTML) is where the magic of web page design begins. HyperText Markup Language is a simple, elegant way to structure content. 

## **Quick notes:**

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc. 

Example of a HTML document. 

```html 

<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
``` 

The first line on the top, ``` <!DOCTYPE html> ```, is a document type declaration and it lets the browser know which flavor of HTML you’re using (HTML5, in this case). It’s very important to stick this in - If you don’t, browsers will assume you don’t really know what you’re doing and act in a very peculiar way. 

To get back to the point, ``` <html> ``` is the opening tag that kicks things off and tells the browser that everything between that and the ``` </html> ``` closing tag is an HTML document. The stuff between ``` <body> ``` and ``` </body> ``` is the main content of the document that will appear in the browser window.


###  **Note**
Not all tags have closing tags like this ```(<html></html>)``` some tags, which do not wrap around content will close themselves. The line-break tag for example, looks like this : ```<br>``` - a line break doesn’t hold any content so the tag merrily sits by its lonely self. These tags are called **self-closing** tags. 

Tags can also have **attributes,** which are extra bits of information. Attributes appear inside the opening tag and their values sit inside quotation marks. They look something like ```<tag attribute="value">Margarine</tag>```. 

**Example:**

```html

<input form-input type="text" name="fname" class="name-element"  id="name-element" required />

```

**Outline:** 

**Tags, Attributes and Elements:** The stuff that makes up HTML.


### **Tags**

The basic structure of an HTML document includes tags, which surround content and apply meaning to it.


### **Elements**
Tags tend not to do much more than mark the beginning and end of an element. Elements are the bits that make up web pages. You would say, for example, that everything that is in between (and includes) the <body> and </body> tags is the body element. As another example, whereas “<title>” and “</title>” are tags, “<title>Rumple Stiltskin</title>” is a title element.


**Page Titles:** Titles For Pages.

**Comments in HTML:** Adding comments in HTML5

**Paragraphs:** Structuring your content with paragraphs.

**Headings:** The six levels of headings.

**Lists:** How to define ordered and unordered lists.

**Links:** How to makes links to other pages, and elsewhere.

**Images:** Adding something a bit more than text.

**Tables:** How to use tabular data.

**Forms:** Text boxes and other user-input thingamajigs.

**Putting It All Together:** Taking all of the above stuff and shoving it together. Sort of in a recap groove.