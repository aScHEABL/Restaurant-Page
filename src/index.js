import menu from './menu.js';
import welcome from './welcome.js';
import order from './order.js';
import reservation from './reservation.js';
import career from './career.js';

welcome();

export function loadWelcomePage () {
    welcome();
}

export function loadOrderPage() {
    order();
}

export function loadMenuPage () {
    menu();
}

export function loadReservationPage () {
    reservation();
}

export function loadCareerPage () {
    career();
}