# Script PowerShell pour exécuter des commandes Docker Compose séquentiellement dans le répertoire actuel

# 1. Construction de l'application
Write-Host "Construction de l'application..."
docker-compose build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erreur lors de la construction de l'application." -ForegroundColor Red
    exit $LASTEXITCODE
}

# 2. Appliquer les migrations Django
Write-Host "Application des migrations Django..."
docker-compose run --rm api python3 manage.py migrate
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erreur lors de l'application des migrations Django." -ForegroundColor Red
    exit $LASTEXITCODE
}

# 3. Peupler la base de données avec des données d'exemple et créer l'utilisateur admin
Write-Host "Peuplement de la base de données et création de l'utilisateur admin..."
docker-compose run --rm api python3 manage.py populatedb --createsuperuser
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erreur lors du peuplement de la base de données ou de la création de l'utilisateur admin." -ForegroundColor Red
    exit $LASTEXITCODE
}

# 4. Exécuter l'application
Write-Host "Exécution de l'application..."
docker-compose up
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erreur lors de l'exécution de l'application." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "Toutes les étapes ont été exécutées avec succès." -ForegroundColor Green
