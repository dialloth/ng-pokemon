import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemons/pokemons';
import { POKEMONS } from './pokemons/mock-pokemons';

@Component({
	selector: 'pokemon-app',
	templateUrl:`./app/app.component.html`,
	//<h2>Liste de pokemons, yes maman !</h2>
})
export class AppComponent { 
	// name = 'Diallo';
	// private pokemons: Pokemon[];
	// private title: string = 'pokémons ';
	// values = ' ';
	// age = 40;
	
	// // private value: string = ' ';

	// ngOnInit(){
	// 	this.pokemons = POKEMONS;
	// }
	// // onClick(){
	// // 	alert("Clic imbébcile!");
	// // }
	// // onKey(value: string){
	// // 	this.value = ' Bonjour ' +value;
	// // }
	// selectPokemon(pokemon: Pokemon){
	// 	alert("Vous avez cliqué sur " + pokemon.name);
	// }
}
