package weeklyTest;
import java.util.Scanner;


public class factorial { 
	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		System.out.println("enter your number");
		int i = sc.nextInt();
		int sum = 1;
		for(int j=1; j<=i; j++){
			sum = sum*j;
			
		}
		System.out.println(sum);
		
		
	}

}
