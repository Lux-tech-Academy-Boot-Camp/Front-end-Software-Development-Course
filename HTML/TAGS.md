### **Examples of HTML Tags and Elements**  


#### **Page Titles:**

```html
<title>
	Page Title
</title>
```

#### **Paragraphs:**

```html
	<p> This is a paragraph </p>
```	

#### **Headings:**

**The six levels of headings.**

```html
	<h1> This is header 1 </h1>
	<h2> This is header 2 </h2>
	<h2> This is header 2 </h2> 
	<h2> This is header 2 </h2> 
	<h2> This is header 2 </h2> 
	<h2> This is header 2 </h2> 
```

#### **Lists:**

**How to define ordered, unordered and description lists.**

1). Order List.

```html
<ol>
	<li>List item 1</li>
	<li>List item 2</li>
	<li>List item 3</li>
</ol>
```

2). Unorder List.

```html
<ol>
	<li>List item 1</li>
	<li>List item 2</li>
	<li>List item 3</li>
</ol>
```

3). description lists

> **dl** gets the ball rolling, similar to the **ul** and **ol** elements, establishing the list. Rather than containing li elements, though, description lists have **dt** elements, which are the terms, followed by dd elements, which are the descriptions associated to the **dt** elements. 

```html
<dl>
    <dt>HTML</dt>
    <dd>Abbreviation for HyperText Markup Language - a language used to make web pages.</dd>
</dl>    
```    


#### **Links:**

How to makes links to other pages, and elsewhere.

```html
<a class="link" href="https://github.com" rel="nofollow">GitHub</a>
```

#### **Images, Videos and Audio:**

```html
<img src="image.jpg" class="img"  id="img" alt="diplay when image is not available"> 
```

### **Tables:**

How to use tabular data.

```html
<table>
	<th>Table header</th>
	<!--Table Row -->
	<tr>
		<!--table Data  -->
		<td> Table Data</td>
	</tr>
</table>
```

#### **Forms:**

```html
<form>
	<input type="text" name="fname" required>
</form>
```