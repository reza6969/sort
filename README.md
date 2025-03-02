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

# Good Solution

once agian, we're going to fix it eventually using interface.  
But before we just dive directly into the interface based solution, we're going to do a little bit of an intermediate refactor. so the intermediate refactor is going to help you understand the genral strategy we're going to use to fix this problem

to everything around this bubble sort algorithm and the whole reason that it doesn't work that well with these very differnt types is that we've got two operations that are going to have to be customized depending upon

the entire key to all this stuff is that the comparison and the swapping has to be customized based on the type of data we are working with. so we are going to do exactly that.

we are going to try to extract that comparison logic into a helper function in a different class. And then we're also going to extract the swapping logic into a different class as well.

So our sorer is no longer going to contain a direct reference to an array of numbers. instead, we're going to have our sorter have a direct reference to some new thing that we're going to create called a numbers collection.

The numbers collection is going to hold a reference to the actual array of numbers that we want to sort on some data property. Now, the name data here is not special. we could have called this like, you know, numbers two sort or something like that.

we need to make sure that slaughter can take other types of collections as well, like a collection of characters, a string or a length list or whatever else. So lats we have to do, how do we get this type right here to go away?

it has our sorter class at the top of the file. we are going to define an interface and this interface is going to provide some instructions to other classes on our project. on how they can be eligible for sorting. So the big question here is what are those instructions exactly? How do we tell every other class inside of our project how we can sort them?

So you and I are going to define some instructions at the top of the file that say, if you just give us a length property, a compare method and a swap method, you can be sorted no matter what type of collection you are.

you can be anything possible as long as you define the length property, the compare function and the swap function. That's how we get some amazing code reuse.
The final reveal here is that this is the last sorting algorithm you ever have to write, as long as you can define those three properties.

This is extremely significant because we don't have to memorize the actual sorting algorithm anymore. we only have to memorize. okey, define, compare, define swap, get the length.

Typescript is great because we can make these interfaces to describe the structure of an object or something like that. And that's technically true, but that is like really palying down the useful enough usefulness of interfaces.

You interface are useful not because we can describe a type, it's because we can set up a contract between one class and another class and say, Hey, if you do X, Y, Z, imagine all the functionality I'm going to give you.

something that's kind of interesting to keep in mind is that the interface only specifies the property names and respective types of some other class or some other object.

So in other words, we can actually define a class that has a compare function with these arguments and that return value and a swap method with these arguments that return value.

it just makes sure that these methods exist and have the appropriate types. just something important to keep in mind there.

So what's the issue?
well, let's be honest here. The code we have is awesome. But there's one big problem.

Every time that we want, we want to sort a collection. We have to create the collection. we then have to create a new thing called disorder, feed in the collection and then call sorter sort. i don't really seeing any programming language that quite as laborious as this is right here to sort a simple collection of records. what would be way more obvious for sorting than this and a lot more usable is if we could simply create some colectiion like let's say numbers collection right here, and then call numbers collection sort. That's way more obvious to other engineers. I think other engineers would understand like yeah, of course we call numbers collection sort. It is a method on the collection as opposed to us having to create that separate class. So what we have right now is good, but I don't think it's ideal. i think this is the kind of interaction we want right here. So like I said, just one more little.

We are just discussing how it's really awkward to have to ccreate an instance of disorder in order in order to sort any given collection. So in this video, we're going to figure out how we can add a sort method to our there different collections. And of course, we want to make sure that each of these sort methods are still going to have some amount of code reuse. So we don't want to have to re-implement sort every single time.
So I think that there's probably going to be a pretty clear direction to move to make this happen.
I think that a pretty clear solution would be to use classic inheritance.

Inheritance is where we have diffrent classes and we want to some how share code between them.
So in this case, we want to make this sort method available on the numbers collection, on characters in on length list.
So we can kind of imagine that we will copy paste all the methods of sauder down to these classes.
Remember there is no actual like copy paste of methods going on. This is just a convenient way to imagine this relationship.
So now we would refer to Sorter as the parent class or the superclass of numbers, characters and linked list. So we are using Sorter to extend these three child classes.
So if we did this, we would then have a sort method on each of these different classes. There's only one implementation of sort and that's defined back inside of Sorter.

Abstract Classes
Can't be used to create an object directly

# Only used as a parent class

So whenever we create an abstract class, it means there are going to be some set of methods on it that we want to make available to other classes for inheritance or essentially to copy paste those methods somewhere else.
Now, of all those methods some of them can be real implementations.
So in an abstract class that is ok, we can have references inside of some implemented methods to other methods that don't actually exit yet.
The only requirement is that we have to write out the names of those methods and their signature types, like different arguments they take and the diffrent types they return inside of the abstract class body.
so in other words, like right here, we just have to write out a listing of all the methods and types for them that we expect to eventually exist inside of Sorter. Now when I say eventually exist, by that I mean those kind of stubs of sorts that we're going to write out. we're essentially saying that any class that extends our abstract class has to promise to implement those methods.So child classes have to promise to implement the methods that we said will eventually exist in the future.

Can contain real implementation for some methods
The implemented methods can refer to other methods that don't actually exist yet( we still have to provide names and types for the un-implemented methods)
Can make child classes promise to implement some other method

We're going to turn sorter into an abstract class. It is going to have a real definition for sort or a real implementation.
Abstract class will then be used as a parent class to characters collection. So again, we imagine that we are copy pasting sort over. TypeScript is then going to try to evaluate sorter in isolation. Then inside there, inside the abstract class, we are going to provide stubs or some like tittle information about the length, compare and swap methods.
So we're going to tell TypeScript that these are going to eventually exist. We never expect to create an instance of Sorter. We just want to borrow one method form it.

So We are making the child class promise to implement those diffrent methods.

We're going to turn sorter into an abstract class.

# talk about some of the differences between interfaces and abstract classes

So just to be clear, we don't actually need the interface anymore.Let's do a quick compare and contrast, however, of interface versus abstract classes.

First of, an interface allows us to easily set up a contract between diffrent classes. Remember, this is when we originally had this order. We said, Hey, if anything inside of our application want it to be sorted, all it had to do was implement our sortable interface. And so that allowed us to get differnt classes to work together without a direct dependency betweemn then.
And so interface generally promte very loose coupling.
In general, I recommend you try looking for interfaces any time that we have diffrent objects that we have different objects that want to work together.
And so any time we are working with a very dissimilar objects or objects with very different purposes, that is a very good time to reach for an interface.
