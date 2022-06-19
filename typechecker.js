const sentenceTag = document.querySelector("input[name=sentence]");

const typesizeTag = document.querySelector("input[type=range]");
const typesizeOutput = document.querySelector("span.typesize-output");

const lineheightTag = document.querySelector("input[name=lineheight]");
const lineheightOutput = document.querySelector("span.lineheight-output");

const italicTag = document.querySelector("input[type=checkbox]");

const typefaceTag = document.querySelector("select[name=typeface]");

const fontweightTag = document.querySelector("input[name=fontweight]")
const fontweightOutput = document.querySelector("span.fontweight-output");

const colorTags = document.querySelectorAll("div.colors div");

const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

sentenceTag.addEventListener("keyup", () => {
	if (sentenceTag.value) {
		outputTag.value = sentenceTag.value;
	} else {
		outputTag.value = originalText;
	}
});

outputTag.addEventListener("keyup", () => {
	sentenceTag.value = outputTag.value;
});

typesizeTag.addEventListener("input", () => {
  outputTag.style.fontSize = typesizeTag.value + "px";
  typesizeOutput.textContent = typesizeTag.value + " pixels";
})

fontweightTag.addEventListener("input", () => {
	outputTag.style.fontWeight = fontweightTag.value;
	fontweightOutput.textContent = fontweightTag.value;
});

lineheightTag.addEventListener("input", () => {
	outputTag.style.lineHeight = lineheightTag.value;
	lineheightOutput.textContent = lineheightTag.value;
});

italicTag.addEventListener("change", () => {
	console.log("touching")
	if (italicTag.checked) {
		outputTag.style.fontStyle = "italic"
	} else {
		outputTag.style.fontStyle = "normal";	
	}
})

typefaceTag.addEventListener("input", () => {
	outputTag.style.fontFamily = typefaceTag.value;
})

colorTags.forEach(colorTag => {
	colorTag.addEventListener('click', () => {
		outputTag.style.backgroundColor = colorTag.style.backgroundColor;
		outputTag.style.color = colorTag.style.color;

		colorTags.forEach(tag => tag.classList.remove("selected"))
		colorTag.classList.add("selected")
	})
})
