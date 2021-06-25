function hidePage(id) {
    document.getElementById(id).style.display="none";
}

function showPage(id) {
    document.getElementById(id).style.display="block";
}

function showHome() {
    hidePage('skills');
    hidePage('projects');
    hidePage('languages');
    showPage('home');
}

    
function showSkills() {
    hidePage('languages');
    hidePage('home');
    hidePage('projects');
    showPage('skills');
}


function showProjects() {
    hidePage('skills');
    hidePage('home');
    hidePage('languages');
    showPage('projects');
}

function showLanguages() {
    hidePage('skills');
    hidePage('home');
    hidePage('projects');
    showPage('languages');
}