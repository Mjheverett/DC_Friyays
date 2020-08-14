a = "pie"
b = "eip"
c = "pies"
d = "pwe"

def anagram(word1, word2):
    dict1 = {}
    dict2 = {}
    for i in word1:
        if i in dict1:
            dict1[i] += 1
        else:
            dict1[i] = 1
    for i in word2:
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

anagram(a, d)