# JSON

# javascript object notation

# it's a textfile that store python dictionary

example = {
    "firstName": "Jane",
    "lastName": "Doe",
    "hobbies": ["running", "sky diving", "singing"],
    "age": 35,
    "children": [
        {
            "firstName": "Alice",
            "age": 6
        },
        {
            "firstName": "Bob",
            "age": 8
        }
    ]
}


# python and Json

import json

# write pyhton dict as json file

my_familly = {
    "parents":['Beth', 'Jerry'],
    "children": ['Summer', 'Morty']
}

# The python function to save an object into a file is :

# json.dump(object_to_save, destination_file)

json_file = "my_file.json"

with open(json_file, 'w') as file_obj:
    json.dump(my_familly, file_obj)

# convert python dictionary to json object

import json

my_family = {
    "parents" :['Beth', 'Jerry'],
    "children" :['Summer', 'Morty']
}

json_my_familly = json.dumps(my_familly)
print(json_my_familly)

# Convert A Python Dictionary To JSON String : Pretty Print

import json

my_family = {
    "parents" :['Beth', 'Jerry'],
    "children" :['Summer', 'Morty']
}

json_file = "index.json"

with open(json_file, 'w') as file_obj:
    json.dump(my_family, file_obj, indent = 2, sort_keys=True)


# retrieve json data 

import json

json_file = 'my_file.json'
with open(json_file, 'r') as file_obj:
    my_family = json.load(file_obj)

print(my_family)


# exercice

import json

# Read data from file.json into a variable called family
with open('file.json', 'r') as json_file:
    family = json.load(json_file)

# Print details about Jane's children
print("Details about Jane's children:")
for child in family['children']:
    print(f"Name: {child['firstName']}, Age: {child['age']}")

# Add 'favorite_color' key to each child in the family variable
for child in family['children']:
    child['favorite_color'] = 'Blue'  # You can set any favorite color here

# Save the modified data back into file.json with indentation
with open('file.json', 'w') as json_file:
    json.dump(family, json_file, indent=4)