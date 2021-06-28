function hidePage(id) {
    document.getElementById(id).style.display="none";
}

function showPage(id) {
    document.getElementById(id).style.display="block";
}

function hideAllPages() {
    hidePage('skills');
    hidePage('projects');
    hidePage('languages');
    hidePage('home');
}

function showHome() {
    hideAllPages();
    showPage('home');
}
    
function showSkills() {
    hideAllPages();
    showPage('skills');
}

function showProjects() {
    hideAllPages();
    showPage('projects');
}

function showLanguages() {
    hideAllPages();
    showPage('languages');
}