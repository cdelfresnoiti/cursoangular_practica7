import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  personajes = [];
  personajesOriginal = [
    {
      nombre: "Tyrion Lannister",
      bio: "Tyrion es un enano que se esfuerza por compensar su debilidad física con su inteligencia e ingenio",
      img: "https://d1rnc4ls2dmo9n.cloudfront.net/wp-content/uploads/2017/09/07152125/Tyrion_ballesta_HBO.jpg",
      vive: true
    },
    {
      nombre: "Daenerys Targaryen",
      bio: "Siendo una de los dos únicos Targaryen supervivientes, junto a su hermano Viserys, Daenerys es comprometida con Khal Drogo, un khal Dothraki, bajo la promesa de que éste le conceda su ejército a Viserys para reconquistar los Siete Reinos.",
      img: "https://d1rnc4ls2dmo9n.cloudfront.net/wp-content/uploads/2017/09/07150832/dany.jpg",
      vive: false
    },
    {
      nombre: "Jon Snow",
      bio: "Hijo bastardo de Eddard Stark, Jon Nieve decide unirse a la Guardia de la Noche con el objetivo de prosperar en un lugar donde no fuera juzgado por su condición de nacimiento. En la Guardia, Jon tendrá que lidiar con sus conflictos internos que pondrán a prueba sus votos y su fidelidad a la Guardia o a su familia.",
      img: "https://d1rnc4ls2dmo9n.cloudfront.net/wp-content/uploads/2017/09/07151229/jonsnow.jpg",
      vive: true
    },
    {
      nombre: "Cersei Lannister",
      bio: "Ha sido la villana por antonomasia de Juego de tronos y de las actuaciones más celebradas por el público. Porque su camino ha sido coherente, porque todo lo hacía por sus hijos, con cierta elegancia y porque al final no deja de ser una mujer que lucha en un mundo de hombres por salir adelante y alcanzar el poder.",
      img: "https://d1rnc4ls2dmo9n.cloudfront.net/wp-content/uploads/2017/09/07150823/Cersei-Lannister.jpg",
      vive: false
    },
    {
      nombre: "Jaime Lannister",
      bio: "Jaime puede tener una mano de oro pero esto no quita que sea útil durante una batalla. En Aguasdulces contribuyó a la victoria Lannister y también al retrato de su personaje. Al dejar que Brienne de Tarth escapase de forma consciente demostró que sentía respeto y amistad por su antigua captora. Por eso era tan reveladora su mirada al volver a Desembarco del Rey y encontrarse con su hermana en el Trono de Hierro. ¿Acaso no era horror lo que sentía por la falta de agallas de Cersei?",
      img: "https://d1rnc4ls2dmo9n.cloudfront.net/wp-content/uploads/2017/09/07151008/jaime.jpg",
      vive: true
    },
    {
      nombre: "Sansa Stark",
      bio: "La batalla de los bastardos parecía perdida hasta que Sansa Stark hizo acto de presencia con los hombres de Petyr Baelish y cambiaron el destino de la guerra entre Jon Nieve y Ramsay Bolton. Ella misma quiso mirar a su marido en los ojos mientras moría para que fuera consciente del poder que había adquirido.",
      img: "https://d1rnc4ls2dmo9n.cloudfront.net/wp-content/uploads/2017/09/07152103/sansa.jpg",
      vive: false
    },
    {
      nombre: "Arya Stark",
      bio: "El viejo Walder Frey no podía imaginarse que Arya Stark era la persona que le servía la comida en Los Gemelos. Pero las habilidades adquiridas por los Hombres Sin Rostro de Braavos le permitieron camuflarse con otra cara y servirle a Walder un pastel con sus hijos de ingredientes, un momento muy Tito Andrónico.",
      img: "https://d1rnc4ls2dmo9n.cloudfront.net/wp-content/uploads/2017/09/07150758/arya.png",
      vive: true
    },
    {
      nombre: "Bran Stark",
      bio: "Los poderes de verdevidente le han permitido descubrir que Jon Nieve no es el hijo de Eddard Stark y una ramera cualquiera sino de su tía Lyanna y Rhaegar Targaryen. Con esta información se está dirigiendo hacia el sur con la intención de atravesar el muro y quedarse a salvo junto su aliada Meera.",
      img: "https://www.lavanguardia.com/r/GODO/LV/p0/WebSite/2019/05/31/Recortada/featuredImage-22550-el-destino-de-bran-stark-en-got-fue-idea-de-george-r-r-martin-992x558@LaVanguardia-Web.jpg",
      vive: false
    },
    {
      nombre: "Lord Varys",
      bio: "El eunuco interpretado por Conleth Hill debe ser el hombre que más rápido se mueve por el universo de George R.R. Martin. Estaba de asesor de Daenerys Targaryen en su improvisada corte real en Meereen y, de repente, estaba negociando con las supervivientes de las familias Tyrell y Martell, Ellaria y Olenna, para que apoyasen la madre de dragones en su conquista.",
      img: "https://d1rnc4ls2dmo9n.cloudfront.net/wp-content/uploads/2017/09/07152158/varys.jpg",
      vive: false
    },
    {
      nombre: "Petyr Baelish",
      bio: "Como un susurro. Así parece moverse Meñique por la serie. Usó a Sansa para que se una a Ramsay Bolton, engañó y mintió a Lysa Arryn para casarse con ella y convertirse en el dueño y señor de la Casa Arryn en el Nido de Águilas. Todos los ingredientes para desconfiar de él están bien cocinados. Pese a ello, sigue siendo clave. Sansa recurre a él para decantar la balanza de la batalla de Invernalia del lado de su hermano Jon, que se acaba erigiendo como el Rey en el Norte.",
      img: "https://d1rnc4ls2dmo9n.cloudfront.net/wp-content/uploads/2017/09/07151556/me%C3%B1ique.jpeg",
      vive: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.personajes = this.personajesOriginal;
  }

  filtrar(termino: string) {
    this.personajes = [];

    for (const personaje of this.personajesOriginal) {
      if (personaje.nombre.toLowerCase().indexOf(termino.toLowerCase()) >= 0) {
        this.personajes.push(personaje);
      }
    }
  }

}
