a = [1, 2, 3, 4]
b = [1, 4, 9, 16]
c = [1, 4, 5, 6]
d = [1, 4, 4, 2]
e = [1, 16, 9, 4]
f = [1, 2, 3, 4, 5]

def higher_powers(list1, list2):
    dict1 = {}
    dict2 = {}
    a2 = [number ** 2 for number in list1]
    for i in a2:
        if i in dict1:
            dict1[i] += 1
        else:
            dict1[i] = 1
    for i in list2:
        if i in dict2:
            dict2[i] += 1
        else:
            dict2[i] = 1
    evaluation = True
    for key in dict1:
        if key in dict2:
            if dict1[key] == dict2[key]:
                pass
            else:
                evaluation = False
        else:
            evaluation = False
    for key in dict2:
        if key in dict1:
            if dict2[key] == dict1[key]:
                pass
            else:
                evaluation = False
        else:
            evaluation = False
    print(evaluation)

higher_powers(a, b)
higher_powers(a, c)
higher_powers(a, d)
higher_powers(a, e)
higher_powers(f, a)