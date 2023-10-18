package functions;

public class star {
	public static void main(String[] args) {
		int i =8;
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
