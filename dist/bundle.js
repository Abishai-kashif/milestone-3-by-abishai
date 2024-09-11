/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generateResume.ts":
/*!*******************************!*\
  !*** ./src/generateResume.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateResume": () => (/* binding */ generateResume)
/* harmony export */ });
// Implementation
function processInput(input, type) {
    if (type === "skills") {
        // Process skills input
        const cleanedStr = input.replace(/[,;]+/g, ",");
        const skills = cleanedStr
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill.length > 0);
        return skills;
    }
    else {
        // Process phone input
        const cleanedStr = input.replace(/\D+/g, "");
        const isValid = cleanedStr.length > 7 && cleanedStr.length < 15;
        return isValid ? cleanedStr : "Invalid number";
    }
}
function generateResume(name, email, phone, education, skills, workExperience, profilePicture, github, linkedin) {
    return `
	<section class="personal-info">
                <figure>
                    <img
                        src="${profilePicture
        ? URL.createObjectURL(profilePicture)
        : "images/default-profile-picture.jpeg"}"
                        alt="Profile Picture"
                        width="150"
                        height="180"
                    />
                    <figcaption><h1 id="name">${name}</h1></figcaption>
                </figure>

                <div id="contact-details">
                    <p id="email">
                        <a href="mailto:${email}"
                            ><i class="bx bxs-envelope"></i> Email</a
                        >
                    </p>

                    <p id="github">
                        <a href="${github}"
                            ><i class="bx bxl-github"></i> Github</a
                        >
                    </p>

                    <p id="linkedIn">
                        <a
                            href="${linkedin}"
                            ><i class="bx bxl-linkedin-square"></i> LinkedIn</a
                        >
                    </p>

                    <p id="number">
						<a href="tel:${processInput(phone, "phone")}"
                            >${processInput(phone, "phone")} <i class="bx bxs-phone"></i
                        ></a>
                    </p>
                </div>
            </section>

            <section class="education">
                <h2>Education</h2>

                <ul>
                    <li>${education}</li>
                </ul>

            </section>

            <section class="skills" style="display: none">
                <h2>Skills</h2>

                <ul>
					${processInput(skills, "skills")
        .map((skill) => `<li>${skill}</li>`)
        .join("")}
                </ul>
            </section>

            <section class="work-experience" style="display: none">
                <h2>Work Experience</h2>

                <ul>
				    <li>${workExperience}</li>
                </ul>
            </section>

            <button id="toggle-skills">Show More</button>
	`;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateResume__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateResume */ "./src/generateResume.ts");

