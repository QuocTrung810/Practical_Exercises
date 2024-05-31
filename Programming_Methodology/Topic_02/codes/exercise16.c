#include<stdio.h>
#include<math.h>

int main(){

    // Write a C program to print all Armstrong numbers between \
    1 to n by using three loop structures. Validating the input, \
    in case the input isn't correct, prompt user to enter it again

    int n, temp_number, num_of_digits, armstrong_number, last_digit;

    printf("Entering the number: ");
    scanf("%d", &n);

    // The loop from 1 to n
    for(int i = 1; i <= n; i++){
        temp_number = i;
        num_of_digits = 0;
        armstrong_number = 0;
        // Counting the number of digits of the number
        while (temp_number != 0){
            num_of_digits++;
            temp_number /= 10;
        }  

        // Calculating the sum of cubes of its digits
        temp_number = i;
        while (temp_number != 0){
            last_digit = temp_number % 10;
            armstrong_number += pow(last_digit, num_of_digits);
            temp_number /= 10;
        }
        
        // Checking the number whether is Armstrong number or not
        if(armstrong_number == i) printf("%d, ", i);
        else continue;
    }

    return 0;
}