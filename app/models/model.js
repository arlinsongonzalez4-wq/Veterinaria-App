import { readFileSync, writeFileSync, existsSync } from "fs";

export class Model {
  #filePath;

  constructor(filePath) {
    this.#filePath = filePath;
    if (!existsSync(filePath)) {
      writeFileSync(filePath, JSON.stringify([]));
    }
  }

  leerTodos() {
    const data = readFileSync(this.#filePath, "utf-8");
    return JSON.parse(data);
  }

  guardarTodos(lista) {
    writeFileSync(this.#filePath, JSON.stringify(lista, null, 2));
  }
}