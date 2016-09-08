import { of } from 'most';
import Cycle from '@cycle/most-run';
import {makeDOMDriver, div, h1} from '@cycle/dom';
import { compose, curry } from 'ramda';

function main() {
  const state$ = of('Hello World');
  const vdom$ = view(state$);
  
  return {
    DOM: vdom$
  } 
}

function view(state$) {
    return state$.map(text => 
        h1(text)
    );
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
