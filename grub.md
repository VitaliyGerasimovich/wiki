# Grub

## General commands
- `grub2-once`
- `grub2-set-default`
- `grub2-reboot`
- `grub2-editenv list`

## Files
- /boot/grub2/grub.cfg => grub2-mkconfig -o /boot/grub2/grub.cfg
- /boot/grub2/custom.cfg => sources by grub.cfg
- /etc/default/grub
- /etc/grub.d/
- /etc/sysconfig/bootloader
- /boot/grub2/x86_64-efi

## Grub commands
- `menuentry` => print the tittle on-screen
- `set root` => provide the disk and pertition names where the kernel and initramfs are stored
- `linux` => absolute path of the Linux kernel file
- `initrd` => absolute path of the initramfs file of Linux


## Booting process
### Bios-based
1. Powern on a system: first BIOS, them POST, THEN bios, and then the first sector.
2. First is the bootstrap (part-1 of GRUB), then part-2 of GRUB, and then part-3 of GRUB.
3. Part-3 of GRUB will read the previously shown grub.cfg from /boot/grub2/ and will print the welcome screen.
4. The moment the user chooses the some OS menuentry, it will run the set root, linux, and initrd commands and will start loading the kernel and initramfs in memory.
5. In Fedora-like Linux distributions, you will wind a different approach. There will be a grub.cfg file, but the menuentry, set root, linux, and initrd commands will not be available in grub.cfg. There has been a new developmentin a GRUB upstream project called BLS. We will cover that later in this chapter.

1. BIOS -> POST ->BIOS
2. Part-1 of GRUB -> part-2 of GRUB -> part-3 of GRUB
3. Part-3 of GRUB -> read grub.cfg
4. Part-3 of GRUB -> reads /boot/loader/entries/*
5. Prints all the file titles that are present in /boot/loader/entries

## Other
- GRUB_THEME="/usr/share/grub/themes/vimix/theme.txt"
