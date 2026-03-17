# 1
print("Hello, World!")

# 2 - Arithmetic Operators
a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

# 3 - Python: Division
a = int(input())
b = int(input())
print(a // b)
print(a / b)

# 4 - Loops
n = int(input())
for i in range(n):
    print(i ** 2)

# 5 - Print Function
n = int(input())
print("".join(str(i) for i in range(1, n + 1)))

# 6 - List Comprehensions
x = int(input())
y = int(input())
z = int(input())
n = int(input())
print([[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n])

# 7 - Find the Runner-Up Score!
n = int(input())
arr = list(map(int, input().split()))
print(sorted(set(arr))[-2])

# 8 - Nested Lists
students = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    students.append([name, score])

second_lowest = sorted(set(score for _, score in students))[1]
print("\n".join(sorted(name for name, score in students if score == second_lowest)))

# 9 - Finding the Percentage
n = int(input())
student_marks = {}
for _ in range(n):
    name, *scores = input().split()
    student_marks[name] = list(map(float, scores))

query_name = input()
print(f"{sum(student_marks[query_name]) / len(student_marks[query_name]):.2f}")

# 10 - Lists
n = int(input())
lst = []

for _ in range(n):
    cmd, *args = input().split()
    if cmd == "insert":
        lst.insert(int(args[0]), int(args[1]))
    elif cmd == "print":
        print(lst)
    elif cmd == "remove":
        lst.remove(int(args[0]))
    elif cmd == "append":
        lst.append(int(args[0]))
    elif cmd == "sort":
        lst.sort()
    elif cmd == "pop":
        lst.pop()
    elif cmd == "reverse":
        lst.reverse()