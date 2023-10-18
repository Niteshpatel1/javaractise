package weeklyTest;
import java.util.Scanner;

public class fibonacci {

	 public static void main (String[]args)
	   {
		 Scanner sc = new Scanner(System.in);
		 System.out.println("Enter a  number ");

	     int num = sc.nextInt();
	     int a = 0, b = 1;

	       System.out.print (a + " , " + b + " , ");

	     int j=0;

	     for (int i = 2; i < num; i++)
	       {
	       j = a + b;
	        a = b;
	          b = j;
	          System.out.print (j + " , ");
	       }


	   
	 }

}
