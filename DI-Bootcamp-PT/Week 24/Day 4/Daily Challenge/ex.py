# ex1

def word_frequency(input_str):
    words = input_str.split()
    frequency_dict = {}
    
    for word in words:
        if word in frequency_dict:
            frequency_dict[word] += 1
        else:
            frequency_dict[word] = 1
            
    return frequency_dict

input_str = "apple orange apple banana orange apple"
result = word_frequency(input_str)
print(result)


# ex2

def longest_unique_substring(s):
    char_index = {}
    start = 0
    max_length = 0
    
    for i, char in enumerate(s):
        if char in char_index and char_index[char] >= start:
            start = char_index[char] + 1
        char_index[char] = i
        max_length = max(max_length, i - start + 1)
    
    return max_length

s = "abcabcbb"
result = longest_unique_substring(s)
print(result)
