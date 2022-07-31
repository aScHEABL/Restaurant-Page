import './style.css';
import beefNoodlesPic from './beef_noodles.png';

(function () {
    console.log('Hello World!');
    //target & create DOM elements
    const selectDom = (() => {
        const li_array = ["welcome", "order", "memu", "reservation", "career"];
        const body_DOM = document.body;
        const contentDiv_DOM = document.querySelector(`#content`);
        const bgOverlay_DOM = document.createElement(`div`);
        const header_DOM = document.createElement(`header`);
        const nav_DOM = document.createElement(`nav`);
        const ul_DOM = document.createElement(`ul`);
        li_array.forEach((li_DOM) => {
            console.log(li_DOM);
            const li = document.createElement(`li`);
            li.textContent = `${li_DOM}`;
            ul_DOM.append(li);
        })


        bgOverlay_DOM.classList.add(`bg-overlay`);
        contentDiv_DOM.append(bgOverlay_DOM, header_DOM);
        header_DOM.append(nav_DOM);
        nav_DOM.append(ul_DOM);
        ul_DOM.append()
        return { body_DOM, contentDiv_DOM, bgOverlay_DOM };
    })()

})();