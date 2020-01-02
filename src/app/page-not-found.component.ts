import { Component } from '@angular/core';

@Component({
	selector: 'page-404',
	template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, haha mauvaise touche mon poto !</h1>
      <a routerLink="/pokemons/all" class="waves-effect waves-teal btn-flat">
        Allez, retour à l'accueil !
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }