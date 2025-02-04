# sort

# # node 18.19.1 on my pc

# typescript-the-complete-developers-guide

# 10 - More on Design Patterns

How the typescript compiler works !!

# tsc index.ts

How we can figure can configure our TypeScript Compiler to now work with these two seprate directories.
To Do So, we need to generate a file called a config Json File.
This is a TypeScript Compiler Configuration file that we can use to customize how the compiler behaves

# tsc --init

means watch all the files inside of the root dir or essentially the src directory

# tsc -w

we now have to acutally figure out how to run this thing
And thtat's going to run my javaScript Files

# node build/index.js

we still need to do a little bit of setup here and kind of automate the process of running our code every single time we make a change

so to do so, set up just a little bit of additional tooling to get started

# npm init -y

# npm install nodemon concurrently

back over to our terminal one more time. And then over here we can do npm start like so.

# npm start

quick minder, we want to write some extremely reusable code to sort some different data structures.
so in this section, I want to tell you a little bit more about the basic sorting algorithm we are going to use
now, I'm going to be honest with you, we're going to use one of the simplest sorting algorithms around because honestly, the algorithm implementation here is really not that impoortant.

# what's much more important

understand how we're going to reuse this code as much as possible

let's write out an implementation of Bubble Sort
To work with a very simple array of numbers
So we're not going to worry about any code re-use or anythings like that just yet.
let's just get an implementation put together
I'm going to replace it with a simple class definition

And the idea here is that this is going to be a class that's going to take some collection of data and sort all the elements inside of it.
So I'm going to say that this sort of calss is going to have a property that I'll call like collection

The error message you're encountering indicates that the TypeScript compiler (tsc) is not recognized in your command line environment. This typically means that either TypeScript is not installed, or the installation path is not included in your system's PATH environment variable. Here are steps to troubleshoot and resolve the issue:

1. Check if TypeScript is Installed

First, check if TypeScript is installed globally. You can do this by running:

# npm list -g typescript

If TypeScript is not listed, you need to install it.

2. Install TypeScript Globally

If TypeScript is not installed, you can install it globally using npm (Node Package Manager). Run the following command:

# npm install -g typescript

3. Verify Installation

After installation, verify that tsc is available by running:

# tsc -v

And we're going to start to discuss how we're going to start to abstract out some of logic inside of here and get this algorithm to work for all these different data structures that we want it to work with.

we need to do a very diffrent method of comparison and need tp do a very diffrent method of swapping.
going to fix our code to work properly with a string of characters, just as well as with an array of numbers

to first take a bad approach to solving this issue.

the reason a lot of bad approaches here in kind of like the initial take on all these problems is because i think that a lot of these bad approaches that we're looking at are some ways of sloving things that a new engineer might decide to try.

How are we going to somehow convince typescript to allow us to run this code right here?
So to so so, we're going to use something called a type gurd.
A type gurd is going to be a check on the type of this collection.
once we run a type gurd, we are essentially going to clarify the type of value we are woking with.
By clarifying the type we are working with.
it will restore access to all the diffrent properties associated with this collection with an array of numbers, and we will not have to be limited to just the properties that are common between a string and a number

two type guards
1- typeof
Narrow type of a value to a primitive type

that syntax we used in those two type guards was just a little bit diffrent
Any time that we want to setup a type guard for a primitive value, like a number string boolean or a symbol

@ typeof []

but this is not going to function as a type guard.
typeScript will only allow you to restore access using the syntax right here for a string, a boolean and number.

2- instanceof
Narrow downevery other type of value

so now the other from of syntax we use in a type guard is any time they want to narrow down any other type of value.
so if we are not trying to restore access to a numbe, string or boolean, we're going to instead use that instance of syntax.

if you and I define a custome class, let's say, how about Sorter?

this.collection instanceof Sorter

So in other words, we would put a reference to the constructor function right there to use a type Guard with anything that is not a number, a string or a boolean.

# Why is This Bad ?

Remember, type guards are essentially very intelligent snippets of code. TypeScript really understand what is going on here. typeScript understands that if we get into this is it statement, then this.collection must be an arrray and we are going to restore access to all the properties of an array on this collection.

if we ever want to add in some additional things to be stored here,we would have to go back over to our class sorter and add them into this union.
