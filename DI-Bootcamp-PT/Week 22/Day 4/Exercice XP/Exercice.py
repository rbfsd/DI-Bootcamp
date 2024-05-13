# random sentence generator

import random 

def get_words_from_file(word_list_file):
    word_list_file = open("word_list.txt")
    word_list_file = word_list_file.read()
    word_list_file = word_list_file.split('\n')
    return word_list_file

def get_random_sentence(word_list_file, length):
    random_words = random.sample(word_list_file, length)
    random_sentence = ' '.join(random_words).lower()
    return random_sentence

# Main function
def main():
    # Explanation message
    print("Welcome to the Random Sentence Generator!")

    # Ask the user for the length of the sentence
    length = input("Enter the length of the sentence (between 2 and 20 words): ")

    # Validate user input
    if length.isdigit() and 2 <= int(length) <= 20:
        length = int(length)
        # Specify the full file path of the word list file
        word_list_file = "word_list.txt"
        words_set = get_words_from_file(word_list_file)
        random_sentence = get_random_sentence(words_set, length)
        print("Random Sentence Generated:", random_sentence)
    else:
        print("Error: Please enter a valid integer between 2 and 20.")

# Execute the main function if the script is run directly
if __name__ == "__main__":
    main()



# exercice 2

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

# Add a key called "birth_date" at the same level as "name"
data["company"]["employee"]["birth_date"] = "1990-01-01"

# Save the dictionary as JSON to a file
with open("output.json", "w") as outfile:
    json.dump(data, outfile)

print("JSON saved to 'output.json'")