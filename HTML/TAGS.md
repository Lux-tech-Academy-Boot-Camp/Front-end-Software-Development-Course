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
	<h3> This is header 3 </h3> 
	<h4> This is header 4 </h4> 
	<h5> This is header 5 </h5> 
	<h6> This is header 6 </h6> 
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
<ul>
	<li>List item 1</li>
	<li>List item 2</li>
	<li>List item 3</li>
</ul>
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

#### **Images:**

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

#### **Videos and Audio:**

1). Video.

```html
<video src = "foo.mp4"  width = "300" height = "200" controls>
   Your browser does not support the <video> element.   
</video>
``` 
### **Note:**

The current HTML5 draft specification does not specify which video formats browsers should support in the video tag. But most commonly used video formats are −

**Ogg** − Ogg files with Thedora video codec and Vorbis audio codec.

**mpeg4** − MPEG4 files with H.264 video codec and AAC audio codec.

You can use **<source>** tag to specify media along with media type and many other attributes.  


**Attribute Specification in Videos:** 

**autoplay**

This Boolean attribute if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data.


**autobuffer**

This Boolean attribute if specified, the video will automatically begin buffering even if it's not set to automatically play.


**controls**

If this attribute is present, it will allow the user to control video playback, including volume, seeking, and pause/resume playback.


**height**

This attribute specifies the height of the video's display area, in CSS pixels.

	
**loop**

This Boolean attribute if specified, will allow video automatically seek back to the start after reaching at the end.


**preload**

This attribute specifies that the video will be loaded at page load, and ready to run. Ignored if autoplay is present.

**poster**

This is a URL of an image to show until the user plays or seeks.


**src**

The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed.
	
**width**

This attribute specifies the width of the video's display area, in CSS pixels.

2)Audio

```html
<audio src = "foo.wav" controls autoplay>
   Your browser does not support the <audio> element.   
</audio>
```