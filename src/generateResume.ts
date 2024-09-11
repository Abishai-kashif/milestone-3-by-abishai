// Function overloads
function processInput(input: string, type: "skills"): string[];
function processInput(input: string, type: "phone"): string;
// Implementation
function processInput(
	input: string,
	type: "skills" | "phone"
): string[] | string {
	if (type === "skills") {
		// Process skills input
		const cleanedStr = input.replace(/[,;]+/g, ",");
		const skills = cleanedStr
			.split(",")
			.map((skill) => skill.trim())
			.filter((skill) => skill.length > 0);

		return skills;
	} else {
		// Process phone input
		const cleanedStr = input.replace(/\D+/g, "");
		const isValid = cleanedStr.length > 7 && cleanedStr.length < 15;

		return isValid ? cleanedStr : "Invalid number";
	}
}

export function generateResume(
	name: string,
	email: string,
	phone: string,
	education: string,
	skills: string,
	workExperience: string,
	profilePicture: MediaSource | Blob,
	github: string,
	linkedin: string
) {
	return `
	<section class="personal-info">
                <figure>
                    <img
                        src="${
							profilePicture
								? URL.createObjectURL(profilePicture)
								: "images/default-profile-picture.jpeg"
						}"
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
                            >${processInput(
								phone,
								"phone"
							)} <i class="bx bxs-phone"></i
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
