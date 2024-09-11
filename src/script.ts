import { generateResume } from "./generateResume";

document.getElementById("resume-form")?.addEventListener("submit", (event) => {
	event.preventDefault();

	const name = (document.getElementById("name") as HTMLInputElement).value;
	const email = (document.getElementById("email") as HTMLInputElement).value;
	const phone = (document.getElementById("phone") as HTMLInputElement).value;
	const github = (document.getElementById("github") as HTMLInputElement)
		.value;
	const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
		.value;
	const profilePicture: any = (
		document.getElementById("profile-picture") as HTMLInputElement
	).files?.[0];
	const education = (
		document.getElementById("education") as HTMLTextAreaElement
	).value;
	const skills = (document.getElementById("skills") as HTMLTextAreaElement)
		.value;
	const workExperience = (
		document.getElementById("work-experience") as HTMLTextAreaElement
	).value;

	// hiding form
	const form = document.getElementById("resume-form") as HTMLFormElement;
	form.style.display = "none";

	const resumeDiv = document.querySelector(
		".generated-resume"
	) as HTMLDivElement;

	// showing generated resume
	if (resumeDiv) {
		resumeDiv.innerHTML = generateResume(
			name,
			email,
			phone,
			education,
			skills,
			workExperience,
			profilePicture,
			github,
			linkedin
		);

		resumeDiv.style.display = "block";
	}

	// adding a click event listener to the toggle button

	const toggleButton = document.getElementById(
		"toggle-skills"
	) as HTMLButtonElement;

	const skillsSection: HTMLElement | null = document.querySelector(".skills");
	const workExperienceSection: HTMLElement | null =
		document.querySelector(".work-experience");

	toggleButton?.addEventListener("click", () => {
		const isHidden: boolean = skillsSection?.style.display === "none";

		if (skillsSection && workExperienceSection) {
			skillsSection.style.display = isHidden ? "block" : "none";
			workExperienceSection.style.display = isHidden ? "block" : "none";
			toggleButton.innerText = isHidden ? "Show Less" : "Show More";
		}
	});
});
