# IP utility
## General commands
- address
- addrlabel
- l2tp
- link
- maddress
- monitor
- mroute
- mrule
- neighbor
- netns
- ntable
- route
- rule
- tcpmerits
- token
- tunnel
- tuntap
- xfrm

ip address add [ip] dev [eth*]
ip route add default via [ip] dev [eth*]
ip address show
ip link set eth* [up|down]

## Bonding
modprobe bonding
ip link add bond* type bond mode 4
ip link set eth* master bond*
