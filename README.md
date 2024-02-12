# E-Prozar Sprint 1

## Story

You and a friend had the idea to create a website for the local grocery store down the street after you heard them considering to try out this "online thing where the people are all going these days".
In order to convince the owners to choose you for creating their site, you need to present a demo to them with a group of random products.
Coffee mug full, coding mode on, let's create E-Prozar !

## What are you going to learn?

- render the objects from a list with react in the DOM
- working with object properties
- react basic syntax usage

## Tasks

1. Display each product from the list `productList` in a separate card
    - When opening the page with `npm start` you see each product from  `productList` in a separate card
    - Each card contains on a separate line the product `price`, `description`, `category`, `name`, `image`, `shortDescription`

2. Each row displaying the list of cards is rendered on 3 columns
    - When opening the page with `npm start` you see each row has 3 cards 

3. When selecting the mobile view from the developer tools each row has only 1 column
    - When opening the page with `npm start` and setting the web  browser in mobile view from the developer tools each row has only 1 card

4. Display a section with a random project which has it's price reduced to half
    - When opening the page with `npm start` you see a section with a  product which is on offer
    - Each time you reload the web page there is a different product on offer
    - The product which is on offer has it's old price displayed and the  new price which is half (rounded down) the initial price

5. The section containing the random product of the day shows today's date in the format day_number - month_word (1 July instead of 01.07)
    - When opening the page with `npm start` in the section with the random offer of the day, today's date is displayed in the format  day_number - month_word (1 July instead of 01.07)

## General requirements

None

## Hints

- once you start the project you first need to install the react library with `npm install`
- once all the react libraries are installed, you can start the project  with `npm start`
- to reduce the amount of CSS used, you can import the bootstrap library

## Background materials

- <i class="far fa-exclamation"></i> [Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)
- <i class="far fa-exclamation"></i> [Display lists in React](https://scotch.io/starters/react/handling-lists-in-react-jsx)
- <i class="far fa-book-open"></i> [Importing css files to react](https://create-react-app.dev/docs/adding-a-stylesheet/)
- <i class="far fa-book-open"></i> [Adding css styles to react](https://www.w3schools.com/react/react_css.asp)
- <i class="far fa-book-open"></i> [Debugging a React project](https://blog.logrocket.com/debug-react-applications-with-the-new-react-devtools/)
- <i class="far fa-book-open"></i> [JS Date functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- <i class="far fa-book-open"></i> [JS String functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
