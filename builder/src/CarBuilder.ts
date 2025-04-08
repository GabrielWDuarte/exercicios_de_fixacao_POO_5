class Car {
    private model: string;
    private engineType: string;
    private color: string = 'Preto';
    private transmission: string = 'Manual';
    private sunroof: boolean = false;
    private premiumSound: boolean = false;
    private leatherSeats: boolean = false;
  
    constructor(model: string, engineType: string) {
      this.model = model;
      this.engineType = engineType;
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  
    setTransmission(transmission: string): void {
      this.transmission = transmission;
    }
  
    setSunroof(sunroof: boolean): void {
      this.sunroof = sunroof;
    }
  
    setPremiumSound(premiumSound: boolean): void {
      this.premiumSound = premiumSound;
    }
  
    setLeatherSeats(leatherSeats: boolean): void {
      this.leatherSeats = leatherSeats;
    }
  
    toString(): string {
      return `Carro: ${this.model} com motor ${this.engineType}. 
      Cor: ${this.color},
      Câmbio: ${this.transmission},
      Teto solar: ${this.sunroof ? 'Sim' : 'Não'},
      Som premium: ${this.premiumSound ? 'Sim' : 'Não'},
      Bancos de couro: ${this.leatherSeats ? 'Sim' : 'Não'}`;
    }
  }
  
  class CarBuilder {
    private car: Car;
  
    constructor(model: string, engineType: string) {
      this.car = new Car(model, engineType);
    }
  
    setColor(color: string): CarBuilder {
      this.car.setColor(color);
      return this;
    }
  
    setTransmission(transmission: string): CarBuilder {
      this.car.setTransmission(transmission);
      return this;
    }
  
    setSunroof(sunroof: boolean): CarBuilder {
      this.car.setSunroof(sunroof);
      return this;
    }
  
    setPremiumSound(premiumSound: boolean): CarBuilder {
      this.car.setPremiumSound(premiumSound);
      return this;
    }
  
    setLeatherSeats(leatherSeats: boolean): CarBuilder {
      this.car.setLeatherSeats(leatherSeats);
      return this;
    }
  
    build(): Car {
      return this.car;
    }
  }
  
  export { Car, CarBuilder };
  