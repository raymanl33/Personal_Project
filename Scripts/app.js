
let taipei = document.querySelector('.taipei');
let sunset_shot = document.querySelector('.sunset_shot');
let clock = document.querySelector('.clock');
let skychair_ryan = document.querySelector('.skychair_ryan');
let backyard = document.querySelector('.backyard');
let downtown = document.querySelector('.downtown');
let downtown2 = document.querySelector('.downtown2');
let oakridge = document.querySelector('.oakridge');
let plant = document.querySelector('.oakridge_plant');
let fire = document.querySelector('.fire');
let van_house = document.querySelector('.van_house');
let korea_uni = document.querySelector('.korea_uni');
let h2 = document.querySelector('h2');
let p = document.querySelector('p');

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


function dropdownMenu() {
    let HomeMenu = document.querySelector('#HomeDropdown');
    HomeMenu.classList.toggle("show");
}


function ShotoniPhone() {
    let show = document.querySelector('.show');
    show.addEventListener('click', (e)=> {
        let image = e.target.innerText;
        if (image === 'Taipei') {
            remove_all();
            Taipei_Content();
            e.stopPropagation();
        } else if (image === 'All Images') {
            remove_all();
            addimages();
            e.stopPropagation();
        } else if (image === 'Arbutus') {
            remove_all();
            Arbutus_Content();
            e.stopPropagation();
        } else if (image === 'Clock Tower') {
            remove_all();
            ClockTower_Content();
            e.stopPropagation();
        } else if (image === 'Skychair') {
            remove_all();
            Skychair_Content();
            e.stopPropagation();
        } else if (image === 'Backyard') {
            remove_all();
            Backyard_Content();
            e.stopPropagation();
        } else if (image === 'Mount Pleasant Graffiti') {
            remove_all();
            Graffiti_Content();
            e.stopPropagation();
        } else if (image === 'Mount Pleasant Apartments') {
            remove_all();
            Apartments_Contents();
            e.stopPropagation();
        } else if (image === 'Oakridge View') {
            remove_all();
            Oakridge_Content();
            e.stopPropagation();
        } else if (image === 'Plant') {
            remove_all();
            Plant_Content();
            e.stopPropagation();
        } else if (image === 'Fire Night') {
            remove_all();
            Fire_Content();
            e.stopPropagation();
        } else if (image === 'Vancouver House') {
            remove_all();
            VanHouse_Content();
            e.stopPropagation();
        } else if (image === 'Kyung Hee University') {
            remove_all();
            Ko_uni_Content();
            e.stopPropagation();
        }
    })
}

function remove_all() {
    if (p === null || h2 === null) {
        console.log('yes')
        clock.remove();
        taipei.remove();
        sunset_shot.remove();
        skychair_ryan.remove();
        backyard.remove();
        downtown.remove();
        downtown2.remove();
        oakridge.remove();
        plant.remove();
        fire.remove();
        van_house.remove();
        korea_uni.remove();
    } else if (p != null || h2 != null) { 
        console.log('no')
        
        p.remove();
        h2.remove();
        clock.remove();
        taipei.remove();
        sunset_shot.remove();
        skychair_ryan.remove();
        backyard.remove();
        downtown.remove();
        downtown2.remove();
        oakridge.remove();
        plant.remove();
        fire.remove();
        van_house.remove();
        korea_uni.remove();
    }
}

