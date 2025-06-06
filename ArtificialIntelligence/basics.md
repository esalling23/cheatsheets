# Artificial Intelligence

Artificial intelligence is a broad term that encompasses machine learning, deep learning, language models, and more. 

## What can AI do

AI systems can adapt, reason, and provide solutions. 

AI must be trained through processes like machine learning or deep learning, etc. in order to perform tasks. 

For something to be artificially intelligent it should be able to use:
- generalized learning (react to a new situation)
- reasoning (use past training to determine a path forward)
- problem solving (provide a solution based on given input)


## How AI Works

1. Perceive the surrounding environment & gether data about the surroundings relevant to it
2. Detect patterns in the environmental data
3. Learn from patterns and update understanding for future decisions


## Types of AI

[Comparison resource](https://www.spiceworks.com/tech/artificial-intelligence/articles/narrow-general-super-ai-difference/)

### Types of AI by CAPABILITY: 

- weak or narrow ai (ANI): 
  - focuses on one task 
  - classifies data by using machine learning, natural language processing, artificial neural networks, and deep learning
  - examples: alexa, chess or GO bot
  
- strong or general ai (AGI): 
  - can perform a broad range of tasks, reason, learn, and improve cognitive capabilities comparable to humans
  - self-learns on the go
  - possess common sense, creativity, and the ability to express emotions
  - examples: none yet, expected ~2040

- super ai (ASI):
  - self aware and has emotions
  - will simulate human reasoning and experiences to develop an emotional understanding, beliefs, and desires of its own

> At this time, we really only have weak/narrow AI

### Types of AI by FUNCTIONALITY:

- reactive machine
  - basic form of AI that works with present data & doesn't have past memory
  - example: IDM deep blue chess machine
- limited memory
  - learns from past data & makes decisions. temporary memory, only used to learn & then move on
  - example: self driving cars
- theory of mind
  - understands emotions, sentiment, and thoughts
  - examples: none yet - conceptual
    - near examples are Kismet & Sophia robots
- self awareness
  - hypothetical
  - understands internal traits, states, and conditions & perceive human emotions
  - would be smarter than the human mind


### Types of AI Technologies

- natural language generation
  - talking like a human
- smart devices
- virtual agents
  - online customer assistance, using natural language
- speech recognition
  - convert speech into text
- augmented reality
- machine learning
  - widely used for categorization and prediction
- robotic process automation
  - interpret, communicate, and analyze data
- decision management
- deep learning
  - uses a neural network on top of machine learning 
- image recognition

### Machine Learning

- Supervised learning
  - classify/predict based on labeled data fed to the machine
  - machines are provided direct feedback on predictions
- Unsupervised learning
  - provided non-labeled data, no feedback on predictions
  - should find hidden structures in data
- Reinforcement learning
  - learns by acting, seeing results, and changing future actions
  - one of the biggest demand areas?
  

#### Algorithms

**Linear Regression**

Assumes a linear relationship between input & output

Linear = straight line
Might have a positive slope (point upwards) or a negative slope (point downward)

Linear formula: `y = mx + c`

x = input
y = output
c = coefficient
m = y-intercept

Steps: 
- map data points of X & Y
- find the mean value of X & Y
- assume the linear path will pass through the mean point
- calculate M using data X/Y and the mean X (xi) and Y (yi)
	- m = SUM ((x - xi) * (y - yi)) / SUM (x - xi)^2
- Calculate C using mean values

Example:

| X value | Y value |
|---------|---------|
| 1 | 3 |
| 2 | 2 |
| 3 | 2 |
| 4 | 4 |
| 5 | 3 |

X mean = 3
Y mean = 2.8

1. FOR EACH DATA PAIR:

Find the value of (x - xi) * (y - yi)

Example:
((1 - 3) * (3 - 2.8))
(-2 * 0.2)
-0.4 


Find the value of (x - xi)^2

Example: 
(1 - 3)^2
(-2)^2
4

2. Then add all values together (SUM)
3. And divide the totals to get M

So if all the values of (x - xi) * (y - yi) added up were 2

And all the values of (x - xi)^2 were 10

Then the final equation would be 2 / 10 = 0.2 which is M


4. Now plot the known values (input data) and compare against Y values generated using the linear progression line

> We want the minimal distance from the linear line to each point of data. There are ways to calculate this, like Sum of Squared errors, Sum of Absolute errors, Root Mean Square error, etc.


**Decision Tree**


**Support Vector Machine**


