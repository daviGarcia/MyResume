var bio = {
  "name": "David Garcia",
  "role": "Software Engineer",
  "contacts":{
    "mobile": "(831)-229-7989",
    "email": "AnthonyGarcia833@gmail.com",
    "github": "antsss83",
    "location": "Salinas, CA 93901"
  },
  "welcomeMessage": "Hi! I'm David.",
  "skills":[
    "JavaScript", "java", "C++", "Python", "MySQL", "SQLite"],
  "bioPic": "images/profilePic.jpg"
  }

bio.display = function(){
  'use strict';

  var formattedName = HTMLheaderName.replace("%data%", "David Garcia");
  var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer & Software Engineer");
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);

  /**==========  Contacts ==========**/
  var mobile = HTMLmobile.replace("%data%", "831-229-7989");
  $('#header #topContacts').append(mobile);
  $('#footerContacts').append(mobile);
  var email = HTMLemail.replace("%data%", "AnthonyGarcia833gmail.com");
  $('#header #topContacts').append(email);
  $('#footerContacts').append(email);
  var github = HTMLgithub.replace("%data%", "antsss83");
  $('#header #topContacts').append(github);
  $('#footerContacts').append(github);
  var location = HTMLlocation.replace("%data%", "Salinas, CA 93901");
  $('#header #topContacts').append(location);
  var biopic = HTMLbioPic.replace("%data%", "images/profilePic.jpg");
  $('#header').append(biopic);
  var welcomeMsg = HTMLwelcomeMsg.replace("%data%", "Welcome to my resume, find out who I am and what my skills are");
  $('#header').append(welcomeMsg);
  /** ===================     skills    =================== **/
  var skills = HTMLskills;
  if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $('#skills').append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $('#skills').append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $('#skills').append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $('#skills').append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
      $('#skills').append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
      $('#skills').append(formattedSkill);
  }
  };
  bio.display();

var education = {
  "schools": [
    {
      "name" : "California University of Monterey Bay",
      "dates" : "2016",
      "location" : "Monterey, CA 93955",
      "majors" : ["Software Engineering"],
      "degree": "Bachelor"
    },
    {
      "name" : "Hartnell College",
      "dates" : "2015",
      "location" : "Salinas, CA 93901",
      "majors" : ["Language and Rationality"],
      "degree": "Associates"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "dates": 2016,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
}

education.display = function () {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree,formattedSchoolDates, formattedSchoolLocation);
        for (major in education.schools[school].majors) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title).replace("#",education.onlineCourses[course].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url).replace("#",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl);
    }
};
education.display();

var work = {
"jobs": [
    {
      "employer": "Languageline Solutions",
      "title": "Tech Intern",
      "dates": "April 2015 - August 2015",
      "description": "Responsible for conducting a qualitative study on Call Hold Music to determine efficiency of current vs. potential substitutes.  Study showed that certain music would reduce Call Abandonment rate. The team and I were able to reduce Call Abandonment rate by 1% which resulted in an increase in sales by $2 Million. <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	As part of Scrum team acted as Product Owner collecting requirements and managing backlog.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	Used Jira to create and manage stories.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	Assigned stories to scrum team, tracked status, conduct daily standups<br><br>Lead team in developing caller locations algorithms in order to map abandon rates to local areas. Caller call status and location were displayed to center reps in order for them to choose next caller, this improved service offering and reduce call abandonment. This data was also used to improve direct marketing, identify high volumes of Call, and to more effectively use interpreters.<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	Developed code to extract phone information from Salesforce, translated data into lat/long geolocation, and loaded data into Elasticsearch.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	Using Kibana as the visual display I was able to identify the location of all callers.",
      "location": "Monterey, CA 93940"
    },
    {
      "employer": "My2Cents",
      "title": "Software Developer Intern",
      "dates": "Jan 2015 - June 2015",
      "description": "Worked with team to develop a customer survey app for Android and iPhone. <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	Was responsible for developing user management portion of the app. <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	Developed app in Java using Eclipse, helped developed website using JavaScript, HTML5, CSS, and PHP. <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp•	Helped review code from other team members",
      "location": "Salinas, CA 93901"
    }
  ]
}

function displayWork(){
  for(job in work.jobs){
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
     // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    $('.work-entry:last').append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedDescription);


  }
}

displayWork();

var projects = {
  "projects":[
    {
      "title": "Salesforce Festival Management",
      "dates": "2015",
      "description": "Created a Salesforce application that gathers data about all the details a festival coordinator would need in order to keep track of stages, attendees, and work orders.  The application allows the coordinator to manage crowd flow, stage equipment, and performance.",
      "images": [
        "images/salesforceCloud.png"
      ]
    },
    {
      "title": "Fishing Website",
      "dates": "2014",
      "description": "•	Developed the Total Angler website. The site allows fishermen to point to a specific body of water and see what is being caught and how.  Users can login to view or post details of their current or previous catch of the day.",
      "images": [
        "images/fish.png"
      ]
    }
  ]
}

projects.display = function() {
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].
    title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].
    dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[
    project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images) {
          var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImages);
      }
    }
  }
}
projects.display();

var Map = googleMap;
$('#mapDiv').append(googleMap);

function locationizer(work_obj) {
    'use strict';
    var locationArray = [];
    locationArray.forEach(function (work_obj) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
        console.log(work_obj);
    });
    return locationArray;
}
console.log(locationizer(work));
