// admin/controllers/students_controllers.js



export function home(req, res) {



 let students = [
    {
      id: 1,
      name: "Juan",
      lastname: "Pérez",
      carrera: "Ingeniería de Sistemas",
      edad: 20
    },
    {
      id: 2,
      name: "María",
      lastname: "García",
      carrera: "Ingeniería Civil",
      edad: 21
    },
    {
      id: 3,
      name: "Carlos",
      lastname: "Rodríguez",
      carrera: "Ingeniería Industrial",
      edad: 22
    },
    {
      id: 4,
      name: "Ana",
      lastname: "López",
      carrera: "Arquitectura",
      edad: 19
    },
    {
      id: 5,
      name: "Luis",
      lastname: "Martínez",
      carrera: "Medicina Humana",
      edad: 23
    },

 ];



 return res.render('admin/students', {

  title: 'Admin Site',

  students: students,

  currentPage: 'home',

  description:

   'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'

 });

}

