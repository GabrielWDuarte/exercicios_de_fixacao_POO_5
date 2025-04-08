class BurgerOrder {
    private bread: string;
    private protein: string;
    private cheese: boolean = false;
    private lettuce: boolean = false;
    private tomato: boolean = false;
    private onion: boolean = false;
    private specialSauce: boolean = false;
    private drink: boolean = false;
  
    constructor(bread: string, protein: string) {
      this.bread = bread;
      this.protein = protein;
    }
  
    setCheese(cheese: boolean): void {
      this.cheese = cheese;
    }
  
    setLettuce(lettuce: boolean): void {
      this.lettuce = lettuce;
    }
  
    setTomato(tomato: boolean): void {
      this.tomato = tomato;
    }
  
    setOnion(onion: boolean): void {
      this.onion = onion;
    }
  
    setSpecialSauce(specialSauce: boolean): void {
      this.specialSauce = specialSauce;
    }
  
    setDrink(drink: boolean): void {
      this.drink = drink;
    }
  
    toString(): string {
      return `Pedido: ${this.bread} com ${this.protein}. 
      Queijo: ${this.cheese ? 'Sim' : 'Não'},
      Alface: ${this.lettuce ? 'Sim' : 'Não'},
      Tomate: ${this.tomato ? 'Sim' : 'Não'},
      Cebola: ${this.onion ? 'Sim' : 'Não'},
      Molho Especial: ${this.specialSauce ? 'Sim' : 'Não'},
      Bebida: ${this.drink ? 'Sim' : 'Não'}`;
    }
  }
  
  class BurgerOrderBuilder {
    private order: BurgerOrder;
  
    constructor(bread: string, protein: string) {
      this.order = new BurgerOrder(bread, protein);
    }
  
    addCheese(cheese: boolean): BurgerOrderBuilder {
      this.order.setCheese(cheese);
      return this;
    }
  
    addLettuce(lettuce: boolean): BurgerOrderBuilder {
      this.order.setLettuce(lettuce);
      return this;
    }
  
    addTomato(tomato: boolean): BurgerOrderBuilder {
      this.order.setTomato(tomato);
      return this;
    }
  
    addOnion(onion: boolean): BurgerOrderBuilder {
      this.order.setOnion(onion);
      return this;
    }
  
    addSpecialSauce(specialSauce: boolean): BurgerOrderBuilder {
      this.order.setSpecialSauce(specialSauce);
      return this;
    }
  
    addDrink(drink: boolean): BurgerOrderBuilder {
      this.order.setDrink(drink);
      return this;
    }
  
    build(): BurgerOrder {
      return this.order;
    }
  }
  
  export { BurgerOrder, BurgerOrderBuilder };
  