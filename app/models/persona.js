export class Persona {
  #nombre;
  #telefono;

  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }

  get nombre() { return this.#nombre; }
  get telefono() { return this.#telefono; }

  set nombre(valor) { this.#nombre = valor; }
  set telefono(valor) { this.#telefono = valor; }

  toJSON() {
    return {
      nombre: this.#nombre,
      telefono: this.#telefono,
    };
  }
}