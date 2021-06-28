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

    // while(i < pageIds.length) {
    //     console.info('i = ', i);
    //     hidePage(pageIds[i++]);
    // };

    for(var i = 0; i < pageIds.length; i++ ) {
        hidePage(pageIds[i]);
    }
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