# Comparing Ruby, Python, and JavaScript: A Guide for Developers

Ruby, Python, and JavaScript are popular programming languages with unique strengths and applications. This guide compares the three languages with examples ranging from simple syntax to more advanced concepts. For each example, a code snippet demonstrates how to achieve the same functionality in each language.

---

## Table of Contents
1. [Hello World](#hello-world)
2. [Variables and Data Types](#variables-and-data-types)
3. [Conditionals](#conditionals)
4. [Loops](#loops)
5. [Functions](#functions)
6. [Classes and Objects](#classes-and-objects)
7. [Asynchronous Programming](#asynchronous-programming)
8. [Web Server Example](#web-server-example)

---

## Hello World
The simplest program to start with: printing "Hello, World!"

### Ruby
```ruby
puts "Hello, World!"
```

### Python
```python
print("Hello, World!")
```

### JavaScript
```javascript
console.log("Hello, World!");
```

---

## Variables and Data Types
Declaring variables and exploring basic data types.

### Ruby
```ruby
name = "Alice"
age = 30
temperature = 98.6
is_happy = true
```

### Python
```python
name = "Alice"
age = 30
temperature = 98.6
is_happy = True
```

### JavaScript
```javascript
let name = "Alice";
let age = 30;
let temperature = 98.6;
let isHappy = true;
```

---

## Conditionals
Using `if`, `else`, and `elsif`/`elif`/`else if`.

### Ruby
```ruby
age = 18
if age >= 18
  puts "You are an adult."
else
  puts "You are a minor."
end
```

### Python
```python
age = 18
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
```

### JavaScript
```javascript
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

---

## Loops
Examples with `for` loops.

### Ruby
```ruby
(1..5).each do |i|
  puts "Number: #{i}"
end
```

### Python
```python
for i in range(1, 6):
    print(f"Number: {i}")
```

### JavaScript
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Number: ${i}`);
}
```

---

## Functions
Defining and calling functions.

### Ruby
```ruby
def greet(name)
  "Hello, #{name}!"
end

puts greet("Alice")
```

### Python
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
```

### JavaScript
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));
```

---

## Classes and Objects
Object-oriented programming basics.

### Ruby
```ruby
class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def greet
    "Hi, I'm #{@name} and I'm #{@age} years old."
  end
end

person = Person.new("Alice", 30)
puts person.greet
```

### Python
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."

person = Person("Alice", 30)
print(person.greet())
```

### JavaScript
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

const person = new Person("Alice", 30);
console.log(person.greet());
```

---

## Asynchronous Programming
Handling asynchronous operations.

### Ruby
```ruby
require 'net/http'

Thread.new do
  uri = URI('https://jsonplaceholder.typicode.com/todos/1')
  response = Net::HTTP.get(uri)
  puts response
end

sleep 1 # Ensure thread has time to execute
```

### Python
```python
import requests
import threading

def fetch_data():
    response = requests.get('https://jsonplaceholder.typicode.com/todos/1')
    print(response.text)

thread = threading.Thread(target=fetch_data)
thread.start()
thread.join()
```

### JavaScript
```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data));
```

---

## Web Server Example
A basic web server in each language.

### Ruby
```ruby
require 'sinatra'

get '/' do
  "Hello, World!"
end

# Run using: ruby app.rb
```

### Python
```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"

# Run using: flask run
```

### JavaScript
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server is running on port 3000'));
```

---

This guide demonstrates how Ruby, Python, and JavaScript can achieve similar outcomes using their distinct syntax and paradigms. Explore each language to see which best suits your project needs!

