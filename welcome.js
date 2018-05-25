/*
In this tutorial we will discuss
1. Java History : Birth and Evolution
2. Java Popularity : Tiobe Score
3. Java Installation

What is programming language
A programming language defines the way to communicate with computer. It is used to make a computer perform a series of tasks based on the instructions you give it. 
Some Programming languages are low level while others are high level.
There are various genre of programming languages. Some are procedural, others are object oriented or functional.

What is Java
Java can be considered as both - programming language & platform.
Java programming language is a high-level object-oriented language & has a particular syntax and style. For example : Java 6, Java 7, Java 8, Java 9 etc. are various versions of Java language 
Java platform is a particular environment in which Java programming language applications run. For example : Java SE, Java ME, Java EE, Java FX are all Java platformsWhen was Java born
James Gosling initiated the Java language in 1991. He was modifying C++ initially to make it suitable for set top box, but then ended up creating Java and Java Compiler
Java was simpler and platform independent initiative alternative of C++
The language was initially called Oak, but later Sun’s marketing department named Java
Sun Microsystems released its first public implementation of Java 1.0 in 1995
Latest version is Java 8 update 121 as of today
Who takes care of Java evolution
Oracle Corporation is current owner of official implementation of Java language
Oracle is working on Java 9 as of now, tentatively to be released in July 2017
Open JDK is another notable Java implementation licensed under GNU GPL
Java language is key pillar of Android, an open source mobile operating system
For Java popularity and Tiobe Score please check the following URL
https://www.tiobe.com/tiobe-index

Java Installation
Search 'Oracle Java Downloads' on Google
First link takes you to Oracle Java SE Downloads
http://www.oracle.com/technetwork/java/javase/downloads/index.html
Download JDK + JRE based on your OS
Set Path Variable on Windows
Set PATH to include JDK and JRE binary location
Control Panel > System > Advanced Settings > Environment Variables > Path
Add C:\Program Files\Java\jdk1.8.0_121\bin to the list
Add C:\Program Files\Java\jre1.8.0_121\bin to the list
Set JAVA_HOME on Windows
Control Panel > System > Advanced Settings > Environment Variables 
Add user specific variable JAVA_HOME = C:\Program Files\Java\jdk1.8.0_121
On Mac
Set PATH to include JDK and JRE binary location
Set JAVA_HOME
*/
$ vim .bash_profile
    export JAVA_HOME=$(/usr/libexec/java_home)
$ source .bash_profile 
