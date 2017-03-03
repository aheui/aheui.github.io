---
layout: default
title: Aheui
---

Why should ASCII have all the fun? :)

Puzzlet Chung

last modified: 2017-02-14

Aheui (아희) is the first esoteric programming language ever to be designed for the Korean writing system, [Hangul](http://en.wikipedia.org/wiki/Hangul) (Hangeul) . The aim of the language is to reflect the graphical design of Hangul.

## "Aheul"

"아희" ("Aheui") is an archaic term for "child" or "youngster", mainly found as an idiom "아희야"("aheui-ya", coincidently mathches with "[Oh, boy!](http://en.wiktionary.org/wiki/oh_boy_") in 15th-to-18th-century Korean poetry called *[sijo](http://en.wikipedia.org/wiki/Sijo)*. IPA notation for pronunciation of "aheui" is /ɑ.hɨj/(X-SAMPA `/A.h1j/`), or /ɑ.hɰi/(`/A.hM\i/`). However, since the English language has no sounds equivalent to /ɨ/ and /ɰ/, it is acceptable to pronounce it "AH-hi"/ɑ.hi/.

## Structure of Hangul

Hangul is an alphabet based language where each character corresponds to one sound.

    아희

Every Hangul letter is made up of several parts: an initial consonant, a vowel, and an optional final consonant.

The initial consonants are:

    ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ

The vowels are:

    ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ

And the final consonants are:

    ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ

There are three consonants that cannot appear in the final position:

    ㄸㅃㅉ

Some example characters are 한, 가, and 응.

In Aheui, the following vowels have no use (although they can still be included in valid programs):

    ㅐㅒㅖㅘㅙㅚㅝㅞㅟ

Lecturing on which symbol stands for which sound is outside of the scope of this document, however, it should be noted that similar looking symbols represent similar sounds. We can classify the similar sounding (initial) consonants into the following five groups.

    ㄱㅋ
    ㄴㄷㅌㄹ
    ㅁㅂㅍ
    ㅅㅈㅊ
    ㅇㅎ

Initial consonants in Aheui correspond to an instruction, while final consonants (or a lack thereof) act as a sort of parameter for the instruction.

The vowels can also be classified into groups based on similar shape/sound:

    ㅏㅑ
    ㅓㅕ
    ㅗㅛ
    ㅜㅠ
    ㅡㅣㅢ

We will discuss the usage of each vowel later, but the basic idea is that a vowel influences the movement of the cursor in the direction of the "small bar(s)" that protrudes from the vowel. For example, the vowel ㅏ would move the cursor to the right while ㅜ would move it down. The behavior of the three vowels without such a bar (ㅡㅣㅢ) will be covered below.

## Aheui specification

WARNING: This spec is incomplete and subject to change.

Aheui is written as a two-dimensional grid of Hangul characters. A cursor is used to track the current character that is being considered. The cursor has both a position and momentum attribute that determines where in the grid it will travel next. The cursor behavior is similar to that of the esoteric language Befunge.

Aheui provides multiple storage structures for use during a program execution. There are 28 total storages, 26 stacks, 1 queue, and 1 extension protocol.

The stacks are mapped to each final consonant (including the empty one), except for ㅇ and ㅎ.
* ㅇ maps to the queue
* ㅎ maps to the extension protocol

### Code

* Aheui programs must be written in UTF-8.
* Non-Hangul characters will be treated as comments and ignored during execution.
  * Unicode Hangul syllables area consists of code points in hexadecimal number AC00 - D7A3.
  * Incomplete characters like ㄱ, ㅇ, ㅑ, and ㅟ are treated as comments.
* As mentioned above, consonants and vowels have different functions. While the consonant determines the actual instruction, the vowel is used to determine the cursor's next position and momentum. When the cursor reads a valid Hangul character, the following process is initiated:
* For every syllable, the consonants would be processed first and a cursor would be moved by the vowel. If the consonants change the direction of the cursor, the direction would be decided by the vowel first and changed just before movement.
  1. The consonants would be processed first. If the consonants change the direction of the cursor, it would be reserved.
  1. The direction of the cursor is set by the vowel.
  1. If there is any reserved change of the direction, change it.
  1. The cursor would be moved by the direction.
* Aheui is sensitive for newline characters. Line feed character (Unicode 0A or well-known as '\n') is the newline character.
  * It is recommended to ignore a leading carriage return character (Unicode 0D or well-known as '\r') of the line feed character.


* Cursor moves, according to the vowel's direction.


### Vowels: the Directions

* An Aheui code is interpreted as a 2-dimensional grid of Unicode characters by unit of each character.
* An Aheui cursor is affect by the vowel of a syllable.
* An Aheui cursor inertia. If the cursor is not affect, it keeps the direction and the velocity.
* An Aheui cursor initially moves downward by 1 character from line 1 column 1.
  * An imaginary character '우' at line 0 column 1 as a start point describes it in same way.
  * It is different to Funge which moves to the right. It has the advantage for the code to be prefixed with a `#!` line, as `#` has no function in the language.
* If an Aheui cursor arrives to any boundary of a code, it moves to the opposite side of current position.
  * The opposite side means the most far character of the opposite of current direction of the cursor. The most far character can be any character which is not a newline character.
* If the current storage does not have enough values for consonants, a cursor does not process the consonants but change the direction of the cursor.
  * Except for ㅎ(exit), any instructions with pop including ㅃ(duplicate) and ㅍ(swap) follows this behavior.

Each vowels works like below:

* Little branch(es) attached to the bar indicates the direction of the cursor.
* ㅏ, ㅓ, ㅗ, and ㅜ moves cursor by one character right, left, up, and down, respectively.
* ㅑ, ㅕ, ㅛ, and ㅠ moves cursor by two characters right, left, up, and down, respectively.
* ㅡ, ㅣ, and  ㅢ are the "reflectors". The cursor moves back to where it had come from and change the direction to the opposite way.
  * While ㅢ reflects all movement of the cursor,
  * ㅡ reflects only vertical movement of the cursor,
  * as ㅣ does horizontal movement only.
  * The movement which is not reflected moves in the direction it went, by the law of inertia.
* ㅐ, ㅔ, ㅒ, ㅖ, ㅘ, ㅙ, ㅚ, ㅝ, ㅞ and ㅟ does not have any function.

### Consonants: the Instructions

* Cursor executes the instruction, according to the initial consonant of the character. Final consonant might be used as an argument, if needed by the initial.

The ㅇ group: final consonants will be ignored.

* ㅇ is the null instruction. The cursor will immediately move as the vowel indicates.
* ㅎ is the terminate instruction. The cursor stops at the character and terminates the execution.
  * If the current storage has at least 1 value, the program returns the value which is expected to be popped by ㅁ(pop) consonant. If the current storage is empty, the program returns 0.
  * Even if the current storage is empty, this instruction terminates the execution. The cursor does not move to the opposite direction.

Hence "아희" itself is valid Aheui code, although it is a null program.

The ㄷ group:

* ㄷ is the addition instruction. The cursor pops two values from the current storage and pushes their sum.
* ㄸ is the multiplication instruction. The cursor pops two values from the current storage and pushes their product.
* ㄴ is the division instruction. The cursor pops two values from the current storage, performs integer division of the latter by the former (latter/former), and pushes the result.
* ㅌ is the subtraction instruction. The cursor pops two values from the current storage, subtracts the former from the latter value (latter-former), and pushes the result.
* ㄹ is the modulo instruction. The cursor pops two values from the current storage, calculates the latter modulo the former (latter%former), and pushes the result.

The ㅁ group:

* ㅁ is the pop instruction. The cursor pops a value from the current storage. Final consonant can be applied by case.
  * If the final consonant is ㅇ, the cursor pops a value from the current storage and prints it as an integer.
  * If the final consonant is ㅎ, the cursor pops a value from the current storage and prints the character corresponding the value in UTF-8.
  * All other final consonants have no effect.

* ㅂ is the push instruction. The cursor pushes a value to the current storage. The value to push is specified by the final consonant.
  * If the final consonant is ㅇ, an integer is received from standard input and pushed to the current storage.
  * If the final consonant is ㅎ, a UTF-8 character is received from standard input and it's corresponding integer value is pushed to the current storage.
  * For all other final consonants, the integer value corresponding to the number of strokes required to draw the consonant is pushed to the current storage. A table of these values for each consonant is provided below. No final consonant has value 0.

* ㅃ is the duplicate instruction.
  * If the current storage is a stack or a queue, the top value of the storage is pushed to the storage.
  * For the extension protocol, there is not defined behavior.

* ㅍ is the swap instruction.
  * If the current storage is a stack or a queue, swap the top two values.
  * For the extension protocol, there is not defined behavior.

The list of values mapped to each final consonant for the ㅂ command (not including ㅇ , ㅎ, or no final consonant) is provided below:

<table>
  <tr>
  <td>ㄱ</td> <td>ㄴ</td> <td>ㄷ</td> <td>ㄹ</td> <td>ㅁ</td> <td>ㅂ</td> <td>ㅅ</td> <td>ㅈ</td> <td>ㅊ</td> <td>ㅋ</td> <td>ㅌ</td> <td>ㅍ</td>
  </tr>
  <tr>
  <td>2</td> <td>2</td> <td>3</td> <td>5</td> <td>4</td> <td>4</td> <td>2</td> <td>3</td> <td>4</td> <td>3</td> <td>4</td> <td>4</td>
  </tr>
  <tr>
  <td>ㄲ</td> <td>ㄳ</td> <td>ㄵ</td> <td>ㄶ</td> <td>ㄺ</td> <td>ㄻ</td> <td>ㄼ</td> <td>ㄽ</td> <td>ㄾ</td> <td>ㄿ</td> <td>ㅀ</td> <td>ㅄ</td> <td>ㅆ</td>
  </tr>
  <tr>
  <td>4</td> <td>4</td> <td>5</td> <td>5</td> <td>7</td> <td>9</td> <td>9</td> <td>7</td> <td>9</td> <td>9</td> <td>8</td> <td>6</td> <td>4</td>
  </tr>
</table>

Note There is no way to push 1 explicitly, but it is possible by simple arithmetic, such as `반반나`(push 2, push 2, divide) or `밤받타`(push 4, push 3, subtract).

The ㅅ group:

* ㅅ is the storage selection instruction.
  * The current storage is changed to the storage mapped to by the final consonant.

* ㅆ is storage transfer instruction. The cursor pops a value from the current storage and pushes it into the storage corresponding to the final consonant.

* ㅈ is the compare instruction. The cursor pops two values from the current storage. If the latter value is grater than or equal to the former value, 1 is pushed to the current storage, otherwise 0 is pushed.

* ㅊ is the fork instruction. The cursor pops a value from the current storage. If the value is non-zero, the cursor moves as is specified by the vowel. If the value is zero, the cursor moves *opposite* from the vowel's direction.
 * For ㅡㅣㅢ, the direction is unchanged.

###Storage Errors

It may be the case that an instruction that requires some number of elements of the stack to be popped (or swapped, duplicated, etc.) without a sufficient number of elements present in the current storage.
 * In this case, nothing should be popped from the stack.
 * The momentum should switch to the reverse of the current vowel. Except in the case of reflector vowels, for which the momentum remains the same.

### Storages

* There are 28 storages in Aheui.
* The 3 types of storages are: stack, queue and extension protocol.
  * The extension feature is treated as a quasi-stack where you "push" the input packets and "pop" the output packets.
* There are 26 stacks, a queue and an extension protocol.
  * The stacks are selectable with a final consonant (none), ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ, ㅅ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ, ㄲ, ㄳ, ㄵ, ㄶ, ㄺ, ㄻ, ㄼ, ㄽ, ㄾ, ㄿ, ㅀ, ㅄ, or ㅆ, except for ㅇ and ㅎ.
  * The queue is selectable with a final consonant ㅇ.
  * The extension protocol is selectable with a final consonant ㅎ.
* The storage names are used for ㅅ(select) or ㅆ(transfer) instructions.
* The default storage which is selected at the very beginning of the execution is the stack corresponding to no final consonant.
  * Commands like "사" is useful to reselect the default stack.
* In any of the instructions involving a pop or two, including duplication, if a storage has less value than the instruction requires, the cursor doesn't execute the instruction but moves according to the opposite way of the vowel only.
* It is recommended to support at least 32-bit signed integer for storages.


## Example

This code prints "Hello, world!"

    밤밣따빠밣밟따뿌
    빠맣파빨받밤뚜뭏
    돋밬탕빠맣붏두붇
    볻뫃박발뚷투뭏붖
    뫃도뫃희멓뭏뭏붘
    뫃봌토범더벌뿌뚜
    뽑뽀멓멓더벓뻐뚠
    뽀덩벐멓뻐덕더벅

## Acknowledgement

I would like to thank Seong-hoon "Tokigun" Kang who helped me a lot working with the specification.

## Links

* https://github.com/aheui/jsaheui - interpreter written in JavaScript
* https://github.com/aheui/ - more interpreters written in various languages
