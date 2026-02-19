docker run --name pg-local ^
  -e POSTGRES_USER=postgres ^
  -e POSTGRES_PASSWORD=postgres ^
  -e POSTGRES_DB=movies ^
  -p 5432:5432 ^
  -d postgres:16
