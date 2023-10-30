# react-show-my-divs

## Simplifies visual debugging by recursively colorizing any HTML elements.

### This is a visual debugging tool for react developers.

`npm install react-show-my-divs`

`import { ShowMyDivs } from "react-show-my-divs";`

### Wrap anything in `<ShowMyDivs> ... </ShowMyDivs>` and your divs will shine!

*Is your page layout off, but you can´t find the reason?*

Colorize parts of, or your entire page layout in one go with react-show-my-divs.

-No more adding `background-color: 'red'` style to components to see how they fit in your layout.

*You can also*

* Supply the HTML element types you wish to colorize as a string array in the HTMLTypeNames prop.

* Supply your own color array woth the color prop.

* Render a 1px. border around every element with the borders prop.

*_Note: This component injects backgroundColor and borderColor CSS prop into your elements of choice.
That means that it will only colorize on elements that natively have these CSS props._*

## Props

| prop          | example value            | default          | type            | required |
|---------------|--------------------------|------------------|-----------------|----------|
| HTMLTypeNames | ["div","li"]             | div              | string[]        | no       |
| colors        | ["red","#00FF00","blue"] | some cool colors | string[]        | no       |
| borders       | true                     | false            | boolean         | no       |

 