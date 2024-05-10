# module

import math
print (math.e)
 
""" --------------------------------- """

from math import floor

print(floor(9.6764))
# > 9

import math
print(math.floor(9.8293))

""" --------------------------------- """

import math as m

print(m.sqrt(121))
print(m.sqrt(729))

print(m)

print(dir(m))

""" -------------------------------------- """

"""  PIP: python package manager,
it can download and install pachkage 
alone from pypi.org
 """

from faker import Faker 

fake = Faker()
print(fake.name())

from faker import Faker
fake = Faker()

def create_file(num):
    num_str = str(num)
    f = open("datefile" + num_str + ".txt", "w")
    for _ in range(100):
        f.write(f"{fake.date()}\n")
    f.close()
print(fake.date())

create_file(1)
create_file(2)


# Finds the median between two dates.

import sys
import typing

from tabulate import tabulate

def main(file1, file2):
    file1_contents = extract_file_contents(file1)
    file2_contents = extract_file_contents(file2)

    display_files(file1_contents, file2_contents)

    dates = sorted(set(file1_contents).union(file2_contents))
    print(dates[len(dates) // 2])

def display_files(file1_contents, file2_contents):
    table = {
        'file1': file1_contents,
        'file2': file2_contents
    }
    print(tabulate(table))

def extract_file_contents(file_path: str) -> typing.List[str]:
    """ 
    Extract file contents and strip whitespaces from each row.
    : param file_path: The path to the file to extract
    : return: A list of date data rows
    """ 

    with open(file_path, 'r') as f:
        file_contents = f.readlines()
    new_file_contents = []
    for date_data_record in file_contents:
        date_data_record = date_data_record.strip()
        if date_data_record:
            new_file_contents.append(date_data_record)
    return new_file_contents

if __name__ == '__main__':
    args = sys.argv[1:]
    if len(args) != 2:
        print(f"Expected two arguments as files. Got {len(args)} instead.")
        sys.exit(1)
    main(*args)