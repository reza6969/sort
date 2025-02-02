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
