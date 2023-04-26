import { heroes } from '../data/heroes';


/**
 * 
 * @param {HTMLDivElement} element 
 */


export const asyncComponent = (element) => {

   const id1 = '5d86371f2343e37870b91ef1'
   console.log('inicio')

   findHero(id1)
      .then(name => element.innerHTML = name)
      .catch(error => element.innerHTML = error)
}
/**
 * 
 * @param {Sting} id 
 */
const findHero = async (id) => {
   const hero = heroes.find(hero => hero.id === id)
   if (!hero) {
       throw `Hero with id ${id} not found`
   }
   return hero.name
}
