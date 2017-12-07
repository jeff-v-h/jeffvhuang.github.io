var bio = {
	"name": "Jeffrey Huang",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(+61) 424-374-919",
		"email": "jeffvh@outlook.com",
		"github": "jeffvhuang"
	},
	"bioPic": "images/display-picture.jpg",
	"skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "Python", "Flask", "Git & Github", "PostgreSQL", "Android Java", "SQLite"],
	"personalSummary": "A hard-working physiotherapist turned web developer with the goal to become a proficient software engineer. With a passion for technology, I am excited about it’s future impact on society. Much of my spare time has been spent engaging in self-learning to strive towards this career objective. As a therapist, many valuable and transferable skills were gained to help provide high quality consultations for clients. Most patients were seen on a word of mouth or referral basis. I believe my ability to excel as a physiotherapist to influence business growth is evidence of my potential to become an excellent software engineer. Furthermore, my unique background helps me understand the importance of a client first approach."
};

var work = {
	"jobs": [
		{
			"employer": "Mascot Physiotherapy & Sports Injury Clinic",
			"title": "Physiotherapist",
			"dates": "Feb 2016 - present",
			"duties": [
				"Provided high quality physiotherapy to clients from various socio-economic backgrounds to meet their goals, resulting in their return to our clinic for subsequent consultations.",
				"Had a direct influence on revenue generation, which helped business thrive at Mascot Physiotherapy, resulting in an increase in consultation fees within one year.",
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
}; 

var projects = {
	"top": [
		{
			"title": "Physiotherapy",
			"dates": "2017",
			"description": "A web database application to store client information for a physiotherapy business",
			"skills": ["HTML", "CSS", "Python", "Flask", "PostgreSQL"],
			"url": "https://github.com/jeffvhuang/physiotherapy"
		},
		{
			"title": "Cat Clicker",
			"dates": "2017",
			"description": "A simple app to count the amount of times each cat image is clicked. The codebase showcases the use of the MVO JavaScript architectural pattern",
			"skills": ["HTML", "CSS", "JavaScript"],
			"url": "https://github.com/jeffvhuang/movie-trailers"
		},
		{
			"title": "Restaurant Menus",
			"dates": "2017",
			"description": "An application to store data for a variety of restaurants and their menus",
			"skills": ["HTML", "CSS", "Python", "Flask", "PostgreSQL"],
			"url": "https://github.com/jeffvhuang/restaurant-menus"
		},
		{
			"title": "Movie Trailers",
			"dates": "2017",
			"description": "Small list of some of my favourite movies and their trailers",
			"skills": ["Python"],
			"url": "https://github.com/jeffvhuang/movie-trailers"
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
			"skills": ["HTML", "CSS", "JavaScript"],
			"url": "https://github.com/jeffvhuang/Project---Pagination-Content-Filter"
		},
		{
			"title": "Random Quote Generator",
			"dates": "2016",
			"description": "A webpage that generates random quotes",
			"skills": ["HTML", "CSS", "JavaScript"],
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
		}
	]
};


var education = {
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
			"school": "Udacity",
			"title": "Full Stack Web Developer Nanodegree",
			"dates": "Nov 2017",
			"courses": ["Intro to Computer Science", "How to Use Git and GitHub", "Programming Foundations with Python", "Responsive Web Design Fundamentals", "Intro to HTML and CSS", "Responsive Images", "Intro to Relational Databases", "Authentication & Authorization: OAuth", "Full Stack Foundations", "Intro to AJAX", "Javascript Design Patterns", "Configuring Linux Web Servers"],
			"skills": ["HTML5", "CSS3", "JavaScript", "JQuery", "Python", "GitHub", "PostgreSQL", "Linux"],
			"url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
		},
		{
			"school": "Udacity",
			"title": "Android Basics Nanodegree",
			"dates": "May 2017",
			"courses": ["User Interface", "User Input", "Multiscreen Apps", "Networking", "Data Storage"],
			"skills": ["Android", "Java", "SQLite"],
			"url": "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
		}
	]	
};


// Insert for header - name, role, contact details, image and skills
var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var github = HTMLgithub.replace("%data%", bio.contacts.github).replace("#", "https://www.github.com/" + bio.contacts.github);
var displayPic = HTMLbioPic.replace("%data%", bio.bioPic);

$('#header').prepend(name).prepend(displayPic);
$("#name").after(role);
$("#topContacts").append(mobile).append(email).append(github);

// Insert personal summary
var personalSummary = HTMLsummary.replace('%data%', bio.personalSummary);
$('#summary').append(personalSummary);


// Use for loop to add skills into a sentence then append to page
var listOfSkills = "";
for (i=0; i < bio.skills.length; i++) {
	if (i > 0) {
		listOfSkills += ', ';
	}
	listOfSkills += bio.skills[i];
};
var skills = HTMLskills.replace("%data%", listOfSkills);
$('#skills').append(skills);


// Insert work experience
function displayWork() {
	for (i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
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
	}
}
displayWork();

// Insert projects
projects.display = function() {
	for (i=0; i<projects.top.length; i++) {
		var title = HTMLprojectTitle.replace("%data%", projects.top[i].title)
			.replace("#", projects.top[i].url);
		var dates = HTMLprojectDates.replace("%data%", projects.top[i].dates);
		var description = HTMLprojectDescription.replace("%data%", projects.top[i].description);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(title).append(dates).append(description);
	}
}
projects.display();

// Insert education
education.display = function() {
	var schoolName = HTMLschoolName.replace("%data%", education["schools"][0]["name"]);
	var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
	var schoolDates = HTMLschoolDates.replace("%data%", education["schools"][0]["dates"]);
	var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].city);
	$("#education").append(HTMLschoolStart);
	$(".education-entry").append(schoolName).append(schoolDegree).append(schoolDates).append(schoolLocation);
	
	$("#education").append(HTMLonlineClasses);
	for (i=0; i<education.online.length; i++) {
		$("#education").append(HTMLschoolStart);
		var school = HTMLonlineSchool.replace("%data%", education.online[i].school);
		var title = HTMLonlineTitle.replace("%data%", education.online[i].title).replace("#", education.online[i].url);
		var dates = HTMLonlineDates.replace("%data%", education.online[i].dates);
		$(".education-entry:last").append(title).append(school).append(dates);
	}
}
education.display();

// Footer
$("#footerContacts").append(mobile).append(email).append(github);

// call this function to return a capitalised last name
function capitalise(name) {
	name = name.trim().split(" ");
	name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + ' ' + name[1];
}

// capitalise last name when document loads
$(document).ready(function() {
	var $name = $('#name');
	var internationalName = capitalise($name.text());
	$name.html(internationalName);
});
