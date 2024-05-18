# part 1

import os 

class Text:
    def __init__(self, content):
        self.content = content

    def frequency_word(self, word):
        # split a string into a list
        words = self.content.split()
        # count the frequency of the word
        frequency = words.count(word)
        if frequency > 0:
            return frequency
        else:
            return(f"The word {word} dpoes not appear in the text")
    
    def most_common_word(self):
        words = self.content.split()
        if not words:
            return "There are no words in the text"
        most_common = max(set(words), key = words.count)
        return most_common
    
    def unique_words(self):
        words = self.content.split()
        unique_word =  list(set(words))
        return unique_word

    @classmethod
    def from_title(cls, file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        return cls(content)

# Create a Text instance from the provided text file
text_from_file = Text.from_title('DI-Bootcamp\DI-Bootcamp-PT\Week 22\Day 4\Daily Challenge\the_stranger.txt')

# Test the methods
print(text_from_file.content[:200])  # Print the first 200 characters of the text
print(text_from_file.word_frequency('stranger'))  # Example: returns the frequency of the word 'stranger'
print(text_from_file.most_common_word())  # Example: returns the most common word in the text
print(text_from_file.unique_words())  # Example: returns a list of unique words in the text

