---
layout: default
title: Aheui
---

Why should ASCII have all the fun? :)

Puzzlet Chung

last modified: 2016-01-31

Aheui(아희) is the first esoteric programming language ever to be designed for the [Hangul](http://en.wikipedia.org/wiki/Hangul) (Hangeul) . The aim of the language is to reflect the graphical design of Hangul.

## "Aheul"

"아희"("aheui") is an archaic term for "child" or "youngster", mainly found as an idiom "아희야"("aheui-ya", coincidently mathches with "[Oh, boy!](http://en.wiktionary.org/wiki/oh_boy_") in 15th-to-18th-century Korean poetry called *[sijo](http://en.wikipedia.org/wiki/Sijo)*. IPA notation for pronunciation of "aheui" is /ɑ.hɨj/(X-SAMPA `/A.h1j/`), or /ɑ.hɰi/(`/A.hM\i/`). However, since English language has no exact equivalent sounds of /ɨ/ and /ɰ/, it is acceptable to call it "AH-hi"/ɑ.hi/.

## Structure of Hangul

Also known as "Korean alphabet", Hangul is truly an alphabetic system, in which each symbol represents separate phoneme, or sound.

    아희

Every Hangul letter has a structure, that is, a constant is juxtaposed or surrounded by a vowel. You can recognize vowel symbols easily, as they are bar-shaped, often with an attached little rod or two. All of Hangul vowel symbols are following:

    ㅏㅓㅗㅜㅡㅣ
    ㅑㅕㅛㅠㅢ

    ㅘㅚ　ㅐㅙ
    ㅝㅟ　ㅔㅞ

Aheui recognizes last eight complex vowels no more than ornamental symbols; you just can ignore them.

Lecturing on which-symbol-stands-for-which-sound is too far from the purpose of this document. However, it is notable that similar-looking symbols represent similar sound, as all consonants can be classified into five groups:

    ㄱㅋ
    ㄴㄷㅌㄹ
    ㅁㅂㅍ
    ㅅㅈㅊ
    ㅇㅎ

These consonants can also be placed under each letter, as well as on the top of the character surrounded by a vowel. The consonant on the top is called the "initial" consonant while on the bottom is the "final" consonant.

    안흼

In Aheui, functions of consonants and vowels are different each other.

## Aheui specification

WARNING: This spec is incomplete and subject to change.

Typical code of Aheui is a two-dimensional space of Hangul characters, where each character is a command. In there cursor is moving around to execute the character which is under the cursor, similar to the intruction pointer of befunge.

The vowels decide the direction of the cursor. The consonants decide instructions to process. Initial consonants are the types of instructions and final consonants are the operands of the instructions.

Aheui uses multiple storages. Most of them are stacks, but there also is a queue and a stack-like protocol for extensions.

### Code

* An Aheui code consists of only UTF-8 text.
* An Aheui code may include any character of UTF-8 though only characters in Unicode hangul syllable area will be interpreted as effective commands.
  * Unicode hangul syllables area consists of code points in hexadecimal number AC00 - D7A3.
  * Thus imcomplete characters like ㄱ, ㄷ, ㅑ, ㅓ will be ignored. For this use case, consider to combine them with consonants or vowels without effect.
  * Any other hangul syllable representation will also be ignored. (like Initial-Peak-Final)
* As mentioned above, consonants and vowels have different fuctions. While the consonant is the actual instruction, the vowel is to determine the cursor's next position. Precisely, when the cursor meets a character, it is engaged to the following process:
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

* ㅇ, as it is shaped, is the null instruction, which does nothing. The cursor will immediately move as the vowel indicates.
* ㅎ is the terminate instruction. The cursor stops at the character and terminates the execution.
  * If the current storage has at least 1 value, the program returns the value which is expected to be popped by ㅁ(pop) consonant. If the current storage is empty, the program returns 0.
  * Even if the current storage is empty, this instruction terminates the execution. The cursor does not move to the opposite direction.

Hence "아희" itself is the code, which would be a null program.

The ㄷ group: arithmatic. Final consonants will be ignored.

* ㄷ is the add instruction. The cursor pops two values from the current storage, and pushes the sum of two values.
* ㄸ is shaped double-ㄷ, hence the multiply instruction. The cursor pops two values from the current storage, and pushes the product of two values.
* ㄴ is the divide instruction. The cursor pops two values from the current storage, divide latter value by former value(latter/former), and pushes the result.
* ㅌ is the subtract instruction. The cursor pops two values from the current storage, subtract former value from latter value(latter-former), and pushes the result.
* ㄹ is the modulo instruction. The cursor pops two values from the current storage, and pushes (latter value) modulo (former value)
* A pair of popped values are same to expected values of double ㅁ(pop) instructions.

The ㅁ group: storage

* ㅁ is the pop instruction. The cursor pops a value from the current storage. Final consonanat can be applied by case.
  * If the storage is a stack, the cursor pops the top value.
  * If the storage is a queue, the cursor pops the front value.
  * If the storage is an extension protocol, ask to pop a value from the extension protocol.
  * With a final consonant ㅇ, the cursor pops a value from the current storage and prints it as an decimal integer.
  * With a final consonant ㅎ, the cursor pops a value from the current storage and prints the character corresponding the value as the Unicode codepoint.
  * The other final consonants are ignored and the cursor pops a value.
* ㅂ is the push instruction. The cursor pushes a value to the current storage. The value to push is specified by the final consonant.
  * If the storage is a stack, the storage adds the value to the top of the stack.
  * If the storage is a queue, the storage adds the value to the end of the queue.
  * If the storage is an extension protocol, ask to push the value to the extension protocol.
  * With a final consonant ㅇ, the storage receives an integer representation of string from the standard input and put the value.
  * With a final consonant ㅎ, the storage receives a UTF-8 character and put the unicode code point of the character.
  * With other final consonants, the storage receives a constant by the final consonant. See below for the constants table.
* ㅃ, double-ㅂ, is the duplicate instruction. If the current storage is a stack, the cursor copies the top value and push it. If the current storage is a queue, the cursor copies the front value and push it. (For extension protocols, send the value which sent just before.)
* ㅍ is the swap instruction. The cursor swaps two values. If the current storage is a stack, swap the top 2 values. If the current storage is a queue, swap the front 2 values.


For ㅂ instruction without ㅇ or ㅎ final consonant, the storage receive the number of line segments of the final consonant. See below:

<table>
  <tr>
  <td>ㄱ</td> <td>ㄴ</td> <td>ㄷ</td> <td>ㄹ</td> <td>ㅁ</td> <td>ㅂ</td> <td>ㅅ</td> <td>ㅈ</td> <td>ㅊ</td> <td>ㅋ</td> <td>ㅌ</td> <td>ㅍ</td>
  </tr>
  <tr>
  <td>2</td> <td>2</td> <td>3</td> <td>5</td> <td>4</td> <td>4</td> <td>2</td> <td>3</td> <td>4</td> <td>3</td> <td>4</td> <td></td>
  </tr>
</table>

In Korean language, following "consonant clusters" are also valid as placed in the final. They are also used in Aheui usefully for higher number, if you can remember which one is valid:

<table>
  <tr>
  <td>ㄲ</td> <td>ㄳ</td> <td>ㄵ</td> <td>ㄶ</td> <td>ㄺ</td> <td>ㄻ</td> <td>ㄼ</td> <td>ㄽ</td> <td>ㄾ</td> <td>ㄿ</td> <td>ㅀ</td> <td>ㅄ</td> <td>ㅆ</td>
  </tr>
  <tr>
  <td>4</td> <td>4</td> <td>5</td> <td>5</td> <td>7</td> <td>9</td> <td>9</td> <td>7</td> <td>9</td> <td>9</td> <td>8</td> <td>6</td> <td>4</td>
  </tr>
</table>

ㅂ instruction with no final consonant pushes zero. There is no way to push 1 explicitly, but it is possible by simple arithmatic, such as `반반나`(2/2), `밤받타`(4-3).

The ㅅ group: miscellaneous

* ㅅ is select instruction, where the cursor selects the storage. The final consonant specifies which storage is to be selected. (See below.)
* ㅆ is transfer commmand. The cursor pops a value from the current storage, and pushes it into the storage that the final consonant indicates.
* ㅈ is shaped like balance scales, and this is the compare instruction. The cursor pops two values from the current storage. If the latter value is grater than or equal to the former value, the cursor pushes 1, otherwise 0.
* ㅊ has many forks, so it is the decide instruction. The cursor pops a value from the current storage. If the value is non-zero, the cursor moves as is specified by the vowel. If the value is zero, the cursor moves *opposite* from the vowel's direction.


### Storages

* There are 28 storages in Aheui.
* The 3 types of storages are: stack, queue and extension protocol.
  * The extension feature is treated as a quasi-stack where you "push" the input packets and "pop" the output packets.
* There are 26 stacks, a queue and an extension protocol.
  * The stacks are selectable with a final consonant (none), ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ, ㅅ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ, ㄲ, ㄳ, ㄵ, ㄶ, ㄺ, ㄻ, ㄼ, ㄽ, ㄾ, ㄿ, ㅀ, ㅄ, or ㅆ, except for ㅇ and ㅎ.
  * The queue is selectable with a final consonant ㅇ.
  * The extension protocol is selectable with a final consonant ㅎ.
* The storage names are used for ㅅ(select) or ㅆ(transfer) instructions.
* The default storage which is selected at the very beginning of the execusion is the (none) stack.
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

