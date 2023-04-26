import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async (element) => {

    const id = '5d86371f1efebc31def272e221'
    if (await getHeroAsync(id)){
        element.innerHTML= `Si existe el heroe`
        return
    }else{
        
        element.innerHTML= `No existe el heroe`
    }
}
/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {

    const heroPromises = [];

    heroIds.forEach(id => {
        heroPromises.push(getHeroAsync(id));
    });

    return heroPromises;
}

const getHeroAsync = async (id) => {

    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find(hero => hero.id === id);
}