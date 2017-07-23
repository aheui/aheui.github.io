---
layout: default
title: Aheui
---

Aheui (아희) is the first esoteric programming language ever to be designed for the Korean writing system, [Hangul](http://en.wikipedia.org/wiki/Hangul) (Hangeul) . The aim of the language is to reflect the graphical design of Hangul.

## "Aheui"

"아희" ("Aheui") is an archaic term for "child" or "youngster", mainly found as an idiom "아희야" ("aheui-ya", which is used like "[Oh, boy!](http://en.wiktionary.org/wiki/oh_boy_") in 15th-to-18th-century Korean poetry called *[sijo](http://en.wikipedia.org/wiki/Sijo)*. The IPA notation for pronunciation of "aheui" is /ɑ.hɨj/(X-SAMPA `/A.h1j/`), or /ɑ.hɰi/(`/A.hM\i/`). However, since the English language has no sound equivalent to /ɨ/ and /ɰ/, it is acceptable to pronounce it "AH-hi"/ɑ.hi/.

## Structure of a Hangul Character

Hangul is the alphabet for the Korean language. In Hangul, each character corresponds to one sound or syllable. For example, 아희 can be broken into 아 and 희, which are the syllables "Ah" and "Hi/Hui/Hee", respectively.
Every Hangul character is made up of several parts: an initial consonant, a vowel, and an optional final consonant.

The initial consonants are:

    ㄱ,ㄲ,ㄴ,ㄷ,ㄸ,ㄹ,ㅁ,ㅂ,ㅃ,ㅅ,ㅆ,ㅇ,ㅈ,ㅉ,ㅊ,ㅋ,ㅌ,ㅍ,ㅎ

The vowels are:

    ㅏ,ㅐ,ㅑ,ㅒ,ㅓ,ㅔ,ㅕ,ㅖ,ㅗ,ㅘ,ㅙ,ㅚ,ㅛ,ㅜ,ㅝ,ㅞ,ㅟ,ㅠ,ㅡ,ㅢ,ㅣ

And the final consonants are:

    ㄱ,ㄲ,ㄳ,ㄴ,ㄵ,ㄶ,ㄷ,ㄹ,ㄺ,ㄻ,ㄼ,ㄽ,ㄾ,ㄿ,ㅀ,ㅁ,ㅂ,ㅄ,ㅅ,ㅆ,ㅇ,ㅈ,ㅊ,ㅋ,ㅌ,ㅍ,ㅎ

There are three consonants that cannot appear in the final position:

    ㄸ,ㅃ,ㅉ

Some example characters are 한, 가, and 응.

The character "한" is made up by:

    ㅎ + ㅏ + ㄴ

where ㅎ is the initial consonant, ㅏ  is the vowel, and ㄴ is the final consonant.

On the other hand, 가 is formed by:

    ㄱ + ㅏ

where ㄱ is the initial consonant, ㅏ is the vowel, and no final consonant is used.

In Aheui, the following vowels have no use (although they can still be included in valid programs):

    ㅐ,ㅒ,ㅖ,ㅘ,ㅙ,ㅚ,ㅝ,ㅞ,ㅟ

Lecturing on which symbol stands for which sound is outside of the scope of this document, however, it should be noted that similar looking symbols represent similar sounds. We can classify the similar sounding (initial) consonants into the following five groups:

    ㄱ,ㄲ,ㅋ
    ㄷ,ㄸ,ㅌ,ㄴ,ㄹ
    ㅁ,ㅂ,ㅃ,ㅍ
    ㅅ,ㅆ,ㅈ,ㅉ,ㅊ
    ㅇ,ㅎ

The vowels (that have a function in Aheui) can also be classified into groups based on similar shape/sound:

    ㅏ,ㅑ
    ㅓ,ㅕ
    ㅗ,ㅛ
    ㅜ,ㅠ
    ㅡ,ㅣ,ㅢ

These groups may come in handy as a mnemonic since similar sounding consonants or vowels often have similar functionality.

## Aheui specification

###### WARNING: The reference specification is incomplete and subject to change.

Aheui is written as a two-dimensional grid of Hangul characters. A cursor is used to track the current character that is being considered. The cursor has both a position and momentum that is used to determine where in the grid it will travel next. The cursor behavior is similar to that of the esoteric language Befunge.


### Basics

* Aheui programs must be written in UTF-8.
* Non-Hangul characters and spaces are treated as comments and ignored during execution.
  * Unicode Hangul syllables area consists of code points in hexadecimal number AC00 - D7A3.
  * Incomplete characters like ㄱ, ㅇ, ㅑ, or ㅟ are treated as comments.
  * Comments and blank spaces are simply passed over when encountered, and no instruction or momentum change is performed. However, they still count as a cell in the Aheui program grid.
* Consonants and vowels have different functions. While the consonants specify the actual instruction, the vowel is used to determine the cursor's updated momentum.
* When processing a character, the consonants are processed before the vowel. In the case that the consonants cause a momentum change (detailed in the next section), the change is applied before the vowel updates the momentum. Below is a more formal specification for the aforementioned case:
  1. Process the consonants. Update the momentum if required by the consonants.
  1. Set the momentum of the cursor based on the current momentum and the vowel.
  1. Move the cursor based on the current momentum.

### Consonants: Instructions and Parameters

When reading a character, the initial consonant specifies the action to be performed. If the action takes in some parameter, the final consonant (or lack thereof) is used as the value for the parameter. The functionality of the consonants can be broken down into the following groups.

The ㅇ group:

* ㅇ is the null instruction. The momentum is immediately updated by the vowel and the cursor moves in that direction without performing any other action.
* ㅎ is the terminate instruction. The cursor stops at the character and the program terminates.
  * If the current storage is non-empty, the program pops from the storage and returns the result. If the current storage is empty, the program returns 0.

Hence "아희" itself is a valid Aheui program, although it is basically a null program.

The ㄷ group:

* ㄷ is the addition instruction. The cursor pops two values from the current storage and pushes their sum.
* ㄸ is the multiplication instruction. The cursor pops two values from the current storage and pushes their product.
* ㄴ is the division instruction. The cursor pops two values from the current storage, performs integer division of the second popped element by the first popped element (second//first), and pushes the result.
* ㅌ is the subtraction instruction. The cursor pops two values from the current storage, subtracts the first popped element from the second popped element (second-first), and pushes the result.
* ㄹ is the modulo instruction. The cursor pops two values from the current storage, calculates the second popped element modulo the first popped element (second%first), and pushes the result.
* In the case that there are an insufficient number of elements in the current storage, no action is performed on the storage and the momentum is reversed before consulting the vowel and updating the position.
* All instructions in this group ignore the final consonant.
* Note that we always pop and push from the storage, not pop and replace. So if the storage is the queue, we could pop from the front and push to the back.

The ㅁ group:

* ㅁ is the pop instruction. The cursor pops a value from the current storage. The final consonants have the following effects:
  * If the final consonant is ㅇ, the cursor pops a value from the current storage and prints it as an integer.
  * If the final consonant is ㅎ, the cursor pops a value from the current storage and prints the character corresponding the value in UTF-8.
  * All other final consonants (including the empty case) have no effect.
* ㅂ is the push instruction. The cursor pushes a value to the current storage. The value to push is specified by the final consonant:
  * If the final consonant is ㅇ, an integer is received from standard input and pushed to the current storage.
  * If the final consonant is ㅎ, a UTF-8 character is received from standard input and it's corresponding integer value is pushed to the current storage.
  * For all other final consonants, the integer value corresponding to the number of strokes required to draw the consonant is pushed to the current storage. A table of these values for each consonant is provided below. The empty final consonant has value 0.
* ㅃ is the duplicate instruction.
  * If the current storage is a stack or a queue, the value returned by the peek is pushed to the storage.
  * For the extension protocol, there is no defined behavior.
* ㅍ is the swap instruction.
  * If the current storage is a stack or a queue, swap the top two values.
  * For the extension protocol, there is no defined behavior.
* The ㅃ and ㅍ commands ignore the final consonant.
* As before, in the case that there are an insufficient number of elements in the current storage, no action is performed on the storage and the momentum is reversed before consulting the vowel and updating the position.

The integer value of each final consonant (excluding ㅇ,ㅎ, and no final consonant) is given by the following table:

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

Note: There is no way to push 1 explicitly, but it is possible by simple arithmetic, such as `반반나` (push 2, push 2, divide) or `밤받타` (push 4, push 3, subtract).

The ㅅ group:
* ㅅ is the storage selection instruction.
  * The current storage is changed to the storage mapped to by the final consonant.
* ㅆ is storage transfer instruction.
  * The current storage is popped and the returned value is pushed into the storage mapped to by the final consonant.
* ㅈ is the compare instruction.
  * Two values are popped from the current storage. If the latter value is grater than or equal to the former value, a 1 is pushed to the current storage, otherwise a 0 is pushed.
* ㅊ is the fork instruction.
  * A value is popped from the current storage. If the value is non-zero, the cursor moves as is specified by the vowel. If the value is zero, the current momentum is reversed before the vowel is consulted.
* Again, in the case that there are an insufficient number of elements in the current storage, no action is performed on the storage and the momentum is reversed before consulting the vowel and updating the position.


 ### Vowels: Momentum
 * Aheui code is considered a 2-dimensional grid that wraps around.
 * The momen of the  cursor is affected by the vowel of a syllable and possibly by the initial consonant.
 * An Aheui cursor initially has momentum (1, 0), meaning it is moving down in the grid. It's initial position is [0, 0], which is the top left of the grid.
   * The actual specification is that we start at an imaginary cell one space "above" the top left that is populated with a 우 character.
 * If an Aheui cursor arrives to any boundary of a code, it wraps around to the other side of the grid but maintains the same momentum.
   * The opposite side means the most far character of the opposite of current direction of the cursor. The most far character can be any character which is not a newline character.
 * If the current storage does not have enough values for consonants, a cursor does not process the consonants but change the direction of the cursor.
   * Except for ㅎ(exit), any instructions with pop including ㅃ(duplicate) and ㅍ(swap) follows this behavior.

 Each vowels works like below:

 * Little branch(es) attached to the bar indicates the direction of the cursor.
 * ㅏ, ㅓ, ㅗ, and ㅜ moves cursor by one character right, left, up, or down, respectively.
 * ㅑ, ㅕ, ㅛ, and ㅠ moves cursor by two characters right, left, up, or down, respectively.
 * ㅡ, ㅣ, and  ㅢ are "reflectors".
   * ㅡ reflects only vertical momentum.
   * ㅣ reflects only horizontal momentum.
   * ㅢ reflects both vertical and horizontal momentum.
     * Note that it is not possible to have both vertical and horizontal momentum simultaneously be non-zero, so while ㅢ can reflect both, it will only reflect either horizontally or vertically at any given time, depending on the current momentum.
 * The vowels ㅐ, ㅔ, ㅒ, ㅖ, ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, and ㅟ leave the momentum unchanged.

As an example, consider the case that we have current momentum (1,0), meaning we are going down through the grid. Hitting a character with vowel 'ㅣ' will leave the momentum unchanged. However, if we encounter a ㅡ or ㅢ vowel, our momentum is changed to (-1,0), assuming that the momentum is not altered due to the initial consonant.


### Storage Structures

* There are 28 selectable storage structures in Aheui: 26 stacks, 1 queue, and 1 extension protocol.
  * The stacks are mapped to the final consonants: none, ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ, ㅅ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ, ㄲ, ㄳ, ㄵ, ㄶ, ㄺ, ㄻ, ㄼ, ㄽ, ㄾ, ㄿ, ㅀ, ㅄ, or ㅆ.
  * The queue is mapped to ㅇ.
  * The extension protocol is mapped to ㅎ.
* The storage names are used as parameters  for the ㅅ (select) or ㅆ (transfer) instructions.
* The the initial storage is the stack corresponding to the empty final consonant
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

Thanks to Puzzlet Chung for coming up with the language.

## Links

* https://github.com/aheui/jsaheui - interpreter written in JavaScript
* https://github.com/aheui/ - more interpreters written in various languages
