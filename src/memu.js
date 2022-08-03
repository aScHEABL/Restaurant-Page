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

    const main_DOM = document.createElement(`main`);
    const cardDiv_DOM = document.createElement(`div`);
    const titleDiv_DOM = document.createElement(`div`);
    const logoImg_DOM = document.createElement(`img`);
    const logoTitle1_DOM = reuseableDOM().h1Title_DOM;
    const logoTitle2_DOM = reuseableDOM().h2Title_DOM;
    const siteDescriptionDiv_DOM = document.createElement(`div`);
    const descriptionH1_DOM = reuseableDOM().h1Title_DOM;
    const descriptionH2_DOM = reuseableDOM().h2Title_DOM;
    const menuDiv_DOM = document.createElement(`div`);

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
    cardDiv_DOM.classList.add(`card-div`);
    titleDiv_DOM.classList.add(`title-div`);
    logoImg_DOM.classList.add(`logo`);
    siteDescriptionDiv_DOM.classList.add(`site-description-div`);
    logoImg_DOM.src = logo_pic;

    // textContent

    logoTitle1_DOM.textContent = `BEEFSIO`;
    logoTitle2_DOM.textContent = `吃進心坎裏的幸福味`;
    descriptionH1_DOM.textContent = `FOODS`;
    descriptionH2_DOM.textContent = `牛肉麵 手工麵會加收$10元`;

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

    main_DOM.append(cardDiv_DOM);
    cardDiv_DOM.append(titleDiv_DOM, siteDescriptionDiv_DOM);
    titleDiv_DOM.append(logoImg_DOM, reuseableDOM().break_DOM, logoTitle1_DOM, reuseableDOM().break_DOM, logoTitle2_DOM);
    siteDescriptionDiv_DOM.append(descriptionH1_DOM);

}