a = "hello"
b = "sprinkle slurps"
c = "car cat cuts crinckles"

def frequency(list1):
    dict1 = {}
    for i in list1:
        if i in dict1:
            dict1[i] += 1
        else:
            dict1[i] = 1
    sort_dictionary = sorted(dict1.items(), key=lambda x: x[1], reverse=True)
    print(sort_dictionary[0][0])

frequency(a)
frequency(b)
frequency(c)