# challenge 1: sorting

def sort_world(sentence):
    # use strip() method to separate the word into a list
    words = [word.strip() for word in sentence.split(',')]

    sorted_words = sorted(words)

    print(','.join(sorted_words))

user_input = input("Enter a comma-separated sequence of words: ")

sort_world(user_input)

# challenge 2: longest word

def longest_word(sentence):
    words = sentence.split()

    longets = ''
    longest_length = 0

    for word in words:
        cleaned_word = ''.join(filter(str.isalnum, word))

        if len(cleaned_word) > longest_length:
            longest = cleaned_word
            longest_length = len(cleaned_word)

        return longest
    
print(longest_word("Margaret's toy is a pretty doll."))  
print(longest_word("A thing of beauty is a joy forever."))  
print(longest_word("Forgetfulness is by all means powerless!"))
