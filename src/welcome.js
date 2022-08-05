import './style.css';
import beefNoodlesPic from './beef_noodles.png';
import logo_pic from './logo-1.png';
import icon_facebook from './facebook.png';
import icon_instagram from './instagram.png';
import icon_email from './email.png';
import { menu } from './memu.js';
import { loadWelcomePage, loadMenuPage, loadOrderPage, loadReservationPage, loadCareerPage } from './index.js';

export default function welcome () {
    console.log('This is the welcome page!');

    //target & create DOM elements

    const li_array = ["WELCOME", "ORDER", "MENU", "RESERVATION", "CAREER"];
    const contentDiv_DOM = document.querySelector(`#content`);
    const outerBgOverlay_DOM = document.createElement(`div`);
    const innerBgOverlay_DOM = document.createElement(`div`);
    const header_DOM = document.createElement(`header`);
    const nav_DOM = document.createElement(`nav`);
    const ul_DOM = document.createElement(`ul`);
    const main_DOM = document.createElement(`main`);
    const cardDiv_DOM = document.createElement(`div`);
    const titleDiv_DOM = document.createElement(`div`);
    const logoImg_DOM = document.createElement(`img`);
    const logoTitle1_DOM = reuseableDOM().h1Title_DOM;
    const logoTitle2_DOM = reuseableDOM().h2Title_DOM;
    const contactDiv_DOM = document.createElement(`div`);
    const teleP_DOM = reuseableDOM().p_DOM;
    const emailP_DOM = reuseableDOM().p_DOM;
    const siteDescriptionDiv_DOM = document.createElement(`div`);
    const descriptionP1_DOM = reuseableDOM().p_DOM;
    const descriptionP2_DOM = reuseableDOM().p_DOM;
    const descriptionP3_DOM = reuseableDOM().p_DOM;
    const footer_DOM = document.createElement(`footer`);
    const facebookIcon = reuseableDOM().img_DOM;
    const instagramIcon = reuseableDOM().img_DOM;
    const emailIcon = reuseableDOM().img_DOM;

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

        return { break_DOM, p_DOM, img_DOM, h1Title_DOM, h2Title_DOM };
    }

    //remove all child elements of contentDiv

    contentDiv_DOM.replaceChildren();

    // style
    main_DOM.classList.add(`welcome-main`);
    cardDiv_DOM.classList.add(`card-div`);
    outerBgOverlay_DOM.classList.add(`outer-bg-overlay`);
    innerBgOverlay_DOM.classList.add(`inner-bg-overlay`);
    titleDiv_DOM.classList.add(`title-div`);
    logoImg_DOM.classList.add(`logo`);
    logoTitle1_DOM.classList.add(`h1-title`);
    logoTitle2_DOM.classList.add(`h2-title`);
    contactDiv_DOM.classList.add(`contact`);
    siteDescriptionDiv_DOM.classList.add(`site-description-div`);
    logoImg_DOM.src = logo_pic;
    facebookIcon.src = icon_facebook;
    instagramIcon.src = icon_instagram;
    emailIcon.src = icon_email;

    // textContent

    logoTitle1_DOM.textContent = `BEEFSIO`;
    logoTitle2_DOM.textContent = `吃進心坎裏的幸福味`;
    teleP_DOM.textContent = `+886-2-12345678`;
    emailP_DOM.textContent = `INFO@RESTAURANT.COM`;
    descriptionP1_DOM.textContent = `We believe food is the most loyalty friend, just hop in and feel it,
        combined with local ingredients and modern asian style, served with our love, that’s Page.`;
    descriptionP2_DOM.textContent = `米其林指南 2018 / 2019 / 2020 / 2021 / 2022 餐館推薦`;
    descriptionP3_DOM.textContent = `Michelin Guide Taipei 2018 / 2019 / 2020 / 2021 / 2022`;

    // append DOM

    contentDiv_DOM.append(outerBgOverlay_DOM);
    outerBgOverlay_DOM.append(innerBgOverlay_DOM);
    innerBgOverlay_DOM.append(header_DOM, main_DOM, footer_DOM);
    header_DOM.append(nav_DOM);
    nav_DOM.append(ul_DOM);
    
    // list_DOM
    
    const listDOM = li_array.map((list) => {
        const li_DOM = document.createElement(`li`);
        li_DOM.textContent = list;
        ul_DOM.append(li_DOM);
        return li_DOM;
    })

    // tab switching logics

    listDOM.forEach((list, index) => {
        list.addEventListener('click', () => {
            switch (index) {
                case 0:
                    console.log(`clicked ${li_array[index]}, do nothing`);
                    break;
                case 1:
                    console.log(`clicked ${li_array[index]}, redirecting to ${li_array[index]} page`);
                    loadOrderPage();
                    break;
                case 2:
                    console.log(`clicked ${li_array[index]}, redirecting to ${li_array[index]} page`);
                    loadMenuPage();
                    break;
                case 3:
                    console.log(`clicked ${li_array[index]}, redirecting to ${li_array[index]} page`);
                    loadReservationPage();
                    break;
                case 4:
                    console.log(`clicked ${li_array[index]}, redirecting to ${li_array[index]} page`);
                    loadCareerPage();
                    break;
            }
        })
    })


    main_DOM.append(cardDiv_DOM);
    cardDiv_DOM.append(titleDiv_DOM, contactDiv_DOM, siteDescriptionDiv_DOM);
    titleDiv_DOM.append(logoImg_DOM, reuseableDOM().break_DOM, logoTitle1_DOM, reuseableDOM().break_DOM, logoTitle2_DOM);
    contactDiv_DOM.append(teleP_DOM, reuseableDOM().break_DOM, emailP_DOM)
    siteDescriptionDiv_DOM.append(descriptionP1_DOM, descriptionP2_DOM, descriptionP3_DOM);
    footer_DOM.append(facebookIcon, instagramIcon, emailIcon);

    return { contentDiv_DOM, outerBgOverlay_DOM ,innerBgOverlay_DOM, header_DOM, nav_DOM, ul_DOM, main_DOM, cardDiv_DOM, titleDiv_DOM, 
    logoImg_DOM, logoTitle1_DOM, logoTitle2_DOM, contactDiv_DOM, teleP_DOM, emailP_DOM, siteDescriptionDiv_DOM, 
    descriptionP1_DOM, descriptionP2_DOM, descriptionP3_DOM, footer_DOM };
}