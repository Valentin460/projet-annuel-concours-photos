# projet-annuel-concours-photo

### Run `composer install` to install depedencies

### Create a `.env.local` file and set connection to your database

### Run `php bin/console doctrine:database:create` to create your database

### Run `php bin/console doctrine:migration:migrate` to run migrations

### Run `composer require api` to install api platform's dependecies

### Run `symfony serve` to run api 

### Run `composer require lexik/jwt-authentication-bundle` to install JWT authentification's depedencies

### Run `php bin/console lexik:jwt:generate-keypair` to generate your public and private keys

### Run `openssl genrsa -out config/jwt/private.pem -aes256 4096` to set your PassPhrase

### Put those code lines in your `.env.local`
###> lexik/jwt-authentication-bundle ###
JWT_PASSPHRASE= Here Your PassPhrase
###< lexik/jwt-authentication-bundle ###

### Run `openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem` and enter your passphrase 

### You can know create a user, you have to use `php bin/console security:hash-password` to hash your password 

### Use postman or an equivalent to connect to route `http://127.0.0.1:8000/api/login`

### Get bearer token and put it in api platform's authorize button with `Bearer` as a prefix

### you are done, you can know use api platform to fill your database