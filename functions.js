function hidePage(id) {
    document.getElementById(id).style.display="none";
}

function showHome() {
    hidePage('skills');
    hidePage('projects');
    hidePage('languages');
    document.getElementById('home').style.display="block";
}

    
function showSkills() {
    hidePage('languages');
    hidePage('home');
    hidePage('projects');
    document.getElementById('skills').style.display="block";
}


function showProjects() {
    hidePage('skills');
    hidePage('home');
    hidePage('languages');
    document.getElementById('projects').style.display="block";
}

function showLanguages() {
    document.getElementById('skills').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('projects').style.display="none";
    document.getElementById('languages').style.display="block";
}