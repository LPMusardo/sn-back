import { setup_db } from "./database/setup_db.js";
import { DAO } from "./database/DAO.js";
import {
  User,
  Event,
  Address,
  MainCategory,
  EventMessage,
  Note,
} from "./database/models/index.js";

let sequelize;
let myDAO;


async function destroy() {
  sequelize = await setup_db(true, "prod");
  myDAO = new DAO(sequelize);
  await Event.destroy({ where: {} });
  await User.destroy({ where: {} });
  await Address.destroy({ where: {} });
  await MainCategory.destroy({ where: {} });
  await Note.destroy({ where: {} });
  await EventMessage.destroy({ where: {} });
}


async function populate() {
  sequelize = await setup_db(true, "prod");
  myDAO = new DAO(sequelize);
  await Event.destroy({ where: {} });
  await User.destroy({ where: {} });
  await Address.destroy({ where: {} });
  await MainCategory.destroy({ where: {} });
  await Note.destroy({ where: {} });
  await EventMessage.destroy({ where: {} });


// Sport
// Culture
// Music
// Food
// Other

  const cat_gastronomie = await myDAO.add_main_category("Food");
  const cat_jeux_videos = await myDAO.add_main_category("Video games");
  const cat_sciences = await myDAO.add_main_category("Sciences");
  const cat_sport = await myDAO.add_main_category("Sports");
  const cat_art_et_culture = await myDAO.add_main_category("Art & Culture");
  const cat_musique = await myDAO.add_main_category("Music");
  const cat_cinema = await myDAO.add_main_category("Cinema");
  const cat_good_causes = await myDAO.add_main_category("Good causes");
  

  // USERS

  const leopaul = await myDAO.add_user({
    username: "leopaul",
    email: "leo-paul.musardo@etu.univ-amu.fr",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de leopaul",
    picture: "https://site.com/picture_du_leopaul",
  });
  const user = await myDAO.add_user({
    username: "a_username",
    email: "email@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de a_username",
    picture: "https://site.com/picture_du_user",
  });
  const franck = await myDAO.add_user({
    username: "franck",
    email: "franck@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de franck",
  });
  const paul = await myDAO.add_user({
    username: "paul",
    email: "paul@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de paul",
  });
  const hugo = await myDAO.add_user({
    username: "hugo",
    email: "hugo@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de hugo",
  });
  const charles = await myDAO.add_user({
    username: "charles",
    email: "charles@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de charles",
  });
  const damien = await myDAO.add_user({
    username: "damien",
    email: "damien@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de damien",
  });
  const heba = await myDAO.add_user({
    username: "heba",
    email: "Heba@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de heba",
  });

  const anis = await myDAO.add_user({
    username: "anis",
    email: "anis@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "Intérêt principal : foot",
    picture:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
  });

  const mehdi = await myDAO.add_user({
    username: "mehdi",
    email: "mehdi@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "Bonjour, je suis un grand fan de manga, et je dessine très souvent. J'aimerai pouvoir participé à des séances de dessin où l'on pourra se partager nos astuces.",
    picture:"https://static.wikia.nocookie.net/bluelock/images/3/39/Yoichi_Isagi.png/revision/latest?cb=20200809200122&path-prefix=fr",
  });

  const nour = await myDAO.add_user({
    username: "nour",
    email: "nour@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "Bonjour tout le monde, je suis une grande sportive, intéressée par des marathons.",
  });

  const le_gamer = await myDAO.add_user({
    username: "Xx_gameur_du_13_xX",
    email: "gamer@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "J'aime trop les jeux vidéos, c'est ma passssiiiiiiiion ",
  });

  const yacine = await myDAO.add_user({
    username: "yacine",
    email: "yacine@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "Très actif au niveau du football, cherche souvent des gens pour jouer 2 à 3 fois par semaine. ( à 11 ou city )",
    picture: "https://www.nautiljon.com/images/perso/00/87/agatsuma_zenitsu_18378.webp",
  });

  const oscar = await myDAO.add_user({
    username: "oscar",
    email: "oscar@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "Amateur de Harry Potter, on peut se faire des petites soirées jeux lié à cela.",
    picture:"https://i.familiscope.fr/1400x787/smart/2022/04/06/livres-harry-potter.jpg",
  });

  const cedric = await myDAO.add_user({
    username: "cedric",
    email: "cedric@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "Je peins à mes heures perdues.",
  });

  const assia = await myDAO.add_user({
    username: "assia",
    email: "assia@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "Bonjour, amatrice d'escape game, j'aimerai rejoindre des esprits malin afin d'en accomplir le plus possible et dans les meilleurs temps !!",
    picture:"https://img.lemde.fr/2015/12/04/26/0/640/640/664/0/75/0/79e8b7c_5194-wikr8j.jpg",
  });

  const sophie = await myDAO.add_user({
    username: "sophie",
    email: "sophie@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de sophie",
  });

  const eric = await myDAO.add_user({
    username: "eric",
    email: "eric@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de eric",
  });

  const amine = await myDAO.add_user({
    username: "amine",
    email: "amine@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de amine",
  });

  const souf = await myDAO.add_user({
    username: "souf",
    email: "souf@mail.com",
    password_hash:
      "$2b$10$hnQ/tWVHXXFncPIKa.FUau59WIVkfJZ/3m9Uo20J3OqBC1edTi9y6",
    bio: "la bio de souf",
  });





// EVENTS

  const jazz = await myDAO.save_event({
    participants_number: 50,
    category: "Concert",
    description: "Concert de Jazz",
    image_url: "https://example.com/image_jazz.jpg",
    name: "Jazz Convergence",
    organizerId: franck.id,
    date: "2024-04-21T12:30:00.000Z",
    MainCategoryId: cat_musique.id,
    address: {
      street: "200 avenue du concert",
      city: "Marseille",
      country: "france",
      zip: "13900",
    },
  });

  const volley = await myDAO.save_event({
    participants_number: 50,
    category: "Volley ball",
    description: "Beach volley a la Ciotat",
    image_url: "https://example.com/image_volley.jpg",
    name: "Volley Ball !",
    organizerId: leopaul.id,
    date: "2024-07-21T12:30:00.000Z",
    MainCategoryId: cat_sport.id,
    address: {
      street: "plage Lumiere",
      city: "La Ciotat",
      country: "France",
      zip: "13600",
    },
  });

  const rando = await myDAO.save_event({
    participants_number: 50,
    category: "Randonnee",
    description: "une rando à Luminy",
    image_url: "https://example.com/image_rando.jpg",
    name: "Sortie Luminy",
    organizerId: paul.id,
    date: "2024-04-21T12:30:00.000Z",
    MainCategoryId: cat_sport.id,
    address: {
      street: "333 avenue de la rando",
      city: "La Ciotat",
      country: "france",
      zip: "13600",
    },
  });
  const concert = await myDAO.save_event({
    participants_number: 50,
    category: "Musique",
    description: "Un concert de rock",
    image_url: "https://example.com/image.jpg",
    name: "Concert de rock",
    organizerId: hugo.id,
    date: "2024-04-21T12:30:00.000Z",
    MainCategoryId: cat_musique.id,
    address: {
      street: "123 rue de la musique",
      city: "Paris",
      country: "France",
      zip: "codedeparis",
    },
  });
  const kart = await myDAO.save_event({
    participants_number: 10,
    category: "Karting",
    description: "course de kart au castellet",
    image_url: "https://example.com/image_karting.jpg",
    name: "Mario Kart",
    organizerId: charles.id,
    date: "2024-04-21T12:30:00.000Z",
    MainCategoryId: cat_sport.id,
    address: {
      street: "rue du karting",
      city: "Paris",
      country: "France",
      zip: "75001",
    },
  });
  
  const fast_10 = await myDAO.save_event({
    participants_number: 4,
    category: "Film Cinéma",
    description: "Je cherche des personnes qui veulent voir Fast and Furious 10 afin de passer un bon moment au cinéma.",
    image_url: "https://fr.web.img5.acsta.net/pictures/23/05/10/10/55/5129031.jpg",
    name: "Séance de Cinéma Fast and Furious 10",
    organizerId: damien.id,
    date: "2024-08-15T13:30:00.000Z",
    MainCategoryId: cat_cinema.id,
    address: {
      street: "12 avenue du prado",
      city: "Marseille",
      country: "France",
      zip: "13009",
    },
  });

  const foot = await myDAO.save_event({
    participants_number: 21,
    category: "Football",
    description: "J'organise un match à 11 contre 11, n'hésitez pas à venir nombreux dans la joie et la bonne humeur :) .",
    image_url:"https://www.aizenay.fr/medias/2016/04/terrain-de-football.jpg",
    name: "Match de foot 11 vs 11",
    organizerId: yacine.id,
    date: "2024-06-21T13:30:00.000Z",
    MainCategoryId: cat_sport.id,
    address: {
      street: "Stade de Luminy",
      city: "Marseille",
      country: "France",
      zip: "13009",
    },
  });

  const smash = await myDAO.save_event({
    participants_number: 6,
    category: "Super Smash Bros Ultimate",
    description: "venez participer à un contest Smash",
    image_url: "https://example.com/image_ssbu.jpg",
    name: "Giga Contest Smash",
    organizerId: charles.id,
    date: "2024-04-21T13:30:00.000Z",
    MainCategoryId: cat_jeux_videos.id,
    address: {
      street: "rue de smash bros",
      city: "Paris",
      country: "France",
      zip: "75001",
    },
  });

  const forum_science = await myDAO.save_event({
    participants_number: 10,
    category: "Forum",
    description: "Participons à ce forum de la santé qui réunira plusieurs professionnelle du domaine.",
    image_url: "https://emf.fr/wp-content/uploads/2019/07/Affiche-Forum-sant%C3%A9-septembre-2019.jpg",
    name: "Forum de la santé",
    organizerId: charles.id,
    date: "2024-09-27T13:30:00.000Z",
    MainCategoryId: cat_sciences.id,
    address: {
      street: "rue des aigles",
      city: "Poitiers",
      country: "France",
      zip: "86000",
    },
  });

  const club_pro = await myDAO.save_event({
    participants_number: 10,
    category: "Fifa 23",
    description: "Recrute des joueurs club pro pour une coupe EA, tout poste recherché.",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLRnYhXijgjIxbPOeDVt6o8oX9I5tJRDx-w&usqp=CAU",
    name: "Club pro fifa 23 ps4 ps5",
    organizerId: yacine.id,
    date: "2024-07-21T13:30:00.000Z",
    MainCategoryId: cat_jeux_videos.id,
    address: {
      street: "rue de club pro",
      city: "Marseille",
      country: "France",
      zip: "13005",
    },
  });
  
  await myDAO.apply(leopaul.id, smash.id)
  await myDAO.apply(paul.id, volley.id)
  
  await myDAO.participate(hugo.id, volley.id);
  await myDAO.participate(leopaul.id, jazz.id);
  await myDAO.participate(hugo.id, jazz.id);
  await myDAO.participate(paul.id, jazz.id);
  await myDAO.participate(franck.id, rando.id);
  await myDAO.participate(hugo.id, rando.id);
  await myDAO.participate(paul.id, concert.id);

  await myDAO.add_note_from_participant({
    ownerId: leopaul.id,
    eventId: jazz.id,
    value: 4,
    title: "super organisateur franck de jazz ",
  });

  await myDAO.add_note_from_participant({
    ownerId: hugo.id,
    eventId: volley.id,
    value: 4,
    title: "super volley ",
  });

  await myDAO.add_note_from_host({
    ownerId : franck.id,
    eventId : jazz.id,
    targetId : leopaul.id,
    value : 3,
    title : "super lp",
    comment : "ouiiii",
  });

  await myDAO.add_note_from_host({
    ownerId : leopaul.id,
    eventId : volley.id,
    targetId : hugo.id,
    value : 3,
    title : "Hugoo",
    comment : "hugooooo",
  });

  await myDAO.add_note_from_participant({
    ownerId: franck.id,
    eventId: rando.id,
    value: 4,
    title: "avis1",
  });


  // await myDAO.add_note_from_participant({
  //   creationDate: "2024-04-22T12:30:00.000Z",
  //   ownerId: hugo.id,
  //   eventId: jazz.id,
  //   value: 3,
  //   title: "avis2",
  // });
  // await myDAO.add_note_from_participant({
  //   creationDate: "2024-04-22T12:30:00.000Z",
  //   ownerId: paul.id,
  //   eventId: jazz.id,
  //   value: 2,
  //   title: "avis3",
  // });

  // await myDAO.add_note_from_participant({
  //   creationDate: "2024-04-22T12:30:00.000Z",
  //   ownerId: franck.id,
  //   eventId: rando.id,
  //   value: 5,
  //   title: "avis4",
  // });
  // await myDAO.add_note_from_participant({
  //   creationDate: "2024-04-22T12:30:00.000Z",
  //   ownerId: hugo.id,
  //   eventId: rando.id,
  //   value: 4,
  //   title: "avis5",
  // });
  // await myDAO.add_note_from_participant({
  //   creationDate: "2024-04-22T12:30:00.000Z",
  //   ownerId: paul.id,
  //   eventId: concert.id,
  //   value: 5,
  //   title: "avis6",
  // });
}

await populate();
//await destroy();
