# GRUB 2

## Commands
- grub-install [ grub2-install ]
- grub-mkconfig [ grub2-mkconfig ]
- 

## Device map
- hd0,msdos1 => hard disk number 0 / MS-DOS partition table
- hd1,msdos3 => hard disk number 2 / MS-DOS partition table
- hd2,gpt1 => hard disk number 3 / GPT partition table

## Features
1. Full USB support
2. Linux Unified Setup Key (LUKS) support
3. Some menu features
4. A "parted" tool will be added inside the bootloader

## BIOS implementation
Locations:
  Configuration files:
    1. /boot/grub2/ - where grub will be installed
    2. /etc/default/grub
    3. /etc/grub.d/

  Kernel / initframs:
    1. /boot/vmlinuz-<version>
    2. /boot/initramfs-<version>

## Own GRUB 2 commands
- menuentry => print title on the screen
- set root => provide the disk and partition names where the kernel and
  initramfsare stored
- linux => the absolute path of the Linux kernel file
- initrd => the absolute path of the initramfs file of Linux

