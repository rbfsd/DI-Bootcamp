# exercice 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
mapped = zip(keys, values)
print(set(mapped))


# exercice 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name} doit payer ${cost}")
    total_cost += cost

print(f"Coût total pour la famille: ${total_cost}")

# bonus
familly_input = {}

while True:
    name = input('For each familly member enter a name: ')
    if name == 'quit':
        break
    age = int(input("Enter the person's age: "))
    familly_input[name] = age

for name, age in familly_input.items():
    print(f"{name} - {age}")

print(familly_input)

# exercice 3
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green

brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
    }
}

brand['number_stores'] = 2

print("Zara's clients are men, women, children, and home shoppers.")

brand['country_creation'] = "Spain"

if 'international_competitor' in brand:
    brand['international_competitors'].append('Desigual')

del brand['creation_date']
# Print the last international competitor:
print(brand['international_competitors'] [-1])

print(brand['major_color']['US'])

# Print the amount of key value pairs (ie. length of the dictionary).
print(len(brand))

print(brand.keys())

more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}

brand.update(more_on_zara)

# exercice 4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

disney_user_A = {}
for user in users:
    disney_user_A[user] = users.index(user)
print(disney_user_A)

disney_user_B = {}
for index, user in enumerate(users):
    disney_user_B[index] = user
print(disney_user_B)

disney_users_C = {}
for user in sorted(users):
    disney_users_C[user] = users.index(user)
print(disney_users_C)

disney_users_A_filtered = {}

for user in users:
    if user.startswith('M') or user.startswith('P'):
        disney_users_A_filtered[user] = users.index(user)

print(disney_users_A_filtered)