$(function() {
	var model = {

		bio: {
			"name": "Jeffrey Huang",
			"role": "Full Stack Web Developer",
			"contacts": {
				"mobile": "+44 7 983 715 491",
				"email": "jeffvh@outlook.com",
				"github": "jeffvhuang",
				"linkedin": "jeffvhuang"
			},
			"bioPic": "images/display-picture.jpg",
			"skills": ["Python", "JavaScript", "CSS3", "HTML5", "jQuery", "PostgreSQL", "SQLite", "Flask", "Git & Github", "Android Java"],
			"personalSummary": "An aspiring web developer with the goal to become a proficient software engineer. With a passion for technology, I am excited about it’s future impact on society.  Much of my spare time outside of working hours has been spent engaging in self-learning to strive towards this career objective. My unique background as a physiotherapist has allowed me to develop many valuable and transferable skills in order to provide high quality consultations for clients. With an inherent value for personal growth, I have no doubt my numerous years of experience working in a sociable career will allow me to become an exceptionally well rounded software engineer."
		},

		work: {
			"jobs": [
				{
					"employer": "Connect Health - Hertfordshire Musculoskeletal Service",
					"title": "Senior Physiotherapist - Locum",
					"dates": "Feb 2018 - present",
					"duties": [
						"Asked to provide physiotherapy expertise at various hospitals and surgeries to help clear the back log of patients on the NHS waiting list",
						"Managed a caseload often booked with re-reviews of patients who were not able to recover following an initial course of treatment from less experienced therapists.",
						"Assisted with setting up several locations with appropriate resources during a transitional phase for the NHS musculoskeletal physiotherapy service",
						"Focused heavily on thorough education and exercise programs to facilitate patient self-management"
					]
				},
				{
					"employer": "Mascot Physiotherapy & Sports Injury Clinic",
					"title": "Physiotherapist",
					"dates": "Feb 2016 - Dec 2017",
					"duties": [
						"Provided high quality physiotherapy to clients by applying problem solving and logcal thinking skills, resulting in their return to our clinic for subsequent consultations.",
						"Had a direct influence on revenue generation. Helped business thrive at Mascot Physiotherapy, resulting in an increase in consultation fees within one year.",
						"Developed and maintained strong working relationships with the business owners, other physiotherapists and staff members. ",
						"Maintained efficient time management to keep on track with tight booking schedules. ",
						"Managed insurance caseloads to ensure correct completion of all legal documents.",
						"Frequently liaised with other professionals to provide optimal care for every client."
					]
				},
				{
					"employer": "Hunters Hill Physiotherapy & Sports Injury Centre",
					"title": "Physiotherapist",
					"dates": "Mar 2014 -  Oct 2015",
					"duties": [
						"Built and maintained a varied caseload from mostly private clients.",
						"Travelled throughout the community to provide home visits.",
						"Cooperated with medical staff to look after a private college’s rugby union teams.",
					]
				},
				{
					"employer": "Action Plus Physiotherapy Sports & Hand Clinics",
					"title": "Physiotherapist",
					"dates": "Feb 2014 - Oct 2015",
					"duties": [
						"Collaborated with business owner to manage multiple business locations.",
						"Completed pre-employment health screens and liaised with recruiters of large companies.",
						"Supervised all competitors for two Rugby Union Football Clubs.",
					]
				}
			]
		},

		projects: {
			"top": [
				{
					"title": "Physiotherapy",
					"dates": "2017",
					"description": "A web application to store client information for a physiotherapy business using python and flask on the backend to access the database",
					"skills": ["HTML5", "CSS3", "Python", "Flask", "SQLite"],
					"url": "http://jeffvh.pythonanywhere.com/"
				},
				{
					"title": "Calendates",
					"dates": "2017",
					"description": "A common calendar for users to store data about mutual events throughout each year. It allows friends and groups to more easily organise outings or important events by providing a mutual calendar image",
					"skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "API", "Python", "Flask", "SQLite"],
					"url": "http://www.calendates.com/"
				},
				{
					"title": "Curriculum Vitae",
					"dates": "2017",
					"description": "A recreated web version of this CV being viewed right now. Click the link to see the codebase behind this project",
					"skills": ["HTML5", "CSS3", "JavaScript", "MVC"],
					"url": "https://github.com/jeffvhuang/jeffvhuang.github.io"
				},
				{
					"title": "Cat Clicker",
					"dates": "2017",
					"description": "A simple app to count the amount of times each cat image is clicked. The codebase showcases the use of a Model-View JavaScript architectural pattern",
					"skills": ["HTML5", "CSS3", "JavaScript"],
					"url": "https://github.com/jeffvhuang/movie-trailers"
				},
				{
					"title": "Restaurant Menus",
					"dates": "2017",
					"description": "An application to store data for a variety of restaurants and their menus. It requires a login session with either facebook or google+",
					"skills": ["HTML5", "CSS3", "Python", "Flask", "OAuth 2.0", "SQLite"],
					"url": "https://github.com/jeffvhuang/OAuth2.0"
				},
				{
					"title": "Inventory",
					"dates": "2017",
					"description": "An Android app for businesses to keep track of their inventory",
					"skills": ["Java", "SQLite"],
					"url": "https://github.com/jeffvhuang/Inventory"
				},
				{
					"title": "Pagination Content Filter",
					"dates": "2016",
					"description": "Content filter for lists of students",
					"skills": ["HTML5", "CSS3", "JavaScript"],
					"url": "https://github.com/jeffvhuang/Project---Pagination-Content-Filter"
				},
				{
					"title": "Random Quote Generator",
					"dates": "2016",
					"description": "A webpage that generates random quotes",
					"skills": ["HTML5", "CSS3", "JavaScript"],
					"url": "https://github.com/jeffvhuang/Random-Quote-Generator"
				}
			],
			"other": [
				{
					"title": "Swiss Tournament",
					"dates": "2017",
					"description": "A database for any tournament that uses the Swiss system",
					"skills": ["Python", "PostgreSQL"],
					"url": "https://github.com/jeffvhuang/Swiss-Tournament"
				},
				{
					"title": "Portfolio",
					"dates": "2017",
					"description": "Simple portfolio using CSS Bootstrap",
					"skills": ["HTML", "CSS"],
					"url": "https://github.com/jeffvhuang/portfolio"
				},
				{
					"title": "Pets",
					"dates": "2017",
					"description": "An app that can store a list of pets and their details",
					"skills": ["Java", "SQLite"],
					"url": "https://github.com/jeffvhuang/Pets"
				},
				{
					"title": "Movie Trailers",
					"dates": "2017",
					"description": "Small list of some of my favourite movies and their trailers",
					"skills": ["Python"],
					"url": "https://github.com/jeffvhuang/movie-trailers"
				}
			]
		},


		education: {
			"schools": [
				{
					"name": "The University of Sydney",
					"city": "Sydney, NSW, Australia",
					"degree": "Bachelor of Applied Science (Physiotherapy)",
					"dates": "2010-2013",
					"url": "https://sydney.edu.au/"
				}
			],
			"online": [
				{
					"school": "The University of Minnesota (Coursera)",
					"title": "Software Development Lifecycle Specialization",
					"dates": "2018",
					"courses": ["Software Development Processes and Methodologies", "Agile Software Development", "Lean Software Development", "Engineering Practices for Building Quality Software"],
					"skills": ["Development Models", "Agile", "Scrum", "Kanban", "Lean Startup"],
					"url": "https://www.coursera.org/specializations/software-development-lifecycle"
				},
				{
					"school": "Udacity",
					"title": "Full Stack Web Developer Nanodegree",
					"dates": "2017",
					"courses": ["Intro to Computer Science", "How to Use Git and GitHub", "Programming Foundations with Python", "Responsive Web Design Fundamentals", "Intro to HTML and CSS", "Responsive Images", "Intro to Relational Databases", "Authentication & Authorization: OAuth", "Full Stack Foundations", "Intro to AJAX", "Javascript Design Patterns", "Configuring Linux Web Servers"],
					"skills": ["HTML5", "CSS3", "JavaScript", "JQuery", "Python", "GitHub", "PostgreSQL", "Linux"],
					"url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
				},
				{
					"school": "Udacity",
					"title": "Android Basics Nanodegree",
					"dates": "2017",
					"courses": ["User Interface", "User Input", "Multiscreen Apps", "Networking", "Data Storage"],
					"skills": ["Android", "Java", "SQLite"],
					"url": "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
				}
			]	
		}
	};

	/**
	 * Controller/Octopus
	 */
	var octopus = {
		init: function() {
			viewHeaderFooter.init();
			viewSummary.init();
			viewSkills.init();
			viewProjects.init();
			viewEducation.init();
			viewWork.init();
		},

		getBio: function() {
			return model.bio;
		},

		getProjects: function() {
			return model.projects;
		},

		getEducation: function() {
			return model.education;
		},

		getWork: function() {
			return model.work;
		},

		// call this function to return a capitalised last name
		capitalise: function(name) {
			name = name.trim().split(" ");
			name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
			name[1] = name[1].toUpperCase();
			return name[0] + ' ' + name[1];
		}
	};

	/**
	 * Views to render the page
	 */
	var viewHeaderFooter = {
		init: function() {
			this.header = $('#header');
			this.topContacts = $("#topContacts");
			this.footer = $("#footerContacts");

			this.render();
		},

		render: function() {
			var bio = octopus.getBio();

			var name = HTMLheaderName.replace("%data%", bio.name);
			var role = HTMLheaderRole.replace("%data%", bio.role);
			var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			var email = HTMLemail.replace("%data%", bio.contacts.email);
			var github = HTMLgithub.replace("%data%", bio.contacts.github).replace("#", "https://www.github.com/" + bio.contacts.github);
			var linkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin).replace("#", "https://www.linkedin.com/in/" + bio.contacts.linkedin);
			var displayPic = HTMLbioPic.replace("%data%", bio.bioPic);

			this.header.prepend(role).prepend(name).prepend(displayPic);
			this.topContacts.append(mobile).append(email).append(github).append(linkedin);
			this.footer.append(mobile).append(email).append(github).append(linkedin);

			// capitalise last name when document loads
			var $name = $('#name');
			var internationalName = octopus.capitalise($name.text());
			$name.html(internationalName);
		}
	};

	var viewSummary = {
		init: function() {
			this.summary = $('#summary');
			this.heading = $('#summary h2');
			this.toggleBtn = $('#summary .toggle');
			this.render();
		},

		render: function() {
			var bio = octopus.getBio();
			var personalSummary = HTMLsummary.replace('%data%', bio.personalSummary);
			this.summary.append(personalSummary);

			this.toggleBtn.click(function() {
				$('#summary p').toggle('fast');
			});
		}
	};

	var viewSkills = {
		init: function() {
			this.skillsDiv = $('#skills');
			this.heading = $('#skills h2');
			this.toggleBtn = $('#skills .toggle');
			this.render();
		},

		render: function() {
			var bio = octopus.getBio();

			// Use for loop to add skills into a sentence then append to page
			var listOfSkills = "";
			for (i=0; i < bio.skills.length; i++) {
				if (i > 0) {
					listOfSkills += ', ';
				}
				listOfSkills += bio.skills[i];
			};

			var skills = HTMLskills.replace("%data%", listOfSkills);
			this.skillsDiv.append(skills);

			this.toggleBtn.click(function() {
				$('#skills p').toggle('fast');
			});
		}
	};

	var viewProjects = {
		init: function() {
			this.projectsDiv = $("#projects");
			this.heading = $('#projects h2');
			this.toggleBtn = $('#projects .toggle');
			this.render();
		},

		render: function() {
			var projects = octopus.getProjects();

			for (i=0; i<projects.top.length; i++) {
				var title = HTMLprojectTitle.replace("%data%", projects.top[i].title)
					.replace("#", projects.top[i].url);
				var dates = HTMLprojectDates.replace("%data%", projects.top[i].dates);
				var description = HTMLprojectDescription.replace("%data%", projects.top[i].description);
				this.projectsDiv.append(HTMLprojectStart);
				$(".project-entry:last").append(title).append(dates).append(description);
			};

			this.toggleBtn.click(function() {
				$('.project-entry').toggle('fast');
			});
		}
	};

	var viewEducation = {
		init: function() {
			this.educationDiv = $("#education");
			this.heading = $('#education h2');
			this.toggleBtn = $('#education .toggle');
			this.render();
		},

		render: function() {
			var education = octopus.getEducation();
			var schoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
			var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
			var schoolDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
			var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].city);
			this.educationDiv.append(HTMLschoolStart);
			$(".education-entry").append(schoolName).append(schoolDegree).append(schoolDates).append(schoolLocation);

			this.educationDiv.append(HTMLonlineClasses);
			for (i=0; i<education.online.length; i++) {
				this.educationDiv.append(HTMLschoolStart);
				var school = HTMLonlineSchool.replace("%data%", education.online[i].school);
				var title = HTMLonlineTitle.replace("%data%", education.online[i].title).replace("#", education.online[i].url);
				var dates = HTMLonlineDates.replace("%data%", education.online[i].dates);
				$(".education-entry:last").append(title).append(school).append(dates);
			};

			this.toggleBtn.click(function() {
				$('.education-entry').toggle('fast');
			});
		}
	};

	var viewWork = {
		init: function() {
			this.workExperience = $("#workExperience");
			this.heading = $('#workExperience h2');
			this.toggleBtn = $('#workExperience .toggle');
			this.render();
		},

		render: function() {
			var work = octopus.getWork();

			for (i = 0; i < work.jobs.length; i++) {
				this.workExperience.append(HTMLworkStart);
				var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
				var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
				var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
				var workInfo = employer + workTitle + workDates + HTMLworkDutiesList;
				$(".work-entry:last").append(workInfo);

				// Add all duties for the current iteration of work to the last list of duties
				for (j=0; j<work.jobs[i].duties.length; j++) {
					var workDuty = HTMLworkDuty.replace("%data%", work.jobs[i].duties[j]);
					$(".duties-list:last").append(workDuty);
				};
			};

			this.toggleBtn.click(function() {
				$('.work-entry').toggle('fast');
			});
		}
	};

	octopus.init();
});