document.getElementById("resume-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const github = document.getElementById("github")
        .value;
    const linkedin = document.getElementById("linkedin")
        .value;
    const profilePicture = document.getElementById("profile-picture").files?.[0];
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills")
        .value;
    const workExperience = document.getElementById("work-experience").value;
    // hiding form
    const form = document.getElementById("resume-form");
    form.style.display = "none";
    const resumeDiv = document.querySelector(".generated-resume");
    // showing generated resume
    if (resumeDiv) {
        resumeDiv.innerHTML = (0,_generateResume__WEBPACK_IMPORTED_MODULE_0__.generateResume)(name, email, phone, education, skills, workExperience, profilePicture, github, linkedin);
        resumeDiv.style.display = "block";
    }
    // adding a click event listener to the toggle button
    const toggleButton = document.getElementById("toggle-skills");
    const skillsSection = document.querySelector(".skills");
    const workExperienceSection = document.querySelector(".work-experience");
    toggleButton?.addEventListener("click", () => {
        const isHidden = skillsSection?.style.display === "none";
        if (skillsSection && workExperienceSection) {
            skillsSection.style.display = isHidden ? "block" : "none";
            workExperienceSection.style.display = isHidden ? "block" : "none";
            toggleButton.innerText = isHidden ? "Show Less" : "Show More";
        }
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDMUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrREFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlsZXN0b25lLTEvLi9zcmMvZ2VuZXJhdGVSZXN1bWUudHMiLCJ3ZWJwYWNrOi8vbWlsZXN0b25lLTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWlsZXN0b25lLTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21pbGVzdG9uZS0xL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWlsZXN0b25lLTEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9taWxlc3RvbmUtMS8uL3NyYy9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wbGVtZW50YXRpb25cbmZ1bmN0aW9uIHByb2Nlc3NJbnB1dChpbnB1dCwgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSBcInNraWxsc1wiKSB7XG4gICAgICAgIC8vIFByb2Nlc3Mgc2tpbGxzIGlucHV0XG4gICAgICAgIGNvbnN0IGNsZWFuZWRTdHIgPSBpbnB1dC5yZXBsYWNlKC9bLDtdKy9nLCBcIixcIik7XG4gICAgICAgIGNvbnN0IHNraWxscyA9IGNsZWFuZWRTdHJcbiAgICAgICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgICAgIC5tYXAoKHNraWxsKSA9PiBza2lsbC50cmltKCkpXG4gICAgICAgICAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwubGVuZ3RoID4gMCk7XG4gICAgICAgIHJldHVybiBza2lsbHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBQcm9jZXNzIHBob25lIGlucHV0XG4gICAgICAgIGNvbnN0IGNsZWFuZWRTdHIgPSBpbnB1dC5yZXBsYWNlKC9cXEQrL2csIFwiXCIpO1xuICAgICAgICBjb25zdCBpc1ZhbGlkID0gY2xlYW5lZFN0ci5sZW5ndGggPiA3ICYmIGNsZWFuZWRTdHIubGVuZ3RoIDwgMTU7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkID8gY2xlYW5lZFN0ciA6IFwiSW52YWxpZCBudW1iZXJcIjtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZXN1bWUobmFtZSwgZW1haWwsIHBob25lLCBlZHVjYXRpb24sIHNraWxscywgd29ya0V4cGVyaWVuY2UsIHByb2ZpbGVQaWN0dXJlLCBnaXRodWIsIGxpbmtlZGluKSB7XG4gICAgcmV0dXJuIGBcclxuXHQ8c2VjdGlvbiBjbGFzcz1cInBlcnNvbmFsLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke3Byb2ZpbGVQaWN0dXJlXG4gICAgICAgID8gVVJMLmNyZWF0ZU9iamVjdFVSTChwcm9maWxlUGljdHVyZSlcbiAgICAgICAgOiBcImltYWdlcy9kZWZhdWx0LXByb2ZpbGUtcGljdHVyZS5qcGVnXCJ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxODBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+PGgxIGlkPVwibmFtZVwiPiR7bmFtZX08L2gxPjwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWN0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86JHtlbWFpbH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYnggYnhzLWVudmVsb3BlXCI+PC9pPiBFbWFpbDwvYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImdpdGh1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtnaXRodWJ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJ4IGJ4bC1naXRodWJcIj48L2k+IEdpdGh1YjwvYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImxpbmtlZEluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHtsaW5rZWRpbn1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYnggYnhsLWxpbmtlZGluLXNxdWFyZVwiPjwvaT4gTGlua2VkSW48L2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJudW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cInRlbDoke3Byb2Nlc3NJbnB1dChwaG9uZSwgXCJwaG9uZVwiKX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7cHJvY2Vzc0lucHV0KHBob25lLCBcInBob25lXCIpfSA8aSBjbGFzcz1cImJ4IGJ4cy1waG9uZVwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImVkdWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkVkdWNhdGlvbjwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4ke2VkdWNhdGlvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2tpbGxzXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+U2tpbGxzPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcblx0XHRcdFx0XHQke3Byb2Nlc3NJbnB1dChza2lsbHMsIFwic2tpbGxzXCIpXG4gICAgICAgIC5tYXAoKHNraWxsKSA9PiBgPGxpPiR7c2tpbGx9PC9saT5gKVxuICAgICAgICAuam9pbihcIlwiKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwid29yay1leHBlcmllbmNlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+V29yayBFeHBlcmllbmNlPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcblx0XHRcdFx0ICAgIDxsaT4ke3dvcmtFeHBlcmllbmNlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlLXNraWxsc1wiPlNob3cgTW9yZTwvYnV0dG9uPlxyXG5cdGA7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdlbmVyYXRlUmVzdW1lIH0gZnJvbSBcIi4vZ2VuZXJhdGVSZXN1bWVcIjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdW1lLWZvcm1cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVcIikudmFsdWU7XG4gICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnaXRodWJcIilcbiAgICAgICAgLnZhbHVlO1xuICAgIGNvbnN0IGxpbmtlZGluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rZWRpblwiKVxuICAgICAgICAudmFsdWU7XG4gICAgY29uc3QgcHJvZmlsZVBpY3R1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGUtcGljdHVyZVwiKS5maWxlcz8uWzBdO1xuICAgIGNvbnN0IGVkdWNhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWR1Y2F0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IHNraWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2tpbGxzXCIpXG4gICAgICAgIC52YWx1ZTtcbiAgICBjb25zdCB3b3JrRXhwZXJpZW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay1leHBlcmllbmNlXCIpLnZhbHVlO1xuICAgIC8vIGhpZGluZyBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdW1lLWZvcm1cIik7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgcmVzdW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZW5lcmF0ZWQtcmVzdW1lXCIpO1xuICAgIC8vIHNob3dpbmcgZ2VuZXJhdGVkIHJlc3VtZVxuICAgIGlmIChyZXN1bWVEaXYpIHtcbiAgICAgICAgcmVzdW1lRGl2LmlubmVySFRNTCA9IGdlbmVyYXRlUmVzdW1lKG5hbWUsIGVtYWlsLCBwaG9uZSwgZWR1Y2F0aW9uLCBza2lsbHMsIHdvcmtFeHBlcmllbmNlLCBwcm9maWxlUGljdHVyZSwgZ2l0aHViLCBsaW5rZWRpbik7XG4gICAgICAgIHJlc3VtZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICAvLyBhZGRpbmcgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLXNraWxsc1wiKTtcbiAgICBjb25zdCBza2lsbHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lsbHNcIik7XG4gICAgY29uc3Qgd29ya0V4cGVyaWVuY2VTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3JrLWV4cGVyaWVuY2VcIik7XG4gICAgdG9nZ2xlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0hpZGRlbiA9IHNraWxsc1NlY3Rpb24/LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiO1xuICAgICAgICBpZiAoc2tpbGxzU2VjdGlvbiAmJiB3b3JrRXhwZXJpZW5jZVNlY3Rpb24pIHtcbiAgICAgICAgICAgIHNraWxsc1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9IGlzSGlkZGVuID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgICAgICAgICB3b3JrRXhwZXJpZW5jZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IGlzSGlkZGVuID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uaW5uZXJUZXh0ID0gaXNIaWRkZW4gPyBcIlNob3cgTGVzc1wiIDogXCJTaG93IE1vcmVcIjtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=