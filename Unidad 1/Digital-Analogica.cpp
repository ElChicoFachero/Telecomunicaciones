#include <iostream>
#include <cmath>>

using namespace std;

int main(){
	const double A = 5;
	const double f = 5;
	const double PI = 3.14159;
	
	for (double t = 0; t <= 1; t+=0.01){
		double analogica = A * sin(2*PI*f*t);
		double digital = analogica >= 0 ? A: 0;
		
		cout << "Tiempo: "<< t 
		<< "\n Analogica: " << analogica 
		<< "\n Digital:" << digital << endl;
	}
	
	return 0;
}
