package weeklyTest;
import java. util.Scanner;
public class palildrome {
	public static void main(String[] args) {
		
	
	Scanner sc = new Scanner(System.in);
	System.out.println("Enter your number");
	 int i = sc.nextInt();
	 
	    int t1 = i;
	   int r = 0;
	   int sum = 0;
		  
		 while(t1>0) {
			  r = t1%10;
			  sum= (sum*10)+r;
			  t1=t1/10;
		 }
		 
		 if(sum==i) {
			 System.out.println("It  is a  palindrome number");
		 }
		 else 
			 System.out.println("it is not a palindroem  number ");
		   
			   
	
	
	}	

}