function addimages () {
    let container = document.querySelector('.container');
    let taipeiIMG = document.createElement('img');
    taipeiIMG.setAttribute('src', 'Images/taipei.jpeg');
    taipeiIMG.setAttribute('width', '400');
    taipeiIMG.setAttribute('alt', 'Rush hour in Taipei');
    taipeiIMG.classList.add('taipei', 'hover');
    container.appendChild(taipeiIMG);

    let SunsetIMG = document.createElement('img');
    SunsetIMG.setAttribute('src', 'Images/IMG_2038.jpeg');
    SunsetIMG.setAttribute('width', '400');
    SunsetIMG.setAttribute('alt', 'sunset in Vancouver');
    SunsetIMG.classList.add('sunset_shot', 'hover');
    container.appendChild(SunsetIMG);

    let ClockIMG = document.createElement('img');
    ClockIMG.setAttribute('src', 'Images/clock.jpeg');
    ClockIMG.setAttribute('width', '400');
    ClockIMG.setAttribute('alt', 'clock in Vancouver');
    ClockIMG.classList.add('clock', 'hover');
    container.appendChild(ClockIMG);

    let RyanIMG = document.createElement('img');
    RyanIMG.setAttribute('src', 'Images/skychair_ryan.jpeg');
    RyanIMG.setAttribute('width', '400');
    RyanIMG.setAttribute('alt', 'Snowboarding at Cypress');
    RyanIMG.classList.add('skychair_ryan', 'hover');
    container.appendChild(RyanIMG);

    let BackyardIMG = document.createElement('img');
    BackyardIMG.setAttribute('src', 'Images/7500_backyard.jpeg');
    BackyardIMG.setAttribute('width', '400');
    BackyardIMG.setAttribute('alt', 'Backyard');
    BackyardIMG.classList.add('backyard', 'hover');
    container.appendChild(BackyardIMG);

    let DowntownIMG = document.createElement('img');
    DowntownIMG.setAttribute('src', 'Images/Downtown.jpeg');
    DowntownIMG.setAttribute('width', '400');
    DowntownIMG.setAttribute('alt', 'Downtown');
    DowntownIMG.classList.add('downtown', 'hover');
    container.appendChild(DowntownIMG);

    let Downtown2IMG = document.createElement('img');
    Downtown2IMG.setAttribute('src', 'Images/Downtown2.jpeg');
    Downtown2IMG.setAttribute('width', '400');
    Downtown2IMG.setAttribute('alt', 'Downtown');
    Downtown2IMG.classList.add('downtown2', 'hover');
    container.appendChild(Downtown2IMG);

    let OakridgeIMG = document.createElement('img');
    OakridgeIMG.setAttribute('src', 'Images/oakridge.jpeg');
    OakridgeIMG.setAttribute('width', '400');
    OakridgeIMG.setAttribute('alt', 'Oakridge');
    OakridgeIMG.classList.add('oakridge', 'hover');
    container.appendChild(OakridgeIMG);

    let PlantIMG = document.createElement('img');
    PlantIMG.setAttribute('src', 'Images/plant.jpeg');
    PlantIMG.setAttribute('width', '400');
    PlantIMG.setAttribute('alt', 'Oakridge Plant');
    PlantIMG.classList.add('oakridge_plant', 'hover');
    container.appendChild(PlantIMG);

    let FireIMG = document.createElement('img');
    FireIMG.setAttribute('src', 'Images/fire.jpeg');
    FireIMG.setAttribute('width', '400');
    FireIMG.setAttribute('alt', 'Fire in Richmond');
    FireIMG.classList.add('fire', 'hover');
    container.appendChild(FireIMG);

    let VanHouseIMG = document.createElement('img');
    VanHouseIMG.setAttribute('src', 'Images/van_house.jpeg');
    VanHouseIMG.setAttribute('width', '400');
    VanHouseIMG.setAttribute('alt', 'Vancouver House');
    VanHouseIMG.classList.add('van_house', 'hover');
    container.appendChild(VanHouseIMG);

    let KoreaUniIMG = document.createElement('img');
    KoreaUniIMG.setAttribute('src', 'Images/korea_uni.jpeg');
    KoreaUniIMG.setAttribute('width', '400');
    KoreaUniIMG.setAttribute('alt', 'Kyung Hee University');
    KoreaUniIMG.classList.add('korea_uni', 'hover');
    container.appendChild(KoreaUniIMG);
}

function Ko_uni_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Kyung Hee University");
    let p = document.createElement('p');
    let p_text = document.createTextNode("Kyung Hee University is a private university in South Korea with campuses in Seoul and Suwon. Founded in 1949, it is widely regarded as one of the best universities in South Korea. ")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let KoreaUniIMG = document.createElement('img');
    KoreaUniIMG.setAttribute('src', 'Images/korea_uni.jpeg');
    KoreaUniIMG.setAttribute('width', '400');
    KoreaUniIMG.setAttribute('alt', 'Kyung Hee University');
    KoreaUniIMG.classList.add('korea_uni', 'hover');
    container.appendChild(KoreaUniIMG);
    container.appendChild(p);
}

