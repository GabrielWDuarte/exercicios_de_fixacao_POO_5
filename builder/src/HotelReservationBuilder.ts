class HotelReservation {
    private roomType: string;
    private breakfast: boolean = false;
    private seaView: boolean = false;
    private wifi: boolean = false;
    private lateCheckout: boolean = false;
    private nights: number;
  
    constructor(roomType: string, nights: number) {
      this.roomType = roomType;
      this.nights = nights;
    }
  
    setBreakfast(breakfast: boolean): void {
      this.breakfast = breakfast;
    }
  
    setSeaView(seaView: boolean): void {
      this.seaView = seaView;
    }
  
    setWifi(wifi: boolean): void {
      this.wifi = wifi;
    }
  
    setLateCheckout(lateCheckout: boolean): void {
      this.lateCheckout = lateCheckout;
    }
  
    toString(): string {
      return `Reserva: Quarto ${this.roomType} por ${this.nights} noites. 
      Café da manhã: ${this.breakfast ? 'Sim' : 'Não'},
      Vista para o mar: ${this.seaView ? 'Sim' : 'Não'},
      Wifi premium: ${this.wifi ? 'Sim' : 'Não'},
      Late Checkout: ${this.lateCheckout ? 'Sim' : 'Não'}`;
    }
  }
  
  class HotelReservationBuilder {
    private reservation: HotelReservation;
  
    constructor(roomType: string, nights: number) {
      this.reservation = new HotelReservation(roomType, nights);
    }
  
    addBreakfast(breakfast: boolean): HotelReservationBuilder {
      this.reservation.setBreakfast(breakfast);
      return this;
    }
  
    addSeaView(seaView: boolean): HotelReservationBuilder {
      this.reservation.setSeaView(seaView);
      return this;
    }
  
    addWifi(wifi: boolean): HotelReservationBuilder {
      this.reservation.setWifi(wifi);
      return this;
    }
  
    addLateCheckout(lateCheckout: boolean): HotelReservationBuilder {
      this.reservation.setLateCheckout(lateCheckout);
      return this;
    }
  
    build(): HotelReservation {
      return this.reservation;
    }
  }
  
  export { HotelReservation, HotelReservationBuilder };
  