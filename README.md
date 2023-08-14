# ⏰ Rubik's Cube timer - A DDD and Clean Architecture-based App

Although I majored in Computer Science instead of Software Engineering, in the last few years I have been working as a software engineer focused on web development.

During these years, I have been fascinated by aspects related to software engineering such as DDD, design patterns or Clean Architecture, and in the last two years, in a self-taught way, I have left my specialization in data to get into software architecture. In addition, I have been upgrading my role towards a DevOps/SRE position, focusing on a professional level on high availability Cloud architectures.

With this project, I try to bring together all the knowledge I have acquired in the last two years in software architecture and design as well as DevOps practices and Cloud architectures. In addition, implementing a domain in which I am (almost) an expert: Rubik's cubes.

The application consists of a very simple timer for solving Rubik's cube, with combination generator and resolution summary.

---

## Technology stack

The application uses the TypeScript tech stack:

- `Node.js` w/ `TypeScript` as Runtime:
    - `Prettier` for formatting
    - `eslint` for linting
    - `TypeORM` as Object-Relational Mapper
    - `Jest` as testing framework (unit and int.)

- `GitHub Actions` as CI/CD runner.
    - `Makefile` as abstraction layer for CI/CD purposes

---

## How-to

Currently, it is only possible to run the test suite (both unit and integration). I will be adding both the backend API and frontend framework as soon as the domain layer is well-defined.

To run the test suite, it is needed to have `Makefile` installed and (optionally) `Node.js>=18`:

```bash
git clone https://github.com/sverdejot/rubiks-timer
cd rubiks-timer
make
```

Once all the dependencies have been installed, you can simply run:

```bash
make help
```
to view the avaiable targets.

---

## DDD: Domain layer

```todo
TODO: DDD definition (UML and use cases)
```
---