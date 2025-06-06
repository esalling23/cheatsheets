#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'checkMagazine' function below.
#
# The function accepts following parameters:
#  1. STRING_ARRAY magazine
#  2. STRING_ARRAY note
#

def mapArrCounts(arr):
    counts = dict()
    for i in arr:
        counts[i] = counts.get(i, 0) + 1
    return counts

def checkMagazine(magazine, note):
    # Write your code here
    magWords = mapArrCounts(magazine)
    noteWords = mapArrCounts(note)
    print(magWords)
    print(noteWords)
    
    isValid = True
    for key in noteWords:
        print(magWords.get(key, 0))
        print(noteWords.get(key, 0))
        if noteWords.get(key, 0) > magWords.get(key, 0):
            isValid = False
            break
        else:
            continue
    
    print(isValid and 'Yes' or 'No') 

# checkMagazine(
#   ['give', 'me', 'one', 'grand', 'today', 'night'],
#   ['give', 'one', 'grand', 'today']
# )

checkMagazine(
  ['two', 'times', 'three', 'is', 'not', 'four'],
  ['two', 'times', 'two', 'is', 'four']
)