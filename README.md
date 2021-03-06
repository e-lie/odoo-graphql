# Odoo GraphQL API
This package aims to provide a GraphQL API to Odoo (formerly OpenERP).
It is currently limited to retrieving and modifying only users and partners but
it will be extended in the future.

## Installation
`npm install` or `yarn`

## Configuration
You need to pass the following environment variables to the package so that it works properly :  
- The hostname of your Odoo server
- The port of your Odoo server
- The name of the database you want to connect to
- Your login
- Your password
  
### With terminal
You have to enter the following commands in the same terminal you will use to start the package.

#### Windows
`set ODOO_HOST=subdomain.domain.com`  
`set ODOO_PORT=8069`  
`set DB=currently_used_db`  
`set EMAIL=mail@domain.com`  
`set PASSWORD=yourpassword`  

#### Unix
`export ODOO_HOST=subdomain.domain.com`  
`export ODOO_PORT=8069`
`export DB=currently_used_db`  
`export EMAIL=mail@domain.com`  
`export PASSWORD=yourpassword`  


### With a configuration file
You need to create a .env file at the root of the project. It should look like :

```
ODOO_HOST=subdomain.domain.com 
ODOO_PORT=8069
DB=currently_used_db
EMAIL=mail@domain.com
PASSWORD=yourpassword
```

## Usage
`npm start` or `yarn start`