def most_frequent_char(s):
    count = {}
    highest_char = ''
    char_count = 0

    for char in s:
        if char not in count:
            count[char] = 1
        else:
            count[char] += 1
        
    for char in count:
        if count[char] > char_count:
            char_count = count[char]
            highest_char = char

    return highest_char


print(most_frequent_char('bookeeper')) # -> 'e'