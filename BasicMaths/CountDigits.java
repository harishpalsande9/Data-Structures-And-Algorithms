package BasicMaths;

public class CountDigits {
    public static void main(String[] args) {
        // Modulus Operator (%) => he Module operator give you remainder
        // Division Operator (/) => Division Operator calculate the quotient when 7789
        // is divided by 10 which is 778.9

        System.out.println(myFunction(123));
    }

    public static int myFunction(int n) {
        int count = 0;
        while (n > 0) {
            count = count + 1;
            n = n / 10;
        }
        return count;
    }
}
