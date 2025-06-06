#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'jumpingOnClouds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY c as parameter.
#

def jumpingOnClouds(c):
    # Write your code here
    # Find the best path 
    path = []
    # Track current position - Start at 0 index
    currentPosition = 0
    print(c)
    # While (current position < last cloud index)
    while currentPosition < len(c) - 1:
        newPos = currentPosition + 2
        # Check currentPosition + 2
        if newPos < len(c) and c[newPos] == 0:
            # if cumulus - set currentPosition to +=2
            currentPosition += 2
        else:
            # if thundercloud - set currentPosition to +=1
            currentPosition += 1
        
        # Add currentPosition to path[]
        path.append(currentPosition)
    print(path)
    return len(path)

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])