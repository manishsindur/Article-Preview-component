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
