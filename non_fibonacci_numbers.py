# -*- coding: utf-8 -*-
"""non_fibonacci_numbers.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/14AqzfLb81FBxZtMcwn2nNxVNbDgQK2_u

A2. (Не) Фибоначчи
Числа Фибоначчи (https://ru.wikipedia.org/wiki/Числа_Фибоначчи) образуют неубывающую последовательность:

0, 1, 1, 2, 3, 5, 8, 13, 21, ...

Числами не Фибоначчи будем называть последовательность чисел, которые не входят в последовательность чисел Фибоначчи:

4, 6, 7, 9, 10, 11, 12, 14, ...

Требуется написать бесконечный генератор последовательности чисел не Фибоначчи. На вход подается число N, означающее количество чисел, которое необходимо вывести на вывод, каждое в отдельной строке.

#### Пример
Ввод
```
5
```
Вывод
```
4
6
7
9
10
```
"""

N = int(input('Введите N: '))

# оптимальное по памяти и времени решение
# Сложность выполнения решения линейна, O (n)
# Сложность памяти решения постоянна O (1)
def non_fibonacci_nums(value):
  prev = 0 
  next = 1
  if(value == prev or value == next):
    return 
  while(value >= 0):
    prev, next = next, prev + next    
    for i in range(prev+1, next):
      if(value == 0 ):
        return 
      else:
        print(i)
        value -= 1
      
  return 

non_fibonacci_nums(N)