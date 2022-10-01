/** 
 * index.controller.server.js
 * Amin Hossein Tehrani
 * 301225212
 * October 1 2022
 * 
 * 
 */


export function displayHomePage(req, res, next) {
    res.render('index', {title: 'Home',page: 'home'});
};




export function displayAboutPage(req, res, next) {
    res.render('index', {title: 'About Me',page: 'about'});
};

export function displayProjectsPage(req, res, next) {
    res.render('index', {title: 'Projects',page: 'projects'});
};

export function displayServicesPage(req, res, next) {
    res.render('index', {title: 'Services',page: 'services'});
};


export function displayContactPage(req, res, next) {
    res.render('index', {title: 'Contact',page: 'contact'});

};


 




