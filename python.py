# @Author: Seyed Mohammad Reza Shahrestani
# @Date: 09/09/2022


# Q1
# This function calculates the sum of the squares of numbers starting from 1 up to 'a'
# where the number is divisible by 'b' and '3'
# @params: int: number, int: divisible by, int: cap number
def generator(a, b, c=102030):
    total = 0
    counter = 0
    while counter <= a and counter < c:
        if counter % b == 0 and counter % 3 == 0:
            total += counter
        counter += 1

    return total

generator_result = generator(12,2)
print("Generator result: ", generator_result)


# Q2
# This function returns a list of lists in this format: [[1],[1,2],[1,2,3], ...]
# @params: int: cap number
# @return: list of lists
def weird_list(n):
    final = []
    for i in range(n):
        final.append(list(range(1, i+2)))
    return final

weird_list_result = weird_list(3)
print("Weird list result: ", weird_list_result)
