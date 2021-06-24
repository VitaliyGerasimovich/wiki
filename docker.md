# Docker

## General




## Tips

### Proxy
Via systemd.
1. mkdir -p /etc/systemd/system/docker.service.d
2. v /etc/systemd/system/docker.service.d/http-proxy.conf
3. [Service]
   Environment="HTTP_PROXY=http://proxy.example.com:80"
   Environment="HTTPS_PROXY=https://proxy.example.com:443"
   Environment="NO_PROXY=127.0.0.0/8"
4. 
