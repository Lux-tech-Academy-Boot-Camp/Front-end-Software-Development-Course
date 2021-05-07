#### **Declaring Variables 	in CSS .**
```css
:root{
	--red: #ff6f69;
	--yellow: ffcc5c;
	--mypink: pink;
}
```


#### **Consuming Variables in CSS.**
```css
body{
	background:  var(--yelow);
}
```


#### **Grouping in CSS.**
```css
h2 {
    color: red;
}

.thisOtherClass {
    color: red;
}

.yetAnotherClass {
    color: red;
} 
```

- In Grouping we separate selectors with commas (,) Alternative of the above 10 lines of code is as shown below:

```css
h2, .thisOtherClass, .yetAnotherClass {
    color: red;
}
```

#### **Nesting in CSS**

If the CSS is structured well,there shouldn’t be a need to use many class or ID selectors. This is because you can specify properties to selectors within other selectors.


```css
#top {
    background-color: #ccc;
    padding: 1em
}

#top h1 {
    color: #ff0;
}

#top p {
    color: red;
    font-weight: bold;
} 

```