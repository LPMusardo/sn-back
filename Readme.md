# M1 IDL Project Social network (SN)

Le but de ce projet est de créer un réseau social en utilisant une API et une base de données MySQL.
Cette application permettra de créer des utilisateurs, des posts, des commentaires et des notes pour des evenements.

## Pour commencer

### Le backend

```bash
git clone https://github.com/MaximeGuiliani/Social-network.git
```

### Le frontend
```bash
git clone https://github.com/LPMusardo/sn-front.git
```

### Pré-requis

Vous allez avoir besoin de :
- NodeJS/Npm
- MySQL

### Installation

#### Configuration de la base de données

Une liste de commande est disponible dans le fichier [start_mysql.sh](script/start_mysql.sh) pour créer la base de données et les tables.

#### Configuration du backend

Pour configurer le backend, il faut installer les dépendances.

```bash
npm install
```


## Démarrage


On peut maintenant lancer le serveur.

```bash
npm start
##### result
#Server is running on port 3000  
# http://localhost:3000
```

Ensuite, il faut executer un des scripts suivant dans un second terminal [initCategories.js](initCategories.js) pour initialiser les categories ou [populate.js](populate.js) pour commencer à utiliser l'application avec des données de test.

```bash 
node initCategories.js
```

OU


```bash 
node populate.js
```


## Vous pouver maintenant faire des requetes sur l'API
Une **documentation** est disponible à l'adresse suivante : [Social_network_API](https://app.swaggerhub.com/apis-docs/MAXIMEGUILIANI_2/Social_network_API/1.0.0)



## Auteurs
* **Léo-Paul Musardo**
* **Maxime Guiliani**  
* **Mickaël Lascoutounas** 
* **Yacine Boukhari** 
