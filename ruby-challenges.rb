# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# reposts1 = 7
# # Expected output: '7 is odd'
# reposts2 = 42
# # Expected output: '42 is even'
# reposts3 = 221
# # Expected output: '221 is odd'

# Pseudo code: Create a conditional method that takes a number argument/parameter. add an if statement seeing if the number %2 equals 0. if it does, return a string interpolated message, saying #{number} is even. For the else, just add the string interpolated #{number} but saying it's odd. print the method and variables to check.

# def odd_even number
#     if number % 2 == 0
#         "#{number} is even"
#     else 
#         "#{number} is odd}"
#     end
# end

# p odd_even reposts1
# p odd_even reposts2
# p odd_even reposts3
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# beatles_album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
# beatles_album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
# beatles_album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

# Pseudo code: create a method with a string argument/parameter, add the .delete method for all vowels, upper and lower case. print the method with the variables.

# def vowel_remove string
#     return string.delete 'a' 'A' 'e' 'E' 'i' 'I' 'o' 'O' 'u' 'U'
# end

# p vowel_remove beatles_album1
# p vowel_remove beatles_album2
# p vowel_remove beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code: create a method with a conditional statement that accepts a string argument/parameter. The conditional will see if, string reversed and upcased == string upcased. If it does, it will return a string interpolated message saying #{string} is a palindrome. Else it is not a palindrome.

# def drome_check string
#     if string.upcase.reverse == string.upcase
#         return "#{string} is a palindrome"
#     else
#         return "#{string} is not a palindrome"
#     end
# end

# p drome_check palindrome_test_case1
# p drome_check palindrome_test_case2
# p drome_check palindrome_test_case3