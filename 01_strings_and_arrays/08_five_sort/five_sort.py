def five_sort(nums):
    # Approach = Two Pointers
    # Pointer 1 initialized to the index of the array start
    # Pointer 2 initialized to the index of the array end
    # *Loop over the array backwards with pointer 2 until a non-five is found
    # **Set Pointer 2 variable to current location
    # **Loop over the array forwards with pointer 1 until a five is found
    # **If five is found swap pointer 2 with pointer 1
    # **If pointer 2 <= pointer 1 return
    # Return nums

    start = 0
    end = len(nums) - 1

    while start <= end:
        if nums[end] == 5:
            end -= 1
        elif nums[start] != 5:
            start += 1
        else:
            nums[start], nums[end] = nums[end], nums[start]

    return nums


print(five_sort([12, 5, 1, 5, 12, 7])) # -> [12, 7, 1, 12, 5, 5] 
print(five_sort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])) # -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
print(five_sort([5, 5, 5, 1, 1, 1, 4])) # -> [4, 1, 1, 1, 5, 5, 5] 
print(five_sort([5, 5, 6, 5, 5, 5, 5])) # -> [6, 5, 5, 5, 5, 5, 5] 
print(five_sort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])) # -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 