
import random 

user_input = input("put a string: ")

if len(user_input) < 10 :
    print("String no long enough")
elif len(user_input) > 10:
    print("String too long")
else:
    print("Perfect string")

    first_character = user_input[0]
    last_character = user_input[-1]
    print("First character:", first_character)
    print("Last character:", last_character)

for i in range(1, len(user_input) + 1):
    print(user_input[:i])

print(random.shuffle(user_input))