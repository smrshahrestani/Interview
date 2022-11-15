# @Author: Seyed Mohammad Reza Shahrestani
# @Date: 09/09/2022


# Q1
# Calculates the sum of odd/even numbers in fibonacci
# @params: int: fib number , Boolean: change to True to add odd numbers to the result,
#  Boolean: change to False to remove even numbers from the result
# @return: [list of fib numbers up to n, the sum of fib numbers]
from audioop import mul


def fib_sum(n, odd=False, even=True):
    total = 0
    if n <= 0:
        return [0]
    sequence = [0, 1]
    while len(sequence) <= n:
        next = sequence[len(sequence) - 1] + sequence[len(sequence) - 2]
        sequence.append(next)
        if next % 2 == 0 and even: total += next
        if next % 2 != 0 and odd: total += next
    return sequence, total

fib_sum_result = fib_sum(100)[1]
print("Fib sum result: ", fib_sum_result)


# Q2
# Finds the similarity between two sequences with different lengths
# @params: list: first sequence, list: second sequence
# @return: list of similarity with no repeated value
def similarity(a,b):
    list_of_similarity = []
    for i in range(len(a)):
        for j in range(len(b)):
            if a[i] == b[j]:
                list_of_similarity.append(a[i])
    return list(set(list_of_similarity))

a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
b = [2,5,7,11,5,45,64,34,1,3,75,3,3]

similarity_result = similarity(a,b)
print("Similarity result: ", similarity_result)


# Q3
# Checks if all the digits in a number are odd or even
# @params: int: the number to check, Boolean: checks for odd/even based on this value
# @return: Boolean: True if all the all the digits in a number are odd/even based in the parameter value
def odd_even_digit_checker(n, even=True):
    result = False
    number_str = str(n)
    for i in enumerate(number_str):
        digit = int(i[1])
        if even:
            if digit % 2 == 0: result = True
            else: return False
        else:
            if digit % 2 != 0: result = True
            else: return False
    return result

even_digit_checker_result = odd_even_digit_checker(2224628646)
odd_digit_checker_result = odd_even_digit_checker(11113571, False)
print("Even digit checker result: ", even_digit_checker_result)
print("Odd digit checker result: ", odd_digit_checker_result)


# Q4
# X+XX+XXX+XXXX+...
# @params: int: number, int: number of Xs
# @return: int: sum of numbers
def weird_sum(n,x=4):
    total = 0
    mult = 1

    for i in range(x):
        total += n * mult
        mult = mult + (pow(10, i+1))
    
    return total

weird_sum_results_10 = weird_sum(1,10)
weird_sum_results = weird_sum(3)
print("Weird sum results: ", weird_sum_results)
print("Weird sum results 10: ", weird_sum_results_10)