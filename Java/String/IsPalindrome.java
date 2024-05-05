package Java.String;

public class IsPalindrome {
    public static boolean isPalindrome(String str) {
        // Convert the string to lowercase and remove non-alphanumeric characters
        str = str.toLowerCase().replaceAll("[^a-z0-9]", "");
        // Initialize pointers for the start and end of the string
        int start = 0;
        int end = str.length() - 1;
        // Check if the string is a palindrome
        while (start < end) {
            if (str.charAt(start) != str.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    public static void main(String[] args) {
        String testString = "A man, a plan, a canal, Panama!";
        System.out.println(isPalindrome(testString)); // Output: true
    }
}
