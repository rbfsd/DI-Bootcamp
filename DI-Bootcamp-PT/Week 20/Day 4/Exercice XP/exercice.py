import random

def get_random_temp(season):
    if season.lower() == 'winter':
        return round(random.uniform(-10, 16), 1)
    elif season.lower() == 'spring':
        return round(random.uniform(4, 23), 1)
    elif season.lower() == 'summer':
        return round(random.uniform(16, 32), 1)
    elif season.lower() == 'autumn' or season.lower() == 'fall':
        return round(random.uniform(4, 23), 1)
    else:
        return "Invalid season input"

def main():
    month = int(input("Enter the number of the month (1-12): "))
    
    if month in [12, 1, 2]:  # Winter
        season = 'winter'
    elif month in [3, 4, 5]:  # Spring
        season = 'spring'
    elif month in [6, 7, 8]:  # Summer
        season = 'summer'
    elif month in [9, 10, 11]:  # Autumn / Fall
        season = 'autumn'
    else:
        print("Invalid month input")
        return
    
    temperature = get_random_temp(season)
    print(f"The temperature right now is {temperature} degrees Celsius.")

    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temperature <= 23:
        print("Nice weather! Enjoy your day.")
    elif 24 <= temperature <= 32:
        print("Warm day ahead! Stay hydrated.")
    elif 32 < temperature <= 40:
        print("Hot outside! Find some shade.")
    else:
        print("Temperature out of range.")

if __name__ == "__main__":
    main()


#exercice 2 

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def users_quiz():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for question_data in data:
        question = question_data["question"]
        answer =  question_data["answer"]

        user_answer = input(question + ' ')

        if user_answer.lower() == answer.lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append({
                "question": question,
                "user_answer": user_answer,
                "correct_answer": answer
            })
            
    return correct_answers, incorrect_answers, wrong_answers

def display_results(correct_answers, incorrect_answers, wrong_answers):
    print(f"You answered {correct_answers} questions correctly and {incorrect_answers} questions incorrectly.")
    
    if incorrect_answers > 3:
        print("You had more than 3 wrong answers. Please play again.")
    else:
        print("Well done!")

    if wrong_answers:
        print("Here are the questions you answered incorrectly:")
        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your Answer: {item['user_answer']}")
            print(f"Correct Answer: {item['correct_answer']}")

if __name__ == "__main__":
    correct, incorrect, wrong = users_quiz()
    display_results(correct, incorrect, wrong)


# exercice 3

def get_age(year, month, day):
    current_year = 2024
    current_month = 4

    age =  current_year - year

    if current_month < month :
        age -= 1

    return age

birth_year = 1990
birth_month = 5
birth_day = 15

age = get_age(birth_year, birth_month, birth_day)
print(f"L'âge est {age} ans.")

def can_retire(gender, date_of_birth):
    year, month, day = date_of_birth

    age = get_age(year, month, day)

    retirement_male = 67
    retirement_female = 62

    if gender.lower() == 'male' and age >= retirement_male:
        return True
    elif gender.lower() == 'female' and age >= retirement_female:
        return True
    else:
        return False
    
date_of_birth =  (1960, 5, 25)
gender = 'male'

retirement_status = can_retire(gender, date_of_birth)
if retirement_status:
    print("La personne peut prendre sa retraite.")
else:
    print("La personne ne peut pas prendre sa retraite.")



# exercice 4

# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX


def calculate_sum(X):
    # Calcul de chaque terme individuel
    term_1 = X  # X
    term_2 = X * 10 + X  # XX
    term_3 = X * 100 + X * 10 + X  # XXX
    term_4 = X * 1000 + X * 100 + X * 10 + X  # XXXX
    
    # Addition des termes pour obtenir le résultat final
    total_sum = term_1 + term_2 + term_3 + term_4
    
    return total_sum

# Exemple d'utilisation de la fonction
X = 3
result = calculate_sum(X)
print(f"Le résultat de la somme est : {result}")
