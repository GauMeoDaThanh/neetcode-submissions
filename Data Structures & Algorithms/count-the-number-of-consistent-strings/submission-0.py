class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        allowed_set = set(allowed)
        total_words = 0
        for word in words:
            total_letter_allowed = 0
            for letter in word:
                if letter in allowed_set:
                    total_letter_allowed +=1
            if total_letter_allowed == len(word):
                total_words += 1
        return total_words
