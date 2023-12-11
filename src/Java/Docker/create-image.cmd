docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba9-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba9-java/app ../../..
