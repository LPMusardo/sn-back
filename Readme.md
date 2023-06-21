# M1 IDL Projet Social network (SN)

Le but de ce projet (45j) est de créer un réseau social en utilisant une API Rest et un client web pour cette API.

L'application permettra de créer des utilisateurs, des événements, des commentaires et des notes.  

- La partie _front-end_ (ce dépot git) repose principalement sur React-dom, Raact-Router, et Chakra-ui.

- La partie _back-end_ (second dépot git),  quand à elle, repose principalement sur Express, MySQL, Sequelize, JWT


## Playground
Une version d'essai du site web est dispobible à l'adressse : [sn.musardo.fr](https://sn.musardo.fr)


## Pré-requis
Vous aurez besoin de :
1. MySQL
1. NodeJS/npm

## Mise en place

### Récupérer le code
```bash
git clone https://github.com/LPMusardo/sn-back.git
```

### Installer des dépendances
```bash
npm install
```

### Configuration de la base de données

Il (suffit) de créer la base de donnée mySQL au préalable.  
Une liste des commandes utiles est disponible dans le fichier [start_mysql.sh](script/start_mysql.sh)


## Démarrage API
```bash
npm start
##### result
#Server is running on port 3000  
# http://localhost:3000
```


## Peupler la base de données
On peut à présent executer le script suivant pour peupler la base avec des données fictives :   
```bash 
node populate.js
```


## Accéder au site

[http://localhost:3000](http://localhost:3000/users)

## Auteurs
* **Léo-Paul Musardo**
* **Maxime Guiliani**  

