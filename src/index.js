import './style.css';
import beefNoodlesPic from './beef_noodles.png';
import logo_pic from './logo-1.png';
import icon_facebook from './facebook.png';
import icon_instagram from './instagram.png';
import icon_email from './email.png';
import { menu } from './memu.js';
import { welcome } from './welcome';

welcome();

export function loadWelcomePage () {
    welcome();
}

export function loadMenuPage () {
    menu();
}

