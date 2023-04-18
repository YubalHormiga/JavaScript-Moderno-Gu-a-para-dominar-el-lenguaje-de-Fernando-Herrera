import html from './app.html?raw';
/**
 * @param {String} elemmenID
 */

export const App = (elemmenID) => {
    //Cuando la función se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elemmenID).appendChild(app)
    })();
}