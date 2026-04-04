## 1 : Go inside your pg18 docker

```bash
docker exec -it <container_id> bash
```

## 2 : Clone the database from remote

NOTE: this will prompt for password
cf_dev db password: 1234567890

```bash
pg_dump -h <remote_ip> -p 5173 -U <username> -d <dbname> -F c -f my_backup.dump

# command with cf_dev credentials
pg_dump -h 103.91.187.18 -p 30018 -U cf_dev -d com_camp -F c -f backup1.dump

```

## 4 : Prepare a local database

Here we will create `comcamp_db_1` in local

#### Optional Step: Disconnect all connections

NOTE: here user is `postgres`

```bash
psql -h localhost -U postgres -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'comcamp_db_1';"
```

#### Delete existing database

```bash

dropdb -h localhost -U postgres comcamp_db_1
```

#### Create new database

```bash
createdb -h localhost -U postgres your_local_db
```

#### Restore the database

```bash
pg_restore -h localhost -U <local_user> -d <local_db_name> -v backup1.dump --no-owner

# example
pg_restore -h localhost -U postgres -d comcamp_db_1 -v backup1.dump --no-owner
```
