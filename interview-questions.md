# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: programming using objects instead of functions, it's good for databases.

Researched answer: OOP is a programming model, it uses objects and classes linked with methods/functions. this allows for things like class inheritance, hiding, polymorphism and more to be used. It binds the data along with the functions operating on the data, then no other part of the code can use/access the data other than said function.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: an interger is a whole number, a float is a decimal. So the float should have a decimal and the float shouldn't. This needs to be taken into careful consideration when using them together.

Researched answer: Integers are whole numbers, floats are numbers that contain a decimal point. Any time an float is used, the outcome will always be another float, even if it's .0 


3. Ruby has an implicit return. What does that mean?

Your answer: implicit return means you don't need a return, since it's implied and so obvious, Thus not needing one.

Researched answer: Implicit return means there is no return needed. For example if return is the final expression in the executable code. Although some think it is frowned apon as it "goes against coding" since it makes it harder to read for others or yourself at a later date. 

4. What is a block in Ruby? 

Your answer: A block is a section of code with a start and an end. In a block, certain things can be invoked inside the block that can not be done outside the block.

Researched answer: A block is an anon function that can be passed into a method. Blocks are stared by do statements, ended in end statements. They can have more than one argument and are always enclosed in |'s
Blocks can be called just like methods using a yield statement.

5. How do you extract a single value from a Ruby hash?

Your answer: print the hash name and the key name holding the value

Researched answer: p hash_name [:key name] 
values are accessed with print, the hash name, bracket notation, colon then the key name. 

## Looking Ahead: Terms for Next Week

1. RSpec: Ruby Spec is an executable example, that tests if part of our code does what is expected. it's a testing framework like Jest. A behaviour development tool, used to refactor code if needed & make sure it works okay. 

2. Test-driven development: A process of writing out test cases before creating any code. This ensures all code passes moving through projects. As opposed to writing all the code and testing it at the end. The TDD process goes like so:

add test > test fails > write code > ensure code passes> refactor

Code written this way is said to be more commercially viable, make refactoring code easier and faster, prevents bugs and coupling, improves the code patterns and more. 

3. PostgreSQL: It's database management system, it supports many programming languages. Many companies use it as their primary database to support their producs and apps. It's very reliable with high availibility and uptime even for large scale applications. 

4. CRUD: Create, read, update, delete. 
4 essential functions for any persistent storage application. 

Create: means data can be created on the application/database, once it's saved or commited, it should remain there even if the device used is powered off.

Read: the data can be accessed at will on different devices (with the correct credentials). Search functions can be used, maybe filtered with specific criteria. 

Update: The data can be modified at will and reflected on the existing records.

Delete: Removes chosen data from the app/database, there are hard or soft deletes. 

5. HTTP: It's an application layer protocol, the foundation for the web. It transfers data between networked devices. Data such as text, images, video and sound. It's the last of OSI layers, running on more layers of a network protocol stack. Allowing the device and server to talk to eachother. 
