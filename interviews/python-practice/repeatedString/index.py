#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'repeatedString' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. STRING s
#  2. LONG_INTEGER n
#

# Attempt 1: Memory error for big `n` input
# def repeatedString(s, n):
#     # Write your code here
#     multiples = math.ceil(n / len(s))
#     repeatedS = (s * multiples)[:n]
#     count = 0
#     for c in repeatedS:
#         if c == 'a':
#             count+=1

#     return count

# Attempt 2: Passed 60% of tests
# def repeatedString(s, n):
#   numAs = len([a for a in s if a == 'a'])
#   multiples = n / len(s)
#   repeatedS = math.ceil(numAs * multiples)
#   return repeatedS



# In discussion found this solution:
# s.count("a")*(n//len(s)) + s[:n%len(s)].count("a")

# The problem in the previous solution is that it doesn't properly handle
# cases where the string doesn't repeat perfectly
def repeatedString(s, n):
    # a's in the whole string
    asInInput = s.count('a')

    # Get multiples of the input using floor division
    # This won't include the partial string at the end
    multiplesOfInput = n // len(s)

    # Finds a's in the last partial of the string
    leftovers = s[:n % len(s)].count('a')

    return asInInput * multiplesOfInput + leftovers



print(repeatedString('a', 1000000000000))