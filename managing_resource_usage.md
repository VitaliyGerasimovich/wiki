# Managing Resource Usage

## Key item for measuring
- System uptime
- CPU usage and load statistics
- Memory usage and swap statistics
- Disk I/O and load statistics
- Network I/O and load statistics
- Firewall throughput
- Router throughput
- Network bandwidth usage

## Commands
- Free => shows the amount of free/used physical and swap memory => static =>
  Memory
- htop/top => process control => dynamic => CPU Memory Process States Uptime
- iftop => traffic information + DNS => dynamic => Network
- iostat => device I/O loading => static / dynamic => CPU, Device I/O
- iotop => like top, but Device I/O => dynamic => Device I/O
- ip => network / interface static => static => Network
- iptraf => network information => dynamic => Network
- lsof => open files and network connections by process => static => Network Process map
- mpstat => multiple processor static => static / dynamic => CPU
- mtr => routing information for the URL => dynamic => Routing
- netstat => network and routing => static => Netowrk Routing
- ntop => => dynamic => Network
- pmap => shows a processes map => static => Process map
- ps => shows current process information => static => CPU Process states
- pstree => processes in tree format => static => Process map
- sar => multiple resource monitoring => static / dynamic => *
- ss => socket statistic => static => Network
- tcpdump => packet analize / sniffer => dynamic => Network
- uptime => load average, uptime, number of current users => static => Uptime
- vmstat => swap / virtual memory performance => static / dynamic => Memory
- w => current users information => static => CPU  Process states
- cacti
- collectd
- MRTG
- Nagios
- Icinga
- RRDTool
- ipcs [ -m ]

## Modules
- lsmdod
- rmmod
- insmod
- modprobe
- modinfo

## Troubleshooting the Kernel
- uname [ -a ]
- cat /proc/interrupts
- cat /proc/sys/kernel/version
- ls /usr/src/linux
- lsdev
## Help
- man -k monitor
- man -k performance
