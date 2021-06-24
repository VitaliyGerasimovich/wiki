# DHCP

RFC2131

1. DHCPDiscover (client) [Broadcast]
2. DHCPOffer (server) [Unicast/Broadcast]
3. DHCPRequest (leasetime => default:24hour) (client) [Broadcast]
4. DHCPACK (server) [Unicast/Broadcast]
5. DHCPRelay => if DHCP-server on another subnet

UPD ports:
- Client: 68
- Server: 67
