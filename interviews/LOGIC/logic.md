# Logic Questions - NOT CODING

## Socks Probability

You are in a pitch black room with 27 black socks, 19 grey socks, and 9 navy socks. How many socks do you grab to ensure you get a pair that is not navy (ie: two grey or two black socks)?

### Answer

Worst case: 
1. we pull 9 and get all the navy onesFrom there we could 
2. There's only grey/black left. Next sock #10 is either a black or grey sock. 
3. If sock #11 is a match to sock #10 we can stop. Worst case, it's not - we pull #12 and will get a match for either #10 OR #11

So 12 socks is the answer

## Heavier Balls

[Video](https://www.youtube.com/watch?v=ZtewpseiCIA&t=7s)

You have 9 balls, all of which weigh the same except for 1. You have a regular 2-sided scale, how can you find which ball is heaviest? 

- Group the balls and weigh the groups against eachother
- Identify the heaviest group & then weigh sections of that group
- Etc. 

## Number of squares on a chessboard

For N squares in a chess board, calculate the number of total squares (1x1, 2x2, 3x3, ..., NxN)

Factorials

