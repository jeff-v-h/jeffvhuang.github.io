var bio = {
	"name": "Jeffrey Huang",
	"role": "Web Developer & Physiotherapist",
	"contacts": {
		"mobile": "(+61) 0424-374-919",
		"email": "jeffvh@outlook.com",
		"github": "jeffvhuang"
	},
	"bioPic": "images/display-picture.jpg",
	"skills": [
		"Musculoskeletal and sports physiotherapy", "HTML", "CSS", "JavaScript", "jQuery", "Python", 
		"PostgreSQL", "Android Java"
	],
	"personalSummary": "Although having graduated from the University of Sydney with a degree in Physiotherapy and worked as a musculoskeletal and sports physiotherapist for several years, I now wish to pursue a career to technology. I have been self-teaching and completing online courses in my spare time outside of working hours consistently for over a year. I am highly motivated in self-learning and aim to become a software engineer."
};

var work = {
	"jobs": [
		{
			"employer": "Mascot Physiotherapy",
			"title": "Physiotherapist",
			"dates": "Feb 2016 - present",
			"description": "Physiotherapist with a predominantly musculoskeletal and sports caseload."
		},
		{
			"employer": "Action Plus Physiotherapy",
			"title": "Physiotherapist",
			"dates": "Feb 2014 - Oct 2015",
			"description": "Part-time physiotherapist with a predominantly musculoskeletal and sports caseload."
		},
		{
			"employer": "Hunters Hill Physiotherapy",
			"title": "Physiotherapist",
			"dates": "Mar 2014 -  Oct 2015",
			"description": "Part-time physiotherapist with a predominantly musculoskeletal and sports caseload."
		}
	]
}; 

var projects = {
	"top": [
		{
			"title": "Resume",
			"dates": "2017",
			"description": "My resume",
			"languages": ["HTML", "CSS", "JavaScript"],
			"url": "https://github.com/jeffh791/frontend-nanodegree-resume"
		},
		{
			"title": "Swiss Tournament",
			"dates": "2017",
			"description": "A database for any tournament that uses the Swiss system",
			"languages": ["Python", "PostgreSQL"],
			"url": "https://github.com/jeffh791/Swiss-Tournament"
		},
		{
			"title": "Movie Trailers",
			"dates": "2017",
			"description": "Small list of some of my personal favourite movies and their trailers",
			"languages": ["Python"],
			"url": "https://github.com/jeffh791/movie-trailers"
		},
		{
			"title": "Inventory",
			"dates": "2017",
			"description": "An app for businesses to keep track of their inventory",
			"languages": ["Java", "SQLite"],
			"url": "https://github.com/jeffh791/Inventory"
		},
		{
			"title": "Pagination Content Filter",
			"dates": "2016",
			"description": "Content filter for lists of students",
			"languages": ["HTML", "CSS", "JavaScript"],
			"url": "https://github.com/jeffh791/Project---Pagination-Content-Filter"
		},
		{
			"title": "Random Quote Generator",
			"dates": "2016",
			"description": "A webpage that generates random quotes",
			"languages": ["HTML", "CSS", "JavaScript"],
			"url": "https://github.com/jeffh791/Random-Quote-Generator"
		}
	],
	"other": [
		{
			"title": "Portfolio",
			"dates": "2017",
			"description": "Simple portfolio using CSS Bootstrap",
			"languages": ["HTML", "CSS"],
			"url": "https://github.com/jeffh791/portfolio"
		},
		{
			"title": "Pets",
			"dates": "2017",
			"description": "An app that can store a list of pets and their details",
			"languages": ["Java", "SQLite"],
			"url": "https://github.com/jeffh791/Pets"
		}
	]
};


var education = {
	"schools": [
		{
			"name": "The University of Sydney",
			"city": "Sydney, NSW, Australia",
			"degree": "Bachelor of Applied Science (Physiotherapy)",
			"dates": "2010-2013"
		}
	],
	"online": [
		{
			"name": "Udacity",
			"degree": "Full Stack Web Developer",
			"dates": "2017",
			"courses": ["Intro to Computer Science", "How to Use Git and GitHub", 
				"Programming Foundations with Python", "Responsive Web Design Fundamentals", 
				"Intro to HTML and CSS", "Responsive Images", "Intro to Relational Databases"],
			"skills": ["HTML", "CSS", "Python", "GitHub", "PostgreSQL"],
			"url": "https://www.udacity.com/nanodegree"
		},
		{
			"school": "Udacity",
			"title": "Front-End Web Developer (JavaScript & jQuery supporting courses)",
			"dates": "2017",
			"supportingCourses": ["Intro to HTML and CSS", "Responsive Web Design Fundamentals", 
				"Responsive Images", "JavaScript Basics", "Intro to jQuery", "Object-Oriented JavaScript"],
			"skills": ["HTML", "CSS", "JavaScript", "jQuery"],
			"url": "https://www.udacity.com/nanodegree"
		},
		{
			"school": "Udacity",
			"title": "Android Basics",
			"dates": "2017",
			"supportingCourses": ["User Interface", "User Input", "Multiscreen Apps", 
				"Networking", "Data Storage"],
			"skills": ["Android", "Java", "SQLite"],
			"url": "https://www.udacity.com/nanodegree"
		},
				{
			"school": "Udacity",
			"title": "Android Basics",
			"dates": "2017",
			"supportingCourses": ["User Interface", "User Input", "Multiscreen Apps", 
				"Networking", "Data Storage"],
			"skills": ["Android", "Java", "SQLite"],
			"url": "https://www.udacity.com/nanodegree"
		}
	]	
};


// Insert for header - name, role, contact details, image and skills
var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
var displayPic = HTMLbioPic.replace("%data%", bio.bioPic);

$('#header').prepend(name).prepend(displayPic);
$("#name").after(role);
$("#topContacts").append(mobile).append(email).append(github);
/*if(bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) {
		var formatSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$('#skills').append(formatSkills);
	}
	
}*/

var personalSummary = HTMLsummary.replace('%data%', bio.personalSummary);
$('#summary').append(personalSummary);

// Insert work experience
function displayWork() {
	for (i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		var workInfo = employer + workTitle + workDates + workDescription;
		$(".work-entry:last").append(workInfo);
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
	$(".education-entry").append(schoolName).append(schoolDegree)
	.append(schoolDates).append(schoolLocation);
	
	$(".education-entry").append(HTMLonlineClasses);
	for (i=0; i<education.online.length; i++) {
		var school = HTMLonlineSchool.replace("%data%", education.online[i].school);
		var title = HTMLonlineTitle.replace("%data%", education.online[i].title);
		var dates = HTMLonlineDates.replace("%data%", education.online[i].dates);
		// var url = HTMLonlineURL.replace("%data%", education.online[i].url);
		$(".education-entry").append(title).append(school).append(dates);
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

// Append a button to main div that will change between physiotherapy and developer resumes
//$('#main').append(changeButton);
