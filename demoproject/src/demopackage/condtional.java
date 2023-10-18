package demopackage;
import java.util.Scanner;
	

public class condtional {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
	 System.out.println("enter your Nationalitiy");
	      String s = sc.next();
	  
	           if (s.equals("inadian") && s.equals("Indian")) 
	           {
	              System.out.println("enter your age");
	                int i = sc.nextInt();
	                
	                  if  (i>18)
	                  {
	                      System.out.println("you are eligible");
	                  }
	                   else
	                       System.out.println("you are not eligible");
	           }
	            else
	                System.out.println("you are not an indian");  
       
	
 }
}