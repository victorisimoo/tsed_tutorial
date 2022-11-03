import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return this.aFunction();
  }
  aFunction(){
    return "hello";
  }
  /**
   * @param firstNumber 
   * @param secondNumber 
   * @returns +
   */
  sumarDosNumeros(firstNumber: number,secondNumber: number){
    return firstNumber + secondNumber;
  }
  /**
   * @param phrase
   * @returns phrase
   */
  turnPhrase(phrase:string){
    var modifyPhrase = phrase.split("");
    var turnPhrasePal = modifyPhrase.reverse();
    return turnPhrasePal.join("");
  }
  /**
   * @param {string} phrase
   * @returns phrase
   */
  invertir(phrase:string){
    if(phrase[0] == phrase[0].toLowerCase()){
      return this.changeCapitalization(phrase);
    }
    return this.changelowercase(phrase);
  }
  changeCapitalization(phrase:string){
    return phrase.toUpperCase();
  }
  changelowercase(phrase:string){
    return phrase.toLowerCase();
  }
}
