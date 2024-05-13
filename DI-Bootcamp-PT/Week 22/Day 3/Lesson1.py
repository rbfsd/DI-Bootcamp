# API/ apllication  programming interface
""" 
an API allow one app to talk-to another 
to allow transfer of store data, or instructions.

How does an API work ?
in order to call an API, the caller need 
to send unique identifying information as an 
identifier to the API service provider.
this identifier is called an API key 
"""

# regular expression **regEx**
""" 
regular expression is a sequence of characters that form a search pattern.
regEx is used to search for and replace specific patterns.
"""

# import the module 
import re

# regEx function
#  1. Re.Findall()

import re

string = "at what time ?"
match = re.findall('at', string)
print(match)

#  2. Re.Search()

import re 

string = 'at what time ?'
match = re.search('at', string)
if (match):
    print("string found at : ", match.start())
else:
    print("string not found")

# StringNotFound

import re

string = "at what time?"
match = re.search('of',string)
if (match):
    print("String found at: " ,match.start())
else:
    print("String not found!")

#  3. re.split()

import re

string = 'at what time ?'
words = re.split('a',string)
print(words)


#  4. re.sub()

import re

string = "at what time?"
matchi = re.sub("\s","!!!",string)
print (matchi)



# python file I/O

# opening a file 
f = open('secrets.txt')
# OR 
f = open("C:/Python33/secrets.txt")  # specifying full path

# syntax
file_object = open(file_name, access_mode)

# writing a file
f = open('secrete.txt', 'w')
f.write("Hello World !!")

# appending to a file 
f = open('secrets.txt','a+')
f.write = ('\nThis is text being appended to test.txt')
f.write('\nAnd another line here.')

# closing a file
f = open('secret.txt')
f.close()

# iterating throught a file 
for line in open('secret.txt'):
    print(line)

# Common Methods
f.read() 
f.readline() # Reads one entire line from the file. Reads a file till the newline
f.readlines() # Reads a file line by line, returns a list of the lines in the file

f.write(str) 
f.writelines(seq) # Writes a list of lines to the file.
# Example : 
# lines=["Hello world.\n", "Welcome to Tel Aviv.\n"]
# f.writelines(lines)

f.seek(offset)   
f.tell() # for binary files, mostly

f.close()

# exercice 
# Step 1: Read the file line by line
with open('nameslist.txt', 'r') as file:
    lines = file.readlines()

# Step 2: Read only the 5th line of the file
fifth_line = lines[4]

# Step 3: Read only the 5 first characters of the file
first_five_characters = lines[0][:5]

# Step 4: Read all the file and return it as a list of strings. Then split each word
words_list = []
for line in lines:
    words_list.extend(line.split())

# Step 5: Find out how many occurrences of the names "Darth", "Luke", and "Lea" are in the file
names_count = {
    'Darth': words_list.count('Darth'),
    'Luke': words_list.count('Luke'),
    'Lea': words_list.count('Lea')
}

# Step 6: Append your first name at the end of the file
my_name = 'YourFirstName'
with open('nameslist.txt', 'a') as file:
    file.write(my_name + '\n')

print("5th Line:", fifth_line)
print("First 5 Characters:", first_five_characters)
print("All Words Split:", words_list)
print("Occurrences Count:", names_count)
