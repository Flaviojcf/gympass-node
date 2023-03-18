# App

GymPass style app.

# EN Version

# FRs (Functional Requirements)

- [] It should be possible to register;
- [] It should be possible to authenticate;
- [] It should be possible to retrieve the profile of a logged-in user;
- [] It should be possible to retrieve the number of check-ins performed by the logged-in user;
- [] It should be possible for the user to retrieve their check-in history;
- [] It should be possible for the user to search for nearby gyms;
- [] It should be possible for the user to search for gyms by name;
- [] It should be possible for the user to check-in at a gym;
- [] It should be possible to validate a user's check-in;
- [] It should be possible to register a gym;

# BRs (Business Rules)

- [] The user cannot register with a duplicate email;
- [] The user cannot make 2 check-ins in the same day;
- [] The user cannot check-in if not near (100m) the gym;
- [] The check-in can only be validated up to 20 minutes after it is created;
- [] The check-in can only be validated by administrators;
- [] The gym can only be registered by administrators;

# NFRs (Non-functional Requirements)

- [] The user's password must be encrypted;
- [] The application data must be persisted in a PostgreSQL database;
- [] All data lists must be paginated with 20 items per page;
- [] The user must be identified by a JWT (JSON Web Token);


# PT-BR Version

# App

GymPass style app.

## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);