function ChangeTheme() {
    let element = document.body;
    let header = document.querySelector('.header');
    let about = document.querySelector('.about');
    let ul = document.querySelector('ul');
    let li = document.querySelectorAll('li')[0];
    let li2 = document.querySelectorAll('li')[1];
    let li3 = document.querySelectorAll('li')[2];
    let container = document.querySelector('.container');
    let p = document.querySelector('p');
    let a = document.querySelectorAll('a')[0];
    let a2 = document.querySelectorAll('a')[1];
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');
    let iphone = document.querySelector('.iphone');
    let html = document.querySelector('html');
    let nav = document.querySelector('nav');
    let button = document.querySelector('button');
    if (p === null) {
        footer.classList.toggle("dark-mode");
        element.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        container.classList.toggle("dark-mode");
        main.classList.toggle("dark-mode");
        iphone.classList.toggle("dark-mode");
        ul.classList.toggle("dark-mode");
        li.classList.toggle("dark-mode");
        li2.classList.toggle("dark-mode");
        li3.classList.toggle("dark-mode");
        a.classList.toggle("dark-mode");
        a2.classList.toggle("dark-mode");
        nav.classList.toggle("dark-mode");
        button.classList.toggle("dark-mode");
    
    } else {
        html.classList.toggle("dark-mode");
        button.classList.toggle("dark-mode");
        element.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        container.classList.toggle("dark-mode");
        p.classList.toggle("dark-mode");
        main.classList.toggle("dark-mode");
        about.classList.toggle("dark-mode");
        ul.classList.toggle("dark-mode");
        li.classList.toggle("dark-mode");
        li2.classList.toggle("dark-mode");
        li3.classList.toggle("dark-mode");
        a.classList.toggle("dark-mode");
        a2.classList.toggle("dark-mode");
    
    }
}