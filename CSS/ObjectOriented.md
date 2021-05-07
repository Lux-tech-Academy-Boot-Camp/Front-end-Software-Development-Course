## **Object Oriented CSS (OOCSS)**

The Object Oriented CSS methodology was pioneered by Nicole Sullivan in her work with writing styles for larger websites. Object Oriented CSS identifies two principles that will help build scalable websites with a strong architecture and a reasonable amount of code.


**These two principles include:**

- Separate structure from skin.
- Separate content from container.

Overall separating structure from skin includes abstracting the layout of an element away from the theme of a website. The structure of a module should be transparent, allowing other styles to be inherited and displayed without conflict. Most commonly this requires a solid grid and layout structure, along with well crafted modules.

Separating content from the container involves removing the dependency of a parent element nesting children elements. A heading should look the same regardless of its parent container. To accomplish this, elements need to inherit default styles, then be extended with multiple classes as necessary.

#### **HTML.**
```
<div class="alert alert-error">
  <p class="msg">...</p>
</div>
```

              
### **CSS.**

```
.alert {...}
.alert-error {...}
.msg {...}
```
              
Object Oriented CSS advocates building a component library, staying flexible, and utilizing a grid. These are good ground rules, and they can help you avoid the need to add additional styles every time you add a new page or feature to a website.

Scalable & Modular Architecture for CSS
Along the same line of Object Oriented CSS is the Scalable and Modular Architecture for CSS methodology developed by Jonathan Snook. The Scalable and Modular Architecture for CSS promotes breaking up styles into five core categories, including:

Base
Layout
Module
State
Theme
The base category includes core element styles, covering the general defaults. The layout category then identifies the sizing and grid styles of different elements, determining their layout. Module styles are more specific styles targeting individual parts of the page, such as navigation or feature styles. The state styles are then used to augment or override other styles in the event that a module includes an alternate state, an active tab for example. Lastly, the theme category may be added which could include styles based around the skin, or look and feel, of different modules.

HTML
1
2
3
4
<div class="alert is-error">
  <p>...</p>
</div>

              
CSS
1
2
3
4
5
.alert {...}
.alert.is-error {...}
.alert p {...}
.alert.is-error p {...}

              
In the example above the alert class falls into the module category while the is-error class falls into the state category. Styles from each of these categories are then inherited as necessary.

Choosing a Methodology
Choosing which methodology to use, if any, is completely up to you and what you feel is best for a given website. Generally speaking, a solid mix of both OOCSS and SMACSS works well, borrowing principles from each methodology as you prefer.