import './style.css';
import beefNoodlesPic from './beef_noodles.png';
import logo_pic from './logo-0-1.png';

(function () {
    console.log('Hello World!');
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
        const titleArea_DOM = document.createElement(`div`);
        const logoImg_DOM = document.createElement(`img`);
        const h1Title_DOM = document.createElement(`h1`);
        const h2Title_DOM = document.createElement(`h2`);

        let reuseableDOM = () => {
            const break_DOM = document.createElement(`break`);
            return { break_DOM };
        }

        // style
        cardDiv_DOM.classList.add(`card-div`);
        bgOverlay_DOM.classList.add(`bg-overlay`);
        titleArea_DOM.classList.add(`title-area`);
        logoImg_DOM.classList.add(`logo`);
        logoImg_DOM.src = logo_pic;
        h1Title_DOM.classList.add(`h1-title`);
        h2Title_DOM.classList.add(`h2-title`);
        // textContent
        h1Title_DOM.textContent = `BEEFSIO`;
        h2Title_DOM.textContent = `轉生取得了外掛技能的我，要在異世界大吃牛肉麵！？`;
        // append DOM
        contentDiv_DOM.append(bgOverlay_DOM);
        bgOverlay_DOM.append(header_DOM, main_DOM);
        header_DOM.append(nav_DOM);
        nav_DOM.append(ul_DOM);
        li_array.forEach((li_DOM) => {
            const li = document.createElement(`li`);
            li.textContent = `${li_DOM}`;
            ul_DOM.append(li);
        })
        main_DOM.append(cardDiv_DOM);
        cardDiv_DOM.append(titleArea_DOM);
        titleArea_DOM.append(logoImg_DOM, reuseableDOM().break_DOM, h1Title_DOM, reuseableDOM().break_DOM, h2Title_DOM);


        return { body_DOM, contentDiv_DOM, bgOverlay_DOM, header_DOM, nav_DOM, ul_DOM };
    })()

})();