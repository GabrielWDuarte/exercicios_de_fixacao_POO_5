import { BurgerOrderBuilder } from './BurgerOrderBuilder';
import { HotelReservationBuilder } from './HotelReservationBuilder';
import { CarBuilder } from './CarBuilder';

class BurgerOrderDirector {
  static createSimpleBurger() {
    return new BurgerOrderBuilder('Pão de forma', 'Carne')
      .addCheese(true)
      .addLettuce(false)
      .addTomato(false)
      .addOnion(false)
      .addSpecialSauce(false)
      .addDrink(true)
      .build();
  }
}

class HotelReservationDirector {
  static createLuxuryPackage() {
    return new HotelReservationBuilder('Luxo', 7)
      .addBreakfast(true)
      .addSeaView(true)
      .addWifi(true)
      .addLateCheckout(true)
      .build();
  }
}

class CarDirector {
  static createLuxuryCar() {
    return new CarBuilder('Fusca', 'Gasolina')
      .setColor('Prata')
      .setTransmission('Automático')
      .setSunroof(true)
      .setPremiumSound(true)
      .setLeatherSeats(true)
      .build();
  }
}

export { BurgerOrderDirector, HotelReservationDirector, CarDirector };
