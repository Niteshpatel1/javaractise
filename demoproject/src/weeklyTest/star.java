package weeklyTest;
import java.util.Scanner;

public class star {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("enter lenth of base triangel");
		int i = sc.nextInt();
		for(int j=1; j<=i;j++) {
			
			for(int a= 1; a<=j; a++) {
				System.out.print(" ");
			}
			for(int k=1; k<=i-j;k++) {
				System.out.print(" *");
			}
			System.out.println();
		}
	}

}
