import numpy as np

# Step 1: Setup
# Create the 5x5 matrix with random integers from 1 to 100
data = np.array(np.random.randint(1, 100, size=25)).reshape(5, 5)
print("Original data matrix:\n", data)

# Step 2: Matrix Manipulation
# Swap the second and fourth rows
data[[1, 3]] = data[[3, 1]]
print("\nData matrix after swapping the second and fourth rows:\n", data)

# Step 3: Normalization
# Normalize all the elements in the data matrix
normalized_data = (data - np.min(data)) / (np.max(data) - np.min(data))
print("\nNormalized data matrix:\n", normalized_data)

# Step 4: Z-score Normalization
# Standardize the elements in the data matrix using Z-score normalization
z_score_data = (data - np.mean(data)) / np.std(data)
print("\nZ-score normalized data matrix:\n", z_score_data)

# Step 5: Array Splitting
# Reshape the data matrix into a vector and split this array into five equal-sized sub-arrays
vector = np.ravel(data)
split_arrays = np.split(vector, 5)
print("\nSplit arrays:\n", split_arrays)

# Step 6: Dot Product
# Create two vectors of size 5 and compute the dot product
vector1 = np.array([3, 5, 6, 7, 8])
vector2 = np.array([2, 4, 6, 8, 10])
dot_product = np.dot(vector1, vector2)
print("\nDot product of vector1 and vector2:\n", dot_product)

# Step 7: Matrix Multiplication
# Create another 3x3 matrix and perform matrix multiplication with the first 3x3 part of the data
data2 = np.random.randint(1, 100, size=(3, 3))
matrix_multiplication = np.dot(data[:3, :3], data2)
print("\nMatrix multiplication result:\n", matrix_multiplication)

# Step 8: Inverse of a Matrix
# Create a 3x3 identity matrix, multiply it with 2, and compute its inverse
identity_matrix = np.eye(3) * 2
inverse_matrix = np.linalg.inv(identity_matrix)
print("\nInverse of the scaled identity matrix:\n", inverse_matrix)

# Step 9: Eigenvalues and Eigenvectors
# Compute the eigenvalues and eigenvectors for the first 3x3 part of the data matrix
eigenvalues, eigenvectors = np.linalg.eig(data[:3, :3])
print("\nEigenvalues:\n", eigenvalues)
print("Eigenvectors:\n", eigenvectors)

# Step 10: Find Missing Values
# Replace random 5 elements in the data matrix with np.nan and find the indices of the missing values
data_with_nan = data.copy()
nan_indices = np.random.choice(data.size, 5, replace=False)
np.put(data_with_nan, nan_indices, np.nan)
missing_values_indices = np.where(np.isnan(data_with_nan))
print("\nIndices of missing values:\n", missing_values_indices)

# Step 11: Replace Missing Values
# Replace the missing values in the data matrix with the mean of the matrix
mean_value = np.nanmean(data_with_nan)
data_with_nan[np.isnan(data_with_nan)] = mean_value
print("\nData matrix after replacing missing values with the mean:\n", data_with_nan)
