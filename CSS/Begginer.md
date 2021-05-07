### **Class and ID Selectors**

In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”).

```css
/* ID selector in css */
#top {
    background-color: #ccc;
    padding: 20px
}

/* Class selector in CSS */
.intro {
    color: red;
    font-weight: bold;
} 

/* Additional selector */

[text]{
	color: red;
    font-weight: bold;

}
``` 

### **Ethans Formula for Calculating Flexible Layout.**

Ethan pointed out an easy formula to help identify the proportions of a flexible layout using relative values.

The formula is based around taking the target width of an element and dividing it by the width of it’s parent element. The result is the relative width of the target element.

**i.e:**
```css
target ÷ context = result

```