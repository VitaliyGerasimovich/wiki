# systemctl [OPTIONS ...] COMMAND [NAME ...]

## Systemd unit asceding priority
1. /lib/systemd/system/
2. /run/systemd/system/
3. /etc/systemd/system/

## SysV/systemd binary searching
When the kernel finished loading, it looks for the init program in one of the
three locations:
- /sbin/init
- /etc/init
- /bin/init

## Runlevels
- 0 - shutdown
- 1,s - rescue (single mode)
- 2 - Debian => multi-user graphical
- 3 - Red-Hat => multi-user text
- 4 - Undefined
- 5 - Red-Hat => multi-user graphical
- 6 - reboot

## units

* automount
* device
* [mount](mount.md)
* path
* scope
* service
* slice
* snapshot
* socket
* swap
* target
* timer

## common commands

- systemctl list-units
- systemctl list-unit-files
 
- systemctl cat
- 
- systemctl daemon-reload
 
- systemctl restart [ stop and start ]
- systemctl reload [reload configuration file]
- systemctl disable
- systemctl enable
- systemctl isolate [ start unit and stop others ]
 
- systemctl mask
- systemctl unmask
 
- systemctl is-active
- systemctl is-enabled
- systemctl is-failed
- systemctl is-system-running
 
- systemd-delta
- systemd-cgls
 
- systemctl kill -s [ SIGNAL ] [ --kill-who=main ]
- systemd-nspawn [ --private-network ]
- systemd-analize [ blame ] [ plot ]

## Configuration files
- /etc/hostname
- /etc/vconsole.conf
- /etc/locale.conf
- /etc/modules-load.d/*.conf
- /etc/sysctl.d/*.conf
- /etc/tmpfiles.d/*.conf
- /etc/binfmt.d/*.conf
- /etc/os-release
- /etc/machine-id
- /etc/machine-info [optional]
