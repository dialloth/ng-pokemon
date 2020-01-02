import { Component } from '@angular/core';
//import { OnInit } from '@angular/core';

import { Pokemon } from './pokemons';
import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';
import{ PokemonsService } from './pokemons.service';

@Component({
	selector: 'list-pokemon',
	templateUrl:`./app/pokemons/list-pokemon.component.html`,
	// providers: [PokemonsService]
	//<h2>Liste des pokemons, yes papa !</h2>
})
export class ListPokemonComponent { 
	name = 'Diallo';

    private pokemons: Pokemon[] = null;
	constructor(private router:Router, private pokemonsService: PokemonsService){}
	
	private title: string = 'pokémons ';
	values = ' ';
	age = 40;
	
	// private value: string = ' ';

	ngOnInit():void{
		//this.pokemons = this.pokemonsService.getPokemons();
		this.getPokemons();
	}

	getPokemons(): void {
		this.pokemonsService.getPokemons()
		.subscribe(pokemons => this.pokemons = pokemons);
	}
	// onClick(){
	// 	alert("Clic imbébcile!");
	// }
	// onKey(value: string){
	// 	this.value = ' Bonjour ' +value;
	// }
	selectPokemon(pokemon: Pokemon): void{
        console.log("Vous avez cliqué sur " + pokemon.name);
        let link = [ '/pokemon', pokemon.id];
        this.router.navigate(link);
	}
}
