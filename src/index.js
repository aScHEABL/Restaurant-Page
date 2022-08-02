import './style.css';
import beefNoodlesPic from './beef_noodles.png';
import logo_pic from './logo-1.png';
import icon_facebook from './facebook.png';
import icon_instagram from './instagram.png';
import icon_email from './email.png';

export function index () {
    console.log('This is the index page!');

    //target & create DOM elements

    const selectDom = (() => {
        const li_array = ["WELCOME", "ORDER", "MENU", "RESERVATION", "CAREER"];
        const body_DOM = document.body;
        const contentDiv_DOM = document.querySelector(`#content`);
        const bgOverlay_DOM = document.createElement(`div`);
        const header_DOM = document.createElement(`header`);
        const nav_DOM = document.createElement(`nav`);
        const ul_DOM = document.createElement(`ul`);
        const main_DOM = document.createElement(`main`);
        const cardDiv_DOM = document.createElement(`div`);
        const titleDiv_DOM = document.createElement(`div`);
        const logoImg_DOM = document.createElement(`img`);
        const h1Title_DOM = document.createElement(`h1`);
        const h2Title_DOM = document.createElement(`h2`);
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

            // style

            p_DOM.classList.add(`paragraph`);
            img_DOM.classList.add(`icon`);

            return { break_DOM, p_DOM, img_DOM };
        }

        // style
        cardDiv_DOM.classList.add(`card-div`);
        bgOverlay_DOM.classList.add(`bg-overlay`);
        titleDiv_DOM.classList.add(`title-div`);
        logoImg_DOM.classList.add(`logo`);
        h1Title_DOM.classList.add(`h1-title`);
        h2Title_DOM.classList.add(`h2-title`);
        contactDiv_DOM.classList.add(`contact`);
        teleP_DOM.classList.add(`paragraph`);
        emailP_DOM.classList.add(`paragraph`);
        siteDescriptionDiv_DOM.classList.add(`site-description-div`);
        logoImg_DOM.src = logo_pic;
        facebookIcon.src = icon_facebook;
        instagramIcon.src = icon_instagram;
        emailIcon.src = icon_email;

        // textContent

        h1Title_DOM.textContent = `BEEFSIO`;
        h2Title_DOM.textContent = `吃進心坎裏的幸福味`;
        teleP_DOM.textContent = `+886-2-12345678`;
        emailP_DOM.textContent = `INFO@RESTAURANT.COM`;
        descriptionP1_DOM.textContent = `We believe food is the most loyalty friend, just hop in and feel it,
         combined with local ingredients and modern asian style, served with our love, that’s Page.`;
        descriptionP2_DOM.textContent = `米其林指南 2018 / 2019 / 2020 / 2021 / 2022 餐館推薦`;
        descriptionP3_DOM.textContent = `Michelin Guide Taipei 2018 / 2019 / 2020 / 2021 / 2022`;

        // append DOM

        contentDiv_DOM.append(bgOverlay_DOM);
        bgOverlay_DOM.append(header_DOM, main_DOM, footer_DOM);
        header_DOM.append(nav_DOM);
        nav_DOM.append(ul_DOM);
        li_array.forEach((li_DOM) => {
            const li = document.createElement(`li`);
            li.textContent = `${li_DOM}`;
            ul_DOM.append(li);
        })
        main_DOM.append(cardDiv_DOM);
        cardDiv_DOM.append(titleDiv_DOM, contactDiv_DOM, siteDescriptionDiv_DOM);
        titleDiv_DOM.append(logoImg_DOM, reuseableDOM().break_DOM, h1Title_DOM, reuseableDOM().break_DOM, h2Title_DOM);
        contactDiv_DOM.append(teleP_DOM, reuseableDOM().break_DOM, emailP_DOM)
        siteDescriptionDiv_DOM.append(descriptionP1_DOM, descriptionP2_DOM, descriptionP3_DOM);
        footer_DOM.append(facebookIcon, instagramIcon, emailIcon);

        return { body_DOM, contentDiv_DOM, bgOverlay_DOM, header_DOM, nav_DOM, ul_DOM, main_DOM, cardDiv_DOM, titleDiv_DOM, 
        logoImg_DOM, h1Title_DOM, h2Title_DOM, contactDiv_DOM, contactDiv_DOM };
    })()
}

index();