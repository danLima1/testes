import {Animal} from "./animal.class.js";

export class Artropode extends Animal{
#patas
#expecVida
#alimentacao
constructor (nome, especie, patas){
super (nome, especie)
this.#patas = patas
}

//getters
get patas(){return this.#patas}
get expecVida (){return this.#expecVida}
get alimentacao(){return this.#alimentacao}

//setters
set pelos(patas){return this.#patas = patas}
set expecVida (expecVida){return this.#expecVida = expecVida}
set alimentacao(alimentacao){this.#alimentacao = alimentacao}

}