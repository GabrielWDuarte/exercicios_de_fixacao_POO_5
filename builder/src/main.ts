import GeradorPDF from "./GeradorPDF";
import { BurgerOrderBuilder } from './BurgerOrderBuilder';
import { HotelReservationBuilder } from './HotelReservationBuilder';
import { CarBuilder } from './CarBuilder';
import { BurgerOrderDirector, HotelReservationDirector, CarDirector } from './Director';

console.log("## Criação objeto A4");
const pdfA4 = new GeradorPDF(
  "portrait",
  "mm",
  210,
  297,
  30,
  20,
  30,
  20,
  true,
  15,
  true,
  15,
  "#ffffff",
  "UTF-8"
);

console.log(pdfA4.toString());

console.log("## Criação objeto A3");
const pdfA3 = new GeradorPDF(
  "portrait",
  "mm",
  297,
  420,
  60,
  40,
  60,
  40,
  false,
  0,
  false,
  0,
  "#ffffff",
  "UTF-8"
);

console.log(pdfA3.toString());

// ## Exercício 1 - Burger Order (Montagem de Pedidos no Restaurante)
console.log("## Criação de pedido no restaurante");
const burgerOrder = new BurgerOrderBuilder('Pão de forma', 'Carne')
  .addCheese(true)
  .addLettuce(true)
  .addTomato(true)
  .addOnion(false)
  .addSpecialSauce(true)
  .addDrink(true)
  .build();
console.log(burgerOrder.toString());

// ## Exercício 2 - Hotel Reservation (Reserva de Quartos no Hotel)
console.log("## Criação de reserva de hotel");
const hotelReservation = new HotelReservationBuilder('Luxo', 3)
  .addBreakfast(true)
  .addSeaView(true)
  .addWifi(true)
  .addLateCheckout(false)
  .build();
console.log(hotelReservation.toString());

// ## Exercício 3 - Car Configuration (Configuração de Carro)
console.log("## Criação de configuração de carro");
const carConfig = new CarBuilder('Fusca', 'Gasolina')
  .setColor('Azul')
  .setTransmission('Automático')
  .setSunroof(true)
  .setPremiumSound(true)
  .setLeatherSeats(true)
  .build();
console.log(carConfig.toString());

// ## Diretores - Exemplo de uso de diretores para criar variações simplificadas
console.log("## Uso de Diretores");

// Pedido simples no restaurante
const simpleBurger = BurgerOrderDirector.createSimpleBurger();
console.log(simpleBurger.toString());

// Reserva de hotel simples
const simpleHotelReservation = HotelReservationDirector.createLuxuryPackage();
console.log(simpleHotelReservation.toString());

// Configuração de carro de luxo
const luxuryCar = CarDirector.createLuxuryCar();
console.log(luxuryCar.toString());
