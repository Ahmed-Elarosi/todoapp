## Things that are going to be done

This file lists the changes that need to be made in each stage. It is ordered in reverse chronological order, meaning that the last changes made will always be on top of the file, so that readers will not have to scroll all the way down with each task added.

## Task 08 - Store: Context & Reducer

**TODOS**

1. Refactor the state logic so that it combines the Context with a Reducer. Now our application is super-scalable!

## Task 07 - Context

**TODOS**

1. Refactor the state logic so that it uses Context. That way, we can avoid drilling down (most) props.

## Task 06 - Routing

In most of the apps out there build with any frontend framework, whenever you visit a navigation item, the url let you know where you are exactly. Routing is a big thing and tha way to do it in react is with the help of [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)

**TODOS**

1. Please install react-router-dom.
2. Create a help component. Re-arrange your app so you can visit your homepage and the help page. Within homepage you will find your todo app and within help a set of instructions on how to use the app.
3. Add a 404 Page in case somebody enters an invalid route

## Task 05 - Lifecycle Methods

You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death. Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

- Mounting – Birth of your component
- Update – Growth of your component
- Unmount – Death of your component

Now that we understand the series of lifecycle events let’s learn more about how they work.

**TODOS**

Since there is no server around to store data, we will use localStorage instead. That way we will be able to use the right lifecycle methods to retrieve the data when we mount our components.

1. Connect your app with your localStorage so it can retrieve all todos and create new ones.

## Task 04 - Events and Forms

React provides an easy way to manage events. Prepare to say goodbye to addEventListener.
Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

Forms require as well some special treatment. HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.

What we will see in this stage is

- how to handle events.
- how to send data from a child to parent.
- how to get input from a form.
- how to update our state and re-render our component.

**TODO**

1. Add event listeners so we can toggle the status of each item.
2. After making sure that the events work as they should, we need to get whatever change happened and update the data in our App.js and rerender the whole app. So we need that change to travel all the way up to the parent component.
3. Set up the form so it can add a new todo item.

## Task 03 - Props and State.

We have splitted our app into different components and now it's time to see how the data flow through components.

Short for properties, props can best be defined as a way of passing data from component to component, basically from parent to child component.

State on the other hand, stores data about the component that can change over time. Change could come in the form of user events or system events such as response to user input or server requests. Working with a state’s component normally involves setting a component’s default state, accessing the current state and updating the state.

**TODO**

1. Please create a separate component for each todo and todone item.
2. Please use props to pass the data of each item from the parent component to the child.
3. Use state to define the initial state of your app component.

## Task 02 - Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference [here](https://reactjs.org/docs/react-component.html). Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

But we don't really care about props YET!. In this task we would like to organize our app and build our components. We will design our app, we will break it into components and we will start writing our first components.

**TODO**

1. Create a design of how your app will look. Your app should contain a navigation bar, some space for your todo input form and some space for the finished todos.
2. Implement the design into components.

## Task 01 - Hello World

Here we are. Our journey with React just started and we are about to learn the sh\*t out of it. We have our basic file structure set up, thanks to `create-react-app` and we will dig in to our first task.

**Story**
We will create a simple todo app. We will build all the functionalitis from scratch so the users can be able to add new todos, check and uncheck todos as done and delete them.

**TODO**:

In this task we would like to:

1. Explore the folder structure and the javascript files. What's the entry point of our app? What is this funky html called [JSX](https://reactjs.org/docs/introducing-jsx.html)?
2. Let's try to print Hello World to our app, instread of the default message from React.
3. Let's get rid of what we don't need like unused images.
4. I don't see any .scss files around. Let's add one.