function VanHouse_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Vancouver House");
    let p = document.createElement('p');
    let p_text = document.createTextNode("Vancouver House was designed by Danish architect Bjarke Ingels. The design is based on a triangle that rises from the ground and gradually transitions into a rectangle as it ascends to the top.[4] The design reflects the constraints of developing the triangular-shaped plot of land immediately east of the Howe Street on-ramp of the Granville Street Bridge.[5] The east and west facades of the building feature box-shaped balconies, giving the building's exterior a honeycomb texture.[6]")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let VanHouseIMG = document.createElement('img');
    VanHouseIMG.setAttribute('src', 'Images/van_house.jpeg');
    VanHouseIMG.setAttribute('width', '400');
    VanHouseIMG.setAttribute('alt', 'Vancouver House');
    VanHouseIMG.classList.add('van_house', 'hover');
    container.appendChild(VanHouseIMG);
    container.appendChild(p);
}


function Fire_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Aftermath");
    let p = document.createElement('p');
    let p_text = document.createTextNode("Not in history has a modern imperial city been so completely destroyed. San Francisco is gone. Jack London after the 1906 San Francisco earthquake and fire. This article is a list of notable fires. Contents. 1 Town and city fires; 2 Building or structure fires ... Cloosh Valley saw the worst of these fires with 1,500 hectares of forest ...")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let FireIMG = document.createElement('img');
    FireIMG.setAttribute('src', 'Images/fire.jpeg');
    FireIMG.setAttribute('width', '400');
    FireIMG.setAttribute('alt', 'Fire in Richmond');
    FireIMG.classList.add('fire', 'hover');
    container.appendChild(FireIMG);
    container.appendChild(p);
}


function Plant_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Plant Stuff Toy");
    let p = document.createElement('p');
    let p_text = document.createTextNode("A stuffed toy is a toy doll with an outer fabric sewn from a textile and stuffed with flexible material. They are known by many names, such as plush toys, plushies, stuffed animals, and stuffies; in Britain and Australia, they may also be called soft toys or cuddly toys.")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let PlantIMG = document.createElement('img');
    PlantIMG.setAttribute('src', 'Images/plant.jpeg');
    PlantIMG.setAttribute('width', '400');
    PlantIMG.setAttribute('alt', 'Oakridge Plant');
    PlantIMG.classList.add('oakridge_plant', 'hover');
    container.appendChild(PlantIMG);
    container.appendChild(p);
}



function Oakridge_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Oakdridge View");
    let p = document.createElement('p');
    let p_text = document.createTextNode("The concepts of ‘Hilltop Town’ and ‘Earthwork Terraces’ are central ideas to guide the design development and architectural expression of the buildings of Oakridge. The interplay of vertical and horizontal elements both within and between buildings should be used both to unify and to express individuality. The concept of earthwork terraces is a strong wayfinding and legibility device expressed most visibly in the terraces that bring the roof-top New Park down to grade, but that are echoed in the green terraces, stepbacks, cantilevered building elements, and balconies at upper levels that extend green horizontal layers upwards into the buildings integrating landscape and architecture, and varied building forms. ")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let OakridgeIMG = document.createElement('img');
    OakridgeIMG.setAttribute('src', 'Images/oakridge.jpeg');
    OakridgeIMG.setAttribute('width', '400');
    OakridgeIMG.setAttribute('alt', 'Oakridge');
    OakridgeIMG.classList.add('oakridge', 'hover');
    container.appendChild(OakridgeIMG);
    container.appendChild(p);
}



function Apartments_Contents() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Apartments");
    let p = document.createElement('p');
    let p_text = document.createTextNode("An apartment, or flat, is a self-contained housing unit that occupies only part of a building, generally on a single story. There are many names for these overall buildings, see below.")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let Downtown2IMG = document.createElement('img');
    Downtown2IMG.setAttribute('src', 'Images/Downtown2.jpeg');
    Downtown2IMG.setAttribute('width', '400');
    Downtown2IMG.setAttribute('alt', 'Downtown');
    Downtown2IMG.classList.add('downtown2', 'hover');
    container.appendChild(Downtown2IMG);
    container.appendChild(p);
}


function Graffiti_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Graffiti");
    let p = document.createElement('p');
    let p_text = document.createTextNode("Graffiti is writing or drawings made on a wall or other surface, usually without permission and within public view. Graffiti ranges from simple written words to elaborate wall paintings, and has existed since ancient times, with examples dating back to ancient Egypt, ancient Greece, and the Roman Empire.")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let DowntownIMG = document.createElement('img');
    DowntownIMG.setAttribute('src', 'Images/Downtown.jpeg');
    DowntownIMG.setAttribute('width', '400');
    DowntownIMG.setAttribute('alt', 'Downtown');
    DowntownIMG.classList.add('downtown', 'hover');
    container.appendChild(DowntownIMG);
    container.appendChild(p);
}


