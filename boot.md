# Boot explanation

# BIOS
## Boot sequence

1. Power ON
2. Motherboard (SMPS/PSU)
3. CPU [IP = 0xfff0, CS selector = 0xf000, CS base = 0xffff0000 => IP + CS base
   => jump location ot BIOS]
4. POST
5. Back to BIOS
6. First Sector of HDD. Bootstrap stage-1
7. Bootloader Part-2. Stage-1.5
8. Stage-2. Part-3 of bootloader
9. Kernel

## Multiboot

- [boot_sector](boot_sector.md) [512 bytes + 31 KB (0 to 62 sectors)] => Master Boot Record
  (MBR), boot record, bootloader => volume_boot_record
- boot_configuration_data (BCD)

[##](##.md) Limitation

1. 4 primary partition
2. Cannot read the logical partition
3. Jump to the first sector HDD
4. Maximum partition size => 2.2 TB

# Boot loaders
0. Preloader (shim)
1. BCD (Microsoft)
2. LILO
3. GRUB (Legacy)
4. [GRUB_2](GRUB_2.md)
5. Systemd-boot
6. U-Boot
7. Syslinux project:
  1. SYSLINUX
  2. EXTLINUX
  3. ISOLINUX
  4. PXELINUX
  5. MEMDISK


# UEFI

## Boot sequence
1. Power on
2. UEFI starts POST
3. Back to UEFI
4. Check EFI partitions
5. Run bootloader
6. Bootloader load kernel

## Some tips
1. efibootmgr [ -v ]
2. 
