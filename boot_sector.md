# boot sector

Part-1 NTLDR => 440 bytes => bootstrap
  4 bytes => Vendor ID
  2 bytes => NULL
  64 bytes => MBR
    Part-1 (16 bytes) => first partition information
    Part-2 (16 bytes) => second partition information
    Part-3 (16 bytes) => third partition information
    Part-4 (16 bytes) => fourth partition information
  2 bytes => fdisk signature (*) [active / inactive flag]
Part-2 NTLDR => 31 Kb => bootloader section
Part-3 NTLDR => OS partition
