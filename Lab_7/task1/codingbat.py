
def first_last6(nums):
    return nums[0] == 6 or nums[-1] == 6

def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]
#count_evens
def count_evens(nums):
    return sum(1 for num in nums if num % 2 == 0)

#sum13
def sum13(nums):
    total = 0
    skip = False
    for num in nums:
        if num == 13:
            skip = True
            continue
        if skip:
            skip = False
            continue
        total += num
    return total


#cigar_party
def cigar_party(cigars, is_weekend):
    return cigars >= 40 if is_weekend else 40 <= cigars <= 60

#caught_speeding
def caught_speeding(speed, is_birthday):
    limit = 5 if is_birthday else 0
    if speed <= 60 + limit:
        return 0
    elif speed <= 80 + limit:
        return 1
    else:
        return 2



#hello_name
def hello_name(name):
    return f"Hello {name}!"

#make_abba
def make_abba(a, b):
    return a + b + b + a



#string_times
def string_times(string, n):
    return string * n

#front_times
def front_times(string, n):
    return string[:3] * n
    

#sleep_in
def sleep_in(weekday, vacation):
    return not weekday or vacation

# monkey_trouble
def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile