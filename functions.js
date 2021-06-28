function hidePage(id) {
    document.getElementById(id).style.display="none";
}

function showPage(id) {
    document.getElementById(id).style.display="block";
}

function hideAllPages() {
    var pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach(function(page){
        hidePage(page.id);
    });

    var pageIds = ['home', 'skills', 'projects', 'languages'];
}

function show(id) {
    hideAllPages();
    showPage(id);
}

show('skills')