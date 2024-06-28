# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![Desktop](/images/desktop-active-state.jpg)
![Mobile](/images/mobile-active-state.jpg)

### Links

- Solution URL: [Click here to see the solution](https://github.com/manishsindur/Article-preview-component)
- Live Site URL: [Click here to see the live site](https://manishsindur.github.io/Article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

In this project, I learned to use Javascript to toggle the visibility of an element when a button is clicked.

To see how you can add code snippets, see below:

```js
function toggleActiveState() {
	const activeState = document.querySelector(".active_state");
	const nonActiveButton = document.querySelector(".non-active_button");
	const authorInfo = document.querySelector(".michelle");
	const arrow = document.querySelector("path");

	if (!activeState || !nonActiveButton || !authorInfo) {
		console.error("One or more elements not found in the DOM");
		return;
	}

	if (activeState.style.display === "none") {
		activeState.style.display = "flex";
		nonActiveButton.style.backgroundColor = "hsl(214, 17%, 51%)";
		arrow.style.fill = "hsl(210, 46%, 95%)";
		if (window.innerWidth < 1024) {
			authorInfo.style.display = "none";
		}
	} else {
		activeState.style.display = "none";
		authorInfo.style.display = "flex";
		nonActiveButton.style.backgroundColor = "";
		arrow.style.fill = "";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const nonActiveButton = document.querySelector(".non-active_button");
	const activeState = document.querySelector(".active_state");
	const activeButton = document.querySelector(".active_button");

	if (nonActiveButton) {
		nonActiveButton.addEventListener("click", toggleActiveState);
	} else {
		console.error("Non-active button not found in the DOM");
	}

	if (activeState) {
		activeState.style.display = "none"; // Set initial state to "none"
	} else {
		console.error("Active state element not found in the DOM");
	}

	if (activeButton) {
		activeButton.addEventListener("click", toggleActiveState);
	} else {
		console.error("Active button not found in the DOM");
	}
});
```

## Author

- Frontend Mentor - [@manishsindur](https://www.frontendmentor.io/profile/manishsindur)
- Twitter - [@manishsindur](https://www.twitter.com/manishsindur)