function Backyard_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Backyard in April");
    let p = document.createElement('p');
    let p_text = document.createTextNode("A backyard, or back yard, is a yard at the back of a house, common in suburban developments in the Western world. In Australia, until the mid-20th century, the back yard of a property would traditionally contain a fowl run, outhouse, vegetable patch, and woodheap.")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let BackyardIMG = document.createElement('img');
    BackyardIMG.setAttribute('src', 'Images/7500_backyard.jpeg');
    BackyardIMG.setAttribute('width', '400');
    BackyardIMG.setAttribute('alt', 'Backyard');
    BackyardIMG.classList.add('backyard', 'hover');
    container.appendChild(BackyardIMG);
    container.appendChild(p);
}

function Skychair_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Cypress Mountain in April");
    let p = document.createElement('p');
    let p_text = document.createTextNode("Cypress Mountain is a ski area in West Vancouver, British Columbia, Canada, located in the southern section of Cypress Provincial Park, operated under a BC Parks Park Use Permit. The ski resort is a 30-minute drive north of downtown Vancouver, and has 53 named alpine ski runs and 19 km of cross country trails.")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let RyanIMG = document.createElement('img');
    RyanIMG.setAttribute('src', 'Images/skychair_ryan.jpeg');
    RyanIMG.setAttribute('width', '400');
    RyanIMG.setAttribute('alt', 'Snowboarding at Cypress');
    RyanIMG.classList.add('skychair_ryan', 'hover');
    container.appendChild(RyanIMG);
    container.appendChild(p);
}




function ClockTower_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Edwardian Commercial Building");
    let p = document.createElement('p');
    let p_text = document.createTextNode("Located near the busy intersection of Georgia and Granville Streets, the Vancouver Block is a striking fifteen-storey Edwardian Commercial building topped by a large clock tower and finished with ornamental terra cotta.")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let ClockIMG = document.createElement('img');
    ClockIMG.setAttribute('src', 'Images/clock.jpeg');
    ClockIMG.setAttribute('width', '400');
    ClockIMG.setAttribute('alt', 'clock in Vancouver');
    ClockIMG.classList.add('clock', 'hover');
    container.appendChild(ClockIMG);
    container.appendChild(p);
}


function Arbutus_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Sunset Shot Near Arbutus Greenway");
    let p = document.createElement('p');
    let p_text = document.createTextNode("The Arbutus Greenway is one of several walking and biking paths we're developing to encourage people to use active and sustainable modes of transportation. The project, which started in 2016, currently has a temporary asphalt path and attracts thousands of people every day, providing people an opportunity to walk, bike, roll from False Creek to the Fraser River. In light of its success, in 2018, City Council endorsed enhancing the path to give people of all ages and abilities places to gather and rest and enjoy the surrounding landscape.")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let SunsetIMG = document.createElement('img');
    SunsetIMG.setAttribute('src', 'Images/IMG_2038.jpeg');
    SunsetIMG.setAttribute('width', '400');
    SunsetIMG.setAttribute('alt', 'sunset in Vancouver');
    SunsetIMG.classList.add('sunset_shot', 'hover');
    container.appendChild(SunsetIMG);
    container.appendChild(p);

}



function Taipei_Content() {
    let container = document.querySelector('.container')
    let h2 = document.createElement('h2');
    let h2_text = document.createTextNode("Rush Hour in Taipei");
    let p = document.createElement('p');
    let p_text = document.createTextNode("in Taipei , rush hour is around 8~9 am and 5~7pm . but the traffic is not a big problem . By MRT , from the hotel to XMD may needs 9 stops or around 20 mins .")
    h2.appendChild(h2_text);
    container.appendChild(h2);
    p.appendChild(p_text);
    let taipeiIMG = document.createElement('img');
    taipeiIMG.setAttribute('src', 'Images/taipei.jpeg');
    taipeiIMG.setAttribute('width', '400');
    taipeiIMG.setAttribute('alt', 'Rush hour in Taipei');
    taipeiIMG.classList.add('taipei', 'hover');
    container.appendChild(taipeiIMG);
    container.appendChild(p);

}


function remove_taipei() {
    let h2 = document.querySelector('h2');
    let p = document.querySelector('p');
    p.remove();
    h2.remove();
}


