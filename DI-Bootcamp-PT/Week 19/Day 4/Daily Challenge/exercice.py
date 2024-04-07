# challenge 1

user_number = int(input('put a number: '))
user_length = int(input('put a length: '))

multiple_list = []
i = 1
while len(multiple_list) < user_length:
    multiple_list.append(user_number)

for i in range(1, user_length + 1):
    print(user_number * i)


# challenge 2
def remove_duplicate (input_str):
    result_str = ' '

    for i in range(len(input_str)):
        if i == 0 or input_str[i]  != input_str[i - 1]:
            result_str += input_str[i]
    return result_str

user_input = input("Enter a string:  ")
output_str = remove_duplicate(user_input)

print("Results is:  ", output_str)