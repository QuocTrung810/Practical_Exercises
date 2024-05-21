# TOPIC 01 - FUNDAMENTAL OF C PROGRAMMING LANGUAGE

## 1. Introduction

**C** is a general-purpose programming language created by **Dennis Ritchie** at the Bell Laboratories in **1972**[^1].

It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.

![C programming language](../asset/image/Topic_01/topic-01__C-Programming-Language.png)

C is strongly associated with UNIX, as it was developed to write the UNIX operating system.

## 2. Development Environment

In this section, we presenta a development enviroment for working with your C program. A development enviroment is a collection of procedures and tools for developing, testing and debugging an application or program.

In this course, we mainly focus on Cygwin[^2], a framework contains the number of tools which provide functionality similar to Linux distribution on Windows OS. To install Cygwin on your computer, first, you need download the setup file, which is available on the Cygwin homepage.

> Note: **You have to choose the right version of your system, either 32-bit or 64-bit.**

### 2.1 Install Cygwin and GCC

After completely download the appropriate setup file, let's begin the installation process.

From **Figure 1** to **Figure 10** show the step-by-step guild to successfully install Cygwin and GCC enviroment on your system.

**Figure 1**: Welcome screen of Cygwin installation
![Figure 1 Welcome screen of Cygwin installation](../asset/image/Topic_01/figure1_welcome_screen_of_cygwin_installation.png)

**Figure 2**: Choose the way to download the installation source
![Figure 2 Choose the way to download the installation source](../asset/image/Topic_01/figure2_choose_the_way_to_download_the_installation_source.png)

**Figure 3**: Select root install directory
![Select root install directory](../asset/image/Topic_01/figure3_select_root_install_directory.png)

**Figure 4**: Select the directory of local package
![Select the directory of local package](../asset/image/Topic_01/figure4_select_the_directory_of_local_package.png)

**Figure 5**: Select your internet connection
![Select your internet connection](../asset/image/Topic_01/figure5_select_your_internet_connection.png)

**Figure 6**: Select a download site
![Select a download site](../asset/image/Topic_01/figure6_select_a_download_site.png)

**Figure 7**: Select package
> Note: This is the most important step is in **Figure 7**, you must select the following components to work with C/C++ environment on Cygwin, by clicking "*Skip*" marker:

- **gcc-core**: C compiler sub-package.
- **gcc-g++**: C++ sub-package.
- **labgcc1**: C runtime library.
- **gdb**: The GNU Debugger.
- **make**: The GNU version of the 'make' utility.
- **libmpfr4**: A library for multiple-precision floating-point arithmetic with exact rounding.

![Select package](../asset/image/Topic_01/figure7_select_package.png)

**Figure 8**: Resolving dependencies for setup process
![Resolving dependencies for setup process](../asset/image/Topic_01/figure8_resolving_dependencies_for_setup_process.png)

**Figure 9**: Installing Cygwin and components
![Installing Cygwin and components](../asset/image/Topic_01/figure9_installing_cygwin_and_components.png)

**Figure 10**: Installation complete screen
![Installation complete screen](../asset/image/Topic_01/figure10_installation_complete_screen.png)

### 2.2 Add Cygwin to System Path

Updating ...

----
[^1]: Wikipedia, "C (programming language)", 17 May 2024. [Online]. Available: [Here](https://en.wikipedia.org/wiki/C_(programming_language)) [Accessed 21 May 2021]
[^2]: [Cygwin](https://www.cygwin.com/)
