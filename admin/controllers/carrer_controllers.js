// admin/controllers/carrer_controllers.js



export function home(req, res) {



 let carrers = [

  {

   id: 1,

   name: "Ingeniería de Sistemas",

   lastname: "Sistemas",

   code: "IS001",

   cycle: 1

  },

  {

   id: 2,

   name: "Ingeniería Industrial",

   lastname: "Industrial",

   code: "II002",

   cycle: 2

  },

  {

   id: 3,

   name: "Ingeniería Civil",

   lastname: "Civil",

   code: "IC003",

   cycle: 3

  },

  {

   id: 4,

   name: "Ingeniería Mecánica",

   lastname: "Mecánica",

   code: "IM004",

   cycle: 4

  },

  {

   id: 5,

   name: "Ingeniería Electrónica",

   lastname: "Electrónica",

   code: "IE005",

   cycle: 5

  },

  {

   id: 6,

   name: "Administración",

   lastname: "Administración",

   code: "ADM006",

   cycle: 6

  },

  {

   id: 7,

   name: "Economía",

   lastname: "Economía",

   code: "ECO007",

   cycle: 7

  },

  {

   id: 8,

   name: "Contabilidad",

   lastname: "Contabilidad",

   code: "CON008",

   cycle: 8

  },

  {

   id: 9,

   name: "Finanzas",

   lastname: "Finanzas",

   code: "FIN009",

   cycle: 9

  },

  {

   id: 10,

   name: "Marketing",

   lastname: "Marketing",

   code: "MKT010",

   cycle: 10

  },

  {

   id: 11,

   name: "Derecho",

   lastname: "Derecho",

   code: "DER011",

   cycle: 11

  },

  {

   id: 12,

   name: "Psicología",

   lastname: "Psicología",

   code: "PSI012",

   cycle: 12

  },

  {

   id: 13,

   name: "Arquitectura",

   lastname: "Arquitectura",

   code: "ARQ013",

   cycle: 1

  },

  {

   id: 14,

   name: "Medicina",

   lastname: "Medicina",

   code: "MED014",

   cycle: 2

  },

  {

   id: 15,

   name: "Enfermería",

   lastname: "Enfermería",

   code: "ENF015",

   cycle: 3

  },

  {

   id: 16,

   name: "Comunicación",

   lastname: "Comunicación",

   code: "COM016",

   cycle: 4

  },

  {

   id: 17,

   name: "Diseño Gráfico",

   lastname: "Diseño",

   code: "DG017",

   cycle: 5

  },

  {

   id: 18,

   name: "Ciencia de Datos",

   lastname: "Datos",

   code: "CD018",

   cycle: 6

  },

  {

   id: 19,

   name: "Negocios Internacionales",

   lastname: "Internacionales",

   code: "NI019",

   cycle: 7

  },

  {

   id: 20,

   name: "Ingeniería Ambiental",

   lastname: "Ambiental",

   code: "IA020",

   cycle: 8

  }

 ];



 return res.render('admin/carrers', {

  title: 'Admin Site',

  carrers: carrers,

  currentPage: 'home',

  description:

   'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'

 });

}

