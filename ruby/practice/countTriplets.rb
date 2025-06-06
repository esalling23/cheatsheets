# Find number of 3 values that are a geometric progression of a given ratio

# Geometric progression means values are in increasing order & changing by multiplying 
# the previous value by the common ratio
# Example: 2, 6, 18, 54 uses a common ratio of 3
# because 2 * 3 = 6, then 6 * 3 = 18, and 18 * 3 = 54 

# Question: Will the triplet values be in order?
# They will NOT be in order but will be ascending in the array


# Complete the countTriplets function below.
# @param arr: Array of values
# @param r: Common ratio to use for checking geometric progression
def countTriplets(arr, r)
  count = 0
  arr_length = arr.length - 2 # triplets so a slice of size 3
  # iterate over each index of the arr_length to get start_index
  (0...arr_length).each do |start_index|
    # puts "start index #{start_index}"
    # grab slice & check values for geometric progression
    slice = arr[start_index...start_index + 3]
    # puts "#{slice}"
    isValid = slice[0] < slice[1] && slice[0] * r == slice[1] && slice[1] < slice[2] && slice[1] * r == slice[2]
    # puts isValid

    if isValid 
      count += 1 
    end
  end

  return count
end

puts "Count: #{countTriplets([1, 4, 16, 64], 4)}"
puts "Count: #{countTriplets([1, 5, 25, 0, 25, 125, 625], 5)}"