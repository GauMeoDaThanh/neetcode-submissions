class Solution:
    def minOperations(self, s: str) -> int:
        operations = 0
        for i, ch in enumerate(s):
            expected = '0' if i % 2 == 0 else '1'
            if ch != expected:
                operations += 1
        return min(operations, len(s) - operations)
        