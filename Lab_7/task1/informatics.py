#a
import math
a = int(input())
b = int(input())
c = math.sqrt(a**2 + b**2)
print(c)


a = int(input())
b = int(input())
print(a if a > b else b)


a = int(input())
b = int(input())
for i in range(a, b+1):
    if i % 2 == 0:
        print(i, end=' ', sep=' ')


import math
a = int(input())
i = 1
while(a > 0):
    if i  // math.sqrt(i) == math.sqrt(i):
        print(i, end=' ')
    i+=1
    a-=1


a = int(input())
arr = list(map(int,(input().split())))
ans = []
for i in range(a):
    if i % 2 == 0:
        ans.append(arr[i])

print(ans)


def min(a , b , c , d):
    if( a < b and a < c and a < d):
        return a
    elif( b < a and b < c and b < d):
        return b
    elif( c < a and c < b and c < d):
        return c
    elif( d < a and d < c and d < b):
        return d
    
print(min(1,2,3,4))


#b
a = int(input())
i = 2
while(a > i):
    if a % i == 0:
        print(i)
        break
    else:
        i+=1


n = int(input())
print(f"The next number for the number {n} is {n+ 1}.")
print(f"The previous number for the number {n} is {n - 1}.")


y = int(input())
if (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0):
    print("Yes")
else:
    print("NO")


a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b+ 1):
    if i % d == c:
        print(i, end=' ')


n = int(input())
arr = list(map(int, input().split()))

for i in arr:
    if i % 2 == 0:
        print(i, end =' ')


def power(a:int, b:int):
    ans = a
    for i in range(b-1):
        ans *= a
    return ans

print(power(11,2))


#c
n = int(input())
k = int(input())
print(k//n)


a = int(input())
b = int(input())

if(a == 1 and b == 1) or (a != 1 and b != 1):
    print("YES")
else:
    print("NO")


import math
a = int(input())
b = int(input())

for i in range(a, b+ 1):
    if i // math.sqrt(i) == math.sqrt(i):
        print(i, end=' ')


a = int(input())
i = 1
while(a > i):
    print(i, end =' ')
    i = i * 2


arr = list(map(int, input().split()))

cnt = 0
for i in arr:
    if i > 0:
        cnt += 1
print(cnt)


#d
n = int(input())
k = int(input())
print(k%n)


a = int(input())
if a > 0:
    print(1)
elif a < 0:
    print(-1)
else:
    print(0)


import sys
a = int(input())
i = 1
while(a >=i):
    if(i == a):
        print('YES')
        sys.exit(0)
    else:
        i = i * 2
print("NO")


n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(n - 1):
    if arr[i] < arr[i+1]:
        cnt+=1
print(cnt)


#e
a = int(input())
b = int(input())
c = (a * b) % 109
print(c)


a = int(input())
b = int(input())
print(1 if a > b else 2)


n = int(input())
cnt = 0
i=1
while(n >= i):
    i *= 2
    cnt+=1
print(cnt)


import sys
n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(n - 1):
    if (arr[i] >  0 and arr[i+1] > 0) or (arr[i] <  0 and arr[i+1] < 0):
        print("YES")
        sys.exit(0)

print("NO")


#f
n = int(input())
arr = list(map(int, input().split()))

if len(arr) < 3:
    print(0)
flag = 1
cnt = 0
for i in range(1,len(arr) - 1):
    if flag==1:
        if arr[i-1] < arr[i] and arr[i+1] < arr[i]:
            cnt+=1
        flag= 0
    else:
        flag=1

print(cnt)


#g
a  = int(input())
for i in range(2, a+1):
    if a % i == 0:
        print(i)
        break

n = int(input())
arr = list(map(int, input().split()))

for i in range(len(arr) - 1, -1, -1):
    print(arr[i], end=' ')


#h
a = int(input())
for i in range(1, a + 1):
    if a % i == 0:
        print(i, end=' ')


#i
a = int(input())
cnt = 0
for i in range(1, a + 1):
    if a % i == 0:
        cnt+=1
print(cnt)


#j
sum = 0
for i in range(101):
    sum+=i

print(sum)


#k
n = int(input())
sum = 0
for i in range(n):
    x = int(input())
    sum += x
print(sum)


#m

n = int(input())
sum = 0
for i in range(n):
    x = int(input())
    if x == 0:
        sum+=1
print(sum)