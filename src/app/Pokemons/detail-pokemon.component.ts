import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemons';
// import { POKEMONS } from './mock-pokemons';
import { PokemonsService } from './pokemons.service';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './app/pokemons/detail-pokemon.component.html',
	// providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {

	// pokemons: Pokemon[] = null;
	pokemon: Pokemon = null;

	constructor(private route: ActivatedRoute,
		 private router: Router,
		 private pokemonsService: PokemonsService
		 ) {}

	ngOnInit(): void {
		// this.pokemons = POKEMONS;

		let id = +this.route.snapshot.paramMap.get('id');
		this.pokemonsService.getPokemon(id)
		.subscribe(pokemon =>this.pokemon= pokemon);
		
	


		// for (let i = 0; i < this.pokemons.length; i++) {
		// 	if (this.pokemons[i].id == id) {
		// 		this.pokemon = this.pokemons[i];
		// 	}
		// }
	}

	goBack(): void {
		this.router.navigate(['/pokemon/all']);
	}
 goEdit(pokemon: Pokemon): void {
	 let link = ['/pokemon/edit', pokemon.id];
	 this.router.navigate(link);
 }

 delete(pokemon: Pokemon): void {
		this.pokemonsService.deletePokemon(pokemon)
			.subscribe(_ => this.goBack());
	}
}