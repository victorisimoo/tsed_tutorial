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
   * FUNCION PARA SUMAR DOS NUMEROS
   * @param primerNumero 
   * @param segundoNumero 
   * @returns suma de los dos numeros
   */
  sumarDosNumeros(primerNumero: number,segundoNumero: number){
    return primerNumero + segundoNumero;
  }
  /**
   * FUNCION DARVUELTA - INVIERTE EL ORDEN DE LAS PALABRAS
   * @param palabra - Palabra a ser volteada
   * @returns palabra invertida
   */
  darVuelta(palabra:string){
    var palabraSeparada = palabra.split("");
    var darVueltaPal = palabraSeparada.reverse();
    return darVueltaPal.join("");
  }
  /**
   * FUNCION INVERTIR - CAMBIA LAS PALABRAS EN MAYUSCULAS POR MINUSCULAS Y VICEVERSA
   * @param {string} palabra - palabra a ser cambiada
   * @returns palabra cambiada
   */
  invertir(palabra:string){
    if(palabra[0] == palabra[0].toLowerCase()){
      return this.cambiarMayusculas(palabra);
    }
    return this.cambiarMinusculas(palabra);
  }
  cambiarMayusculas(palabra:string){
    return palabra.toUpperCase();
  }
  cambiarMinusculas(palabra:string){
    return palabra.toLowerCase();
  }
}
