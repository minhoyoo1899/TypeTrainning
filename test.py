#  문제1-1. arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
#  문제1-2. arrobj = {
#    "one" : 0
#    "two" : 1
#    "three" : 2
#    "four" : 3
#    "five" : 4
#  }

# 조건 1: sort(), sorted() 메서드를 사용하지 않고 문제를 해결합니다.
# 조건 2: 주어진 무작위 배열이 아닌, 다른 무작위 형태의 배열이어도 동작하여야 합니다.
# 조건 3: sortArray() 함수는 인자로 '배열'을 받습니다.
# 조건 4: sortArray() 함수의 리턴 타입은 객체입니다.
# 조건 5: 출력 객체는 정렬이 완료된 데이터의 index 0번째가 된 순서는 "one" 키의 값으로, index 1번째는 "two" 키의 값으로 배치되어 4번째 인덱스까지 객체에 담겨 출력되어야 합니다.
# 조건 6: step값이 몇인지(실행이 몇번 진행되었는지), 콘솔에 기록되어야 합니다.

inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]
step = 0
arr = []
for index, value in enumerate(inputData):
  arr.append(index)
  step + 1
  #print(inputData[index])
  #arr.append(inputData[index])
  #print(index, value)
  #print(inputData[i])
  #arr[i] = i
  #print(i)
  #arr.append(i + 1)

print(arr)
step + 1

class object:
  def index(self):
    self

obj = object()
step + 1
#print(obj.index)
#obj.index()

for index, value in enumerate(arr):
  if(index == 0):
    obj.one = value
    step + 1
  elif(index == 1):
    obj.two = value
    step + 1
  elif(index == 2):
    obj.three = value
    step + 1
  elif(index == 3):
    obj.four = value
    step + 1
  elif(index == 4):
    obj.five = value
    step + 1
  elif(index == 5):
    obj.six = value
    step + 1
  elif(index == 6):
    obj.seven = value
    step + 1
  elif(index == 7):
    obj.eight = value
    step + 1
  elif(index == 8):
    obj.nine = value
    step + 1
  elif(index == 9):
    obj.ten = value
    step + 1