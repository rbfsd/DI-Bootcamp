class AnagramChecker:
    def __init__(self, word_list_file):
        self.words = self.load_words(word_list_file)

    def load_words(self, file):
        with open(file, 'r') as f:
            return {line.strip().lower() for line in f}

    def is_valid_word(self, word):
        return word.lower() in self.words

    def get_anagrams(self, word):
        word = word.lower()
        anagrams = [w for w in self.words if self.is_anagram(word, w) and w != word]
        return anagrams

    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2)
