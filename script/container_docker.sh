# Commandes utiles pour lancer l'application web dans un conteneur docker
# 
# 	Database
# 		# Setup mysql avec auth by password:secret, pour focntionner avec sequelize,
# 		# ALTER USER 'root'@'localhost' IDENTIFIED BY 'secret';
# 		- service mysql start
# 		- CREATE DATABASE IF NOT EXISTS sn_test_db;
# 		- CREATE DATABASE IF NOT EXISTS sn_prod_db;
# 
# 
# 	Backend
# 		# git clone
# 		# npm i
# 		# Changer setup_db pour le NAS, password:secret
# 		- npm run start
# 		- node populate
# 
# 
# 	Frontend
# 		# git clone
# 		# npm i
# 		# changer regles TS pour le NAS
# 		# installer package "serve"
# 		- npm run build
# 		- serve -s -p 8080 dist
# 
