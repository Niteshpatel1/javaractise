package inheritanace;

public class inherit {
//	Create a class with a method that prints "This is parent class" and its subclass with another method that prints "This is child class". Now, create an object for each of the class and call
//	1 - method of parent class by object of parent class
//	2 - method of child class by object of child class
//	3 - method of parent class by object of child class

}
class Parent{
	
	void display() {
		System.out.println("this is a parent class");
	}
}
class child extends Parent{
	
	void show() {
		System.out.println(" this is a child class");
	}
	
}
class test{
	public static void main(String[] args) {
		Parent p = new Parent();
		child c = new child();
		
		p.display();
	
		c.show();
		c.display();
		
	}
}
