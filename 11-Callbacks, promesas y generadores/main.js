import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponents } from './src/conceps/01-enviroments'
import { callbacksComponents } from './src/conceps/02-callbacks'
import { promiseComponent } from './src/conceps/03-promises'
import { promiseRaceComponent } from './src/conceps/04-promise-race'
import { asyncComponent } from './src/conceps/05-async'
import { asyncAwaitComponent } from './src/conceps/06-async-await'
import { asyncAwait2Component } from './src/conceps/07-async-await'
import { forAwaitComponent } from './src/conceps/08-for-await'
import { generatorFunctionComponent } from './src/conceps/09-generatior'
import { generatorsAsyncComponent } from './src/conceps/10-generator-async'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">

    </div>
   
  </div>
`
const element = document.querySelector('.card')
// environmentsComponents(element)
// callbacksComponents(element)
// promiseComponent(element)
// promiseRaceComponent(element)
// asyncComponent(element)
// asyncAwaitComponent(element)
// asyncAwait2Component(element)
// forAwaitComponent(element)
// generatorFunctionComponent(element)
generatorsAsyncComponent
