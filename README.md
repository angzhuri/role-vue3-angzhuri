# Vue Take-Home Assignment

## Objective

The goal of this take-home assignment is to assess your frontend development skills, with a focus on Vue 3 and related technologies such as `vitest`, `pinia`, and `vue-router`.

We are looking for a candidate who can demonstrate their ability to create a clean, maintainable, and scalable application, showcasing their expertise in both general frontend development and Vue 3 specific features.

We are not looking for a pixel-perfect design, and will not be judging the visual aspect at all, but rather a well-architected application that is easy to understand and maintain.

## Brief

For this assignment, you are tasked with creating a simple yet engaging movie recommendation application called "🍿 VueFlix."

Users should be able to search for movies, view movie details, and receive personalized recommendations based on their preferences.

The application should be built using Vue 3, leveraging relevant packages such as `vitest` for testing, `pinia` for state management, and `vue-router` for navigation.

## Tasks

1. Create a responsive, and user-friendly design for the application.
2. Implement the following features:
   1. A search functionality allowing users to search for movies by title.
   2. A movie details page displaying information about a selected movie, such as title, release year, genre, and a short description.
   3. A recommendations feature that allows users to input their preferences (e.g., genre, release year range, and rating) and receive a list of personalized movie suggestions.
3. Implement state management using pinia to handle user preferences and search results.
4. Set up routing with `vue-router` to handle navigation between the search page, movie details page, and recommendations page.
5. Write tests for your application using vitest, ensuring proper test coverage for critical functionality.
6. Document your code with comments, explaining the purpose of each component and function, and any design decisions you made along the way.

## Deliverable

Please submit the following:

1. A GitHub PR containing the entire project, including source code, tests, and any additional assets.
2. A brief report as the PR description (not more than 500 words) explaining your design choices, any challenges you faced during development, and any areas where you believe your application could be improved.

Please ensure that your submitted code is clean, well-structured, and follows best practices for Vue 3 development. Your project will be evaluated based on the quality of your code, the functionality of the application, and your ability to effectively use the specified packages (`vitest`, `pinia`, and `vue-router`). You will not be judged on the visual aspect of the application, but rather on the quality of your code and the functionality of the application.

## Resources

### The Movie Database

The developer can use the TMDB (The Movie Database) API to fetch a list of movies. The TMDB API provides a rich set of endpoints to access movie information, search for movies, and even fetch recommendations. It's free to use with an API key, which can be obtained by creating an account on their website.

TMDB API documentation: <https://developers.themoviedb.org/3/getting-started/introduction>

Here are some examples of API endpoints you might use in your project:

- Search for movies by title: `https://api.themoviedb.org/3/search/movie?api_key=<your_api_key>&query=<search_query>`
- Fetch movie details: `https://api.themoviedb.org/3/movie/<movie_id>?api_key=<your_api_key>`
- Get recommendations based on a specific movie: `https://api.themoviedb.org/3/movie/<movie_id>/recommendations?api_key=<your_api_key>`

Remember to replace `<your_api_key>` with the API key provided below, and `<search_query>` or `<movie_id>` with the appropriate search term or movie ID.

<details>
<summary>🔐 API Key</summary>

```plain
2022e966ca64bb6dcb521d7e854d7857
```

</details>

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
(and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
