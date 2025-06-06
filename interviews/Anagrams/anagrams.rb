# My first attempt
# def sherlockAndAnagrams(s)
#   sArr = s.split("")
#   # Write your code here
#   count = 0
#   1.upto(sArr.length) do |i|
#       # grab a slice and move +1 starting index 
#       # then do it again, removing the first char
#       remainder = sArr[0...]
        
#       while remainder.length > i
#         slice = remainder[0...i]
#         sliceHash = Hash.new(0).tap { |h| slice.each { |c| h[c] += 1 } }
#         puts sliceHash
#         startingIndex = 1
#         while (startingIndex <= remainder.length - i)
#             slice2 = remainder[startingIndex...startingIndex + i]
#             slice2Hash = Hash.new(0).tap { |h| slice2.each { |c| h[c] += 1 } }
#             puts slice2Hash
#             if sliceHash == slice2Hash
#               puts "found match"
#               count += 1
#             end
    
#             startingIndex += 1
#         end

#         remainder = remainder[1...]

#       end
#   end
  
#   return count
# end

# Now, using frequency arrays to speed up performance

def sherlockAndAnagrams(s)
    count = 0
    substrings = Hash.new(0)

    # iterate through string indeces
    (0...s.length).each do |start_index|
        # 26 length array with starting value 0 to represent a...z
        freq = Array.new(26, 0)

        # Now check every letter to the right
        (start_index...s.length).each do |end_index|
            # find char position & count it in frequency array
            freq[s[end_index].ord - 'a'.ord] += 1
            
            puts s[end_index]
            # build a key from the current frequency array
            key = freq.join(',')
            puts key

            # count the current count in the hash
            count += substrings[key]
            substrings[key] += 1
            puts count
        end
    end

    return count
end

puts sherlockAndAnagrams('abba')
# puts sherlockAndAnagrams('abcd')