import inquirer from "inquirer";
import chalk from "chalk";
import { mostrarTitulo } from "./app/helpers/helpers.js";
import { agregarDueno, listarDuenos, eliminarDueno } from "./app/controllers/duenoController.js";
import { agregarMascota, listarMascotas, eliminarMascota } from "./app/controllers/mascotaController.js";

const menuPrincipal = async () => {
  mostrarTitulo("SISTEMA VETERINARIA");

  const { opcion } = await inquirer.prompt([
    {
      type: "list",
      name: "opcion",
      message: chalk.yellow("¿Qué deseas hacer?"),
      choices: [
        { name: "👤 Agregar Dueño",    value: "addDueno" },
        { name: "📋 Listar Dueños",     value: "listDuenos" },
        { name: "🗑️  Eliminar Dueño",   value: "delDueno" },
        new inquirer.Separator(),
        { name: "🐶 Agregar Mascota",   value: "addMascota" },
        { name: "📋 Listar Mascotas",   value: "listMascotas" },
        { name: "🗑️  Eliminar Mascota", value: "delMascota" },
        new inquirer.Separator(),
        { name: "🚪 Salir",             value: "salir" },
      ],
    },
  ]);

  switch (opcion) {
    case "addDueno":    await agregarDueno();   break;
    case "listDuenos":       listarDuenos();    break;
    case "delDueno":    await eliminarDueno();  break;
    case "addMascota":  await agregarMascota(); break;
    case "listMascotas":     listarMascotas();  break;
    case "delMascota":  await eliminarMascota(); break;
    case "salir":
      console.log(chalk.magenta("\n👋 ¡Hasta luego!\n"));
      process.exit(0);
  }

  await menuPrincipal();
};

menuPrincipal();