class Solution:
    def minOperations(self, logs: List[str]) -> int:
        current_dir = 0
        for log in logs:
            if re.match(r"\w+", log):
                current_dir += 1
            elif log == "../" and current_dir > 0:
                current_dir -= 1
        return current_dir
            