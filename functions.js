function hidePage(id) {
    document.getElementById(id).style.display="none";
    console.log
}

function showPage(id) {
    document.getElementById(id).style.display="block";
}

function hideAllPages() {
    var pageIds = ['home', 'skills', 'projects', 'languages'];
    var i = 0;
   
    pageIds.forEach(function(pageId, index){
        hidePage(pageId);
    });
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