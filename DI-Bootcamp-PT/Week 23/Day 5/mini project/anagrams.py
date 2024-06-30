from anagram_checker import AnagramChecker

def main():
    word_list_file = 'word_list.txt'  # Replace with the actual file name
    checker = AnagramChecker(word_list_file)

    while True:
        print("Menu:")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Choose an option: ")

        if choice == '2':
            break
        elif choice == '1':
            user_word = input("Enter a word: ").strip()
            if not user_word.isalpha() or ' ' in user_word:
                print("Error: Only single alphabetic word allowed.")
                continue

            if checker.is_valid_word(user_word):
                anagrams = checker.get_anagrams(user_word)
                print(f"\nYOUR WORD: \"{user_word.upper()}\"")
                print("This is a valid English word.")
                print(f"Anagrams for your word: {', '.join(anagrams)}")
            else:
                print(f"\nYOUR WORD: \"{user_word.upper()}\"")
                print("This is not a valid English word.")
        else:
            print("Invalid option. Please try again.")

if __name__ == '__main__':
    main()
s