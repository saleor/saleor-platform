#!/bin/bash

# Script Bash pour exécuter des commandes Docker Compose séquentiellement dans le répertoire actuel

# 1. Construction de l'application
echo "Construction de l'application..."
docker-compose build
if [ $? -ne 0 ]; then
    echo "Erreur lors de la construction de l'application." >&2
    exit 1
fi

# 2. Appliquer les migrations Django
echo "Application des migrations Django..."
docker-compose run --rm api python3 manage.py migrate
if [ $? -ne 0 ]; then
    echo "Erreur lors de l'application des migrations Django." >&2
    exit 1
fi

# 3. Peupler la base de données avec des données d'exemple et créer l'utilisateur admin
echo "Peuplement de la base de données et création de l'utilisateur admin..."
docker-compose run --rm api python3 manage.py populatedb --createsuperuser
if [ $? -ne 0 ]; then
    echo "Erreur lors du peuplement de la base de données ou de la création de l'utilisateur admin." >&2
    exit 1
fi

# 4. Exécuter l'application
echo "Exécution de l'application..."
docker-compose up
if [ $? -ne 0 ]; then
    echo "Erreur lors de l'exécution de l'application." >&2
    exit 1
fi

echo "Toutes les étapes ont été exécutées avec succès." >&2
