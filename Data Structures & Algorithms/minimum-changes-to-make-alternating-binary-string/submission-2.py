class Solution:
    def minOperations(self, s: str) -> int:
        result = 0
        for i in range(1, len(s), 2):
            if s[i] == s[0]:
                result += 1
        return result