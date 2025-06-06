# C++


## Syntax

### Preprocessor Directive

> context of certain lines of code that are prepended by a hash `#`. These lines are used by a separate part of the compiler w/ the task of pre-reading the text of the program & making modifications on it before the reset of the compilation.

```c++
#include <iostream>
```

The above would also be known as a **header file**, which contains a collection of preliminary information about ready-made blocks which can be used by a program to perform tasks like handling input & output.

We don't know where these files live - that's not our problem! The preprocessor knows where to find them without us.

## Namespaces

```c++
using namespace std;
```

Without the namespace, to access namespace contents you can do `namespacename::entity` ex: `std::cout`.

## Functions

```c++
int main()
{
  return 0;
}
```

> Every function in C++ begins with the following set of information:
- what is the result of the function?
- what is the name of the function?
- how many arguments does the function accept and what are their names?
> This set of information is sometimes called a prototype, and it’s like a label affixed to a function announcing how you can use that function in your program.

`int` refers to the return type of the function. Use `void` for no return.

In **older versions of c++** you may see `int main(void) {}` to indicate a function does not accept any arguments.

### `main`

`main` is special - it's the entry of your program, and while it must be declared with `int` as its return type, it doesn't require a `return` statement. If none exists, it will assume a `return 0` is implied.

## Variables

- the name of the variable must be composed of upper-case or lower-case Latin letters, digits and the character _ (underscore);
- the name of the variable must begin with a letter;
- the underline character is a letter (strange but true);

You can declare multiple variables in a single statement. 

```c++
int variable_1, account_balance, invoices;
```

## Operators

### Digraphs

Fancy word that refers to "directed graph". 

```c++
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << "You entered: " << num << endl;
    return 0;
}
```

## Numbers

### Octal Values

If an integer is prepended by `0` it will be treated as an octal value. 

Octal values only contain the digits 0-7. 

Each octal digit represents a power of 8, starting from the rightmost digit. The rightmost digit represents the value of 8^0 (which is 1), the second rightmost digit represents the value of 8^1 (which is 8), the third rightmost digit represents the value of 8^2 (which is 64), and so on.

Examples: 

- The octal number 12 is equivalent to the decimal number (1 × 8^1) + (2 × 8^0) = 8 + 2 = 10 in decimal notation.
- The octal number 57 is equivalent to the decimal number (5 × 8^1) + (7 × 8^0) = 40 + 7 = 47 in decimal notation.
- The octal number 177 is equivalent to the decimal number (1 × 8^2) + (7 × 8^1) + (7 × 8^0) = 64 + 46 + 7 = 127 in decimal notation.

```
018 => (1 x 8^1) + (8 x 8^0) = 1 x 8 + 8 x 1 = 16
010 => (1 x 8^1) + (0 x 8^0) = 1 x 8 + 0 x 1 = 8
```

### Hexadecimal Values

Uses the prefix `0x` or `0X`

### Binary Numbers

Prefixed with `0b` or `0B`

### Exponent

You can write `3E8` to represent `3^8` aka `3` to the `8`th power

## Strings & Characters

`string`s are multi-digit values wrapped in quotes, whereas a `char` is a single digit like `'a'`

### ASCII

> We can create virtually any number of assignments, but a world in which each computer type uses different character encoding would be extremely inconvenient. This has created a need to introduce a universal and widely accepted standard implemented by (almost) all computers and operating systems all over the world. ASCII (which is a short for American Standard Code for Information Interchange and is usually probounced as "ASS-kee") is the most widely used system in the world, and it’s safe to assume that nearly all modern devices (like computers, printers, mobile phones, tablets, etc.) use this code. The code provides space for 256 different characters, but we’re only interested in the first 128. If you want to see how the code is constructed, go to the table on the right.

### Escape characters

The C++ language allows us to escape in other circumstances too. Let's start with those that denote literals representing white spaces.

`\n` – denotes a transition to a new line and is sometimes called an LF (Line Feed), as printers react to this character by pulling out the paper by one line of text.

`\r` – denotes the return to the beginning of the line and is sometimes called a CR (Carriage Return – “carriage” was the synonym of a “print head” in the typewriter era); printers respond to this character as if they are told to re-start printing from the left margin of the already printed line.

`\a` – (as in alarm) - is a relic of the past when teletypes were often used to communicate with computers (do you know what a teletype is, are you old enough to remember them?); sending this character to a teletype turns on its ringer; hence, the character is officially called BEL (as in bell); interestingly, if you try to send the character to the screen, you’ll hear a sound – it won't be a real ringing but rather a short beep. The power of tradition works even in the IT world.

`\0` (note: the character after the backslash is a zero, not the letter O): called nul (from the Latin word nullus – none) is a character that does not represent any character

## Streams

Streams are used to handle input & output in a program. 

```c++
cout << "Sheep counted so far: " << herd_size;
```

Prints to the screen what is to the right of the `<<` operator. Can combine multiple `<<` operators.

### Manipulators

Manipulators are entities that changes data format in the middle of a stream. 

For example, the manipulator `hex` will switch the stream to hexadecimal mode. 

```c++
cout << "Byte in hex: " << hex << byte;
```

#### setbase

You can also use the `setbase` method which accepts one of the following integer values, each of which corresponds to a basefield. 

10 → dec
16 → hex
 8 → oct

```c++
#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
	int byte = 255;
	cout << setbase(16) << byte;
}
```

#### bools

Note that bools will be read as integers - 0 for false and 1 for true.

## Types

### Conversions

`static_cast<newtype>(expr)`

changes the type of the expr expression into the newtype type.

ex `static_cast<char>(integer)`


### Modifiers

Modifiers are reserved keywords that can be combined with certain data types to modify their bit range. Most commonly used with numbers.

`long` – is used to declare that we need a wider range of ints than the standard one;
`short` – is used to determine that we need a narrower range of ints than the standard one;
`unsigned` – used to declare that a variable will be used only for non-negative numbers

Examples:
```c++
short int counter;
// or, the same thing:
short counter;
```

> there are some cases when the compiler recognizes literals of type long. This will happen if:

- a literal value goes beyond the acceptable range of type int;
- letter L or l is appended to the literal, such as `0L` or `1981l` – both of these literals are of type long.