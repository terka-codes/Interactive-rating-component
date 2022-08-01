# Interactive rating component - Frontend Mentor

## Welcome! 👋

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Quick video demonstration 👩‍💻

https://user-images.githubusercontent.com/107133029/182106097-bb44b0bf-3879-4863-b698-6ceec63d8b7e.mov

## Table of contents

- [Overview](#overview)
  - [Links to the solution](#links-to-solution)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Lessons to remember](#lessons-to-remember)
- [Author](#author)

## Overview

### Links to solution

- Solution: [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/interactive-rating-component-using-flexbox-QvhfboZO15)
- Live site: [here](https://terka-codes.github.io/Interactive-rating-component/)

### Screenshot

![NTF card Component](https://user-images.githubusercontent.com/107133029/182108640-0c98593c-8277-42bd-a5ec-f617b8c12c0a.png)
![NTF card Component (1)](https://user-images.githubusercontent.com/107133029/182108662-4582294f-ff8b-4271-8c22-3c6c03d877b3.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavsaScript basic knowladge

### What I learned

This was the first Frontend Mentor challenge where I used JS, and honestly, I have to say I thought it would be more complicated. After doing, in my opinion, way more complex solo challenges on Scrimba, this was just like a bit of fun. But it wasn't all that easy. I had to google how to make a button to stay active and then figure out how to log it out. But it wasn't that difficult.

I am pleased that I remembered to start with the mobile version this time. It is so much easier that way. 

I also struggled with a gradient blur drop shadow on an element, but thankfully with help from the wonderful members of Frontend mentor, I learned how to do that. It should have been as the code below. I completely forgot I could add a four parameter into the styling. 

```css
box-shadow: 0px 0px 100px 20px rgba(0, 0, 0, 0.1)
```

This is also the fun new JavaScript I have learned. 

```js
let current = document.getElementsByClassName("active")
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "")
        }
        
        this.className += " active"

        selectedRating = this.value
```

### Lessons to remember

- box-shadow had 4 parameters! 🐶
- Mobile first pays off 😌
- JS is fun 👩‍💻

## Author

- Frontend Mentor - [@terka-codes](https://www.frontendmentor.io/profile/terka-codes)
- Twitter: [@TerkaCodes](https://twitter.com/TerkaCodes)
