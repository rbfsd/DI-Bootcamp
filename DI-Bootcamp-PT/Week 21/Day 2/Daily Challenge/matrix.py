matrix_string = """
7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!
"""

# Step 1: Convert the string into a 2D list (matrix)
matrix = [list(line) for line in matrix_string.strip().split('\n')]

# Step 2: Initialize variables to store the result
result = []
num_columns = len(matrix[0])
num_rows = len(matrix)

# Step 3: Read column by column
for col in range(num_columns):
    for row in range(num_rows):
        char = matrix[row][col]
        if char.isalpha():
            result.append(char)
        else:
            # If the previous character is alphabetic, add a space before adding non-alpha characters
            if result and result[-1].isalpha():
                result.append(' ')

# Step 4: Join the result into a single string and remove any extra spaces
secret_message = ''.join(result)
secret_message = ' '.join(secret_message.split())

print(secret_message)
