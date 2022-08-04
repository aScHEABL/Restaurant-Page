import './style.css';
import logo_pic from './logo-1.png';
import { welcome } from './welcome';
import { loadWelcomePage } from './index.js';
import { loadMenuPage } from './index.js';

export function menu () {
    console.log('This is the menu page!');

    //target & create DOM elements

    const li_array = ["WELCOME", "ORDER", "MENU", "RESERVATION", "CAREER"];

    const contentDiv_DOM = document.querySelector(`#content`);
    const outerBgOverlay_DOM = document.createElement(`div`);
    const innerBgOverlay_DOM = document.createElement(`div`);
    const header_DOM = document.createElement(`header`);
    const nav_DOM = document.createElement(`nav`);
    const ul_DOM = document.createElement(`ul`);

    const listDOM = li_array.map((list) => {
        const li_DOM = document.createElement(`li`);
        li_DOM.textContent = list;
        ul_DOM.append(li_DOM);
        return li_DOM;
    })

    const body_DOM = document.body;
    const main_DOM = document.createElement(`main`);
    const cardDiv_DOM = document.createElement(`div`);
    const titleDiv_DOM = document.createElement(`div`);
    const logoImg_DOM = document.createElement(`img`);
    const logoTitle1_DOM = reuseableDOM().h1Title_DOM;
    const logoTitle2_DOM = reuseableDOM().h2Title_DOM;
    const siteDescriptionDiv_DOM = document.createElement(`div`);
    const menuDiv_DOM = document.createElement(`div`);

    // create menu

    // class createCuisineObject {
    //     constructor(Cname, Ename, price) {
    //         this.Cname = Cname;
    //         this.Ename = Ename;
    //         this.price = price;
    //     }
    // }

    // const cuisine0 = new createCuisineObject("清燉牛肉麵", "House Steamed Beef Noodle Soup", "$210");
    // const cuisine1 = new createCuisineObject("元盅燉雞麵", "House Steamed Chicken Noodle Soup", "$190");
    // const cuisine2 = new createCuisineObject("經典燉雞麵", "Simmered-Chicken Noodles with Drumstick", "$140");
    // const cuisine3 = new createCuisineObject("酥炸排骨麵(蒜味)", "Pork Chops Noodle Soup", "$170");
    // const cuisine4 = new createCuisineObject("成都煎蛋麵", "Chengdu Noodles with Sauted Egg in Tomato Soup", "$120");
    // const cuisine5 = new createCuisineObject("紅燒三寶麵", "Beef Noodle Soup with Meat, Tripe & Tendon", "$210");
    // const cuisine6 = new createCuisineObject("紅燒牛肉麵", "Braised Beef Shank Noodle Soup", "$190");
    // const cuisine7 = new createCuisineObject("燉蕃茄牛肉麵", "Tomato Beef Shank Noodle Soup", "$205");
    // const cuisine8 = new createCuisineObject("紅燒半筋半肉麵", "Braised Beef Noodle Soup with Tendon & Meat", "$235");
    // const cuisine9 = new createCuisineObject("青花椒乾拌麵", "Green Pepper Flavor Dry Noodles", "$90");


    const cuisineObject = [{Cname: "清燉牛肉麵", Ename: "House Steamed Beef Noodle Soup", price: "$210"}, 
                            {Cname: "元盅燉雞麵", Ename: "House Steamed Chicken Noodle Soup", price: "$190"}, 
                            {Cname: "經典燉雞麵", Ename: "Simmered-Chicken Noodles with Drumstick", price: "$140"},  
                            {Cname: "酥炸排骨麵(蒜味)", Ename: "Pork Chops Noodle Soup", price: "$170"}, 
                            {Cname: "成都煎蛋麵", Ename: "Chengdu Noodles with Sauted Egg in Tomato Soup", price: "$120"}, 
                            {Cname: "紅燒三寶麵", Ename: "Beef Noodle Soup with Meat, Tripe & Tendon", price: "$210"}, 
                            {Cname: "紅燒牛肉麵", Ename: "Braised Beef Shank Noodle Soup", price: "$190"}, 
                            {Cname: "燉蕃茄牛肉麵", Ename: "omato Beef Shank Noodle Soup", price: "$205"}, 
                            {Cname: "紅燒半筋半肉麵", Ename: "Braised Beef Noodle Soup with Tendon & Meat", price: "$235"}, 
                            {Cname: "青花椒乾拌麵",  Ename: "Green Pepper Flavor Dry Noodles", price: "$90"}, 
                            {Cname: "油蔥拌麵", Ename: "Dry Noodles with Chongqing Paste", price: "$90"}, 
                            {Cname: "炸餃子(10粒)", Ename: "Classic Fried Dumplings(10 pieces)", price: "$100"}, 
                            {Cname: "高麗菜豬肉水餃(8粒)", Ename: "Pork & Cabbage Dumplings(8 pieces)", price: "$60"}, 
                            {Cname: "紅油抄手", Ename: "Wonton in Chili Oil", price: "$80"}, 
                            {Cname: "滷水拼盤", Ename: "Marinated Assorted Meat", price: "$120"}
                        ];
    const cuisineCnameArray = cuisineObject.map((object) => object.Cname);
    const cuisineEnameArray = cuisineObject.map((object) => object.Ename);
    const cuisinePriceArray = cuisineObject.map((object) => object.price);
    console.log(cuisineCnameArray.length);

    let menuDivLeftArray_DOM = [];
    let menuDivRightArray_DOM = [];

    let cuisineP_DOM = [];
    let cuisineS_DOM = [];
    let cuisinePrice_DOM = [];

    for (let i = 0; i < 14; i++) {

        // create DOM

        menuDivLeftArray_DOM.push(document.createElement(`div`));
        menuDivRightArray_DOM.push(document.createElement(`div`));
        cuisineP_DOM.push(reuseableDOM().p_DOM);
        cuisineS_DOM.push(reuseableDOM().p_DOM);
        cuisinePrice_DOM.push(reuseableDOM().p_DOM);

        // style & class

        menuDivLeftArray_DOM[i].classList.add(`menu-div-left`);
        menuDivRightArray_DOM[i].classList.add(`menu-div-right`);
        // cuisineP_DOM[i].classList.add(`paragraph`);
        // cuisineS_DOM[i].classList.add(`paragraph`);
        // cuisinePrice_DOM[i].classList.add(`paragraph`);

        // textContent

        cuisineP_DOM[i].textContent = cuisineCnameArray[i];
        cuisineS_DOM[i].textContent = cuisineEnameArray[i];
        cuisinePrice_DOM[i].textContent = cuisinePriceArray[i];

    }

    for (let i = 0; i < 14; i++) {
        menuDivLeftArray_DOM[i].append(cuisineP_DOM[i], cuisinePrice_DOM[i], cuisineS_DOM[i]);
        menuDiv_DOM.append(menuDivLeftArray_DOM[i]);
    }



    function reuseableDOM () {

        //target & create DOM elements

        const break_DOM = document.createElement(`break`);
        const p_DOM = document.createElement(`p`);
        const img_DOM = document.createElement(`img`);
        const h1Title_DOM = document.createElement(`h1`);
        const h2Title_DOM = document.createElement(`h2`);    

        // style

        p_DOM.classList.add(`paragraph`);
        img_DOM.classList.add(`icon`);
        h1Title_DOM.classList.add(`h1-title`);
        h2Title_DOM.classList.add(`h2-title`);

        return { break_DOM, p_DOM, img_DOM, h1Title_DOM, h2Title_DOM };
    }


    // style
    
    outerBgOverlay_DOM.classList.add(`outer-bg-overlay`);
    innerBgOverlay_DOM.classList.add(`inner-bg-overlay`);
    main_DOM.classList.add(`menu-main`);
    cardDiv_DOM.classList.add(`card-div`);
    titleDiv_DOM.classList.add(`title-div`);
    logoImg_DOM.classList.add(`logo`);
    siteDescriptionDiv_DOM.classList.add(`site-description-div`);
    menuDiv_DOM.classList.add(`menu-div`);
    logoImg_DOM.src = logo_pic;

    // textContent

    logoTitle1_DOM.textContent = `BEEFSIO`;
    logoTitle2_DOM.textContent = `吃進心坎裏的幸福味`;
    // cuisineP1_DOM.textContent = `清燉牛肉麵`;
    // cuisineS1_DOM.textContent = `House Steamed Beef Noodle Soup`;
    // cuisine1Price_DOM.textContent = `$210`;

    //remove all child elements of contentDiv

    contentDiv_DOM.replaceChildren();

    // tab switching logics

    listDOM.forEach((list, index) => {
        list.addEventListener('click', () => {
            switch (index) {
                case 0:
                    console.log(`clicked ${li_array[index]}, redirecting to ${li_array[index]} page`);
                    loadWelcomePage();
                    break;
                case 1:
                    console.log(`clicked ${li_array[index]}, redirecting to ${li_array[index]} page`);
                    break;
                case 2:
                    console.log(`clicked ${li_array[index]}, do nothing`);
                    break;
                case 3:
                    console.log(`clicked ${li_array[index]}, redirecting to ${li_array[index]} page`);
                    break;
                case 4:
                    console.log(`clicked ${li_array[index]}, redirecting to ${li_array[index]} page`);
                    break;
            }
        })
    })
    
    // append DOM

    contentDiv_DOM.append(innerBgOverlay_DOM);
    innerBgOverlay_DOM.append(header_DOM, main_DOM);
    header_DOM.append(nav_DOM);
    nav_DOM.append(ul_DOM);

    main_DOM.append(cardDiv_DOM, reuseableDOM().break_DOM, menuDiv_DOM);
    cardDiv_DOM.append(titleDiv_DOM, siteDescriptionDiv_DOM);
    titleDiv_DOM.append(logoImg_DOM, reuseableDOM().break_DOM, logoTitle1_DOM, reuseableDOM().break_DOM, logoTitle2_DOM);

}