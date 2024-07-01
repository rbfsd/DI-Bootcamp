# Exercise 1

# Import the numpy package under the name np.
import numpy as np

# Create a vector of zeros with size 10.
vector_zeros = np.zeros(10)
print("Vector of zeros:", vector_zeros)

# Compute the memory size of any array.
memory_size = vector_zeros.size * vector_zeros.itemsize
print("Memory size:", memory_size)

# Retrieve the documentation of the numpy add function from the command line.
print("NumPy add function documentation:")
print(np.info(np.add))

# Create a vector with values ranging from 10 to 49.
vector_range = np.arange(10, 50)
print("Vector with values from 10 to 49:", vector_range)

# Reverse a vector so the first element becomes last.
reversed_vector = vector_range[::-1]
print("Reversed vector:", reversed_vector)

# Create a 3x3 matrix with values ranging from 0 to 8.
matrix_3x3 = np.arange(9).reshape(3, 3)
print("3x3 matrix with values from 0 to 8:\n", matrix_3x3)

# Find indices of non-zero elements from [1, 2, 0, 0, 4, 0].
non_zero_indices = np.nonzero([1, 2, 0, 0, 4, 0])
print("Indices of non-zero elements:", non_zero_indices)

# Create a 3x3 identity matrix.
identity_matrix = np.eye(3)
print("3x3 identity matrix:\n", identity_matrix)

# Create a 5x5 matrix with row values ranging from 0 to 4.
matrix_5x5 = np.tile(np.arange(5), (5, 1))
print("5x5 matrix with row values from 0 to 4:\n", matrix_5x5)

# Create a vector of size 10 with values ranging from 0 to 1, both excluded.
vector_excluded = np.linspace(0, 1, 12)[1:-1]
print("Vector of size 10 with values from 0 to 1 excluded:", vector_excluded)

# Create a random vector of size 10 and sort it.
random_vector = np.random.rand(10)
sorted_random_vector = np.sort(random_vector)
print("Sorted random vector:", sorted_random_vector)

# Print the minimum and maximum representable value for each numpy scalar type.
print("Minimum and maximum representable values for numpy scalar types:")
for dtype in [np.int8, np.int32, np.int64, np.float32, np.float64]:
    print(f"{dtype}: min = {np.iinfo(dtype).min if np.issubdtype(dtype, np.integer) else np.finfo(dtype).min}, max = {np.iinfo(dtype).max if np.issubdtype(dtype, np.integer) else np.finfo(dtype).max}")

# How to convert a float (32 bits) array into an integer (32 bits) in place.
float_array = np.random.rand(10).astype(np.float32)
int_array = float_array.astype(np.int32, copy=False)
print("Converted integer array:", int_array)

# Subtract the mean of each row of a matrix.
matrix = np.random.rand(4, 4)
mean_subtracted_matrix = matrix - matrix.mean(axis=1, keepdims=True)
print("Matrix with mean subtracted from each row:\n", mean_subtracted_matrix)

# How to sort an array by the nth column.
array_2d = np.random.rand(4, 4)
nth_column_sorted = array_2d[array_2d[:, 1].argsort()]
print("Array sorted by the second column:\n", nth_column_sorted)

# How to swap two rows of an array.
array_2d[[0, 1]] = array_2d[[1, 0]]
print("Array with first and second rows swapped:\n", array_2d)

# Given an array C that is a bincount, produce an array A such that np.bincount(A) == C.
C = np.array([0, 1, 2, 3, 4])
A = np.repeat(np.arange(len(C)), C)
print("Array A such that np.bincount(A) == C:", A)
