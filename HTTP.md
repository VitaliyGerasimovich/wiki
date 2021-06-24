# HTTP

## NGINX

### Important files and directory
- Config dir                        => /etc/nginx/
- Master/Global config file         => /etc/nginx/nginx.conf
- Default TCP ports opened by Nginx => 80 (HTTP), 443 (HTTPS)
- Document root directory           => /srv/www/htdocs/
- Virtual host domain config dir    => /etc/nginx/vhosts.d/

Can upload html/css/js and images to /srv/www/htdocs/.
Or copy from local desktop to the remote server using the rsync command or sftp:
`rsync -avP ~/projects/static/your-domain/* root@192.168.2.133:/srv/www/htdocs/`

### Configuration files
- /usr/local/nginx/conf
- /etc/nginx
- /usr/local/etc/nginx

### Directives
- Simple directives :
  - name and parameters sepated by spaces
  - ends with a semicolon (;)
- Block directives :
  - end with a set of additional instructions surrounded by braces ( { and } ). [if a block directive can have other directives inside braces, it is called a context (examples: `events`, `http`, `server`, and `location`)]

Directives placed in the configuration file outside of any contexts are considered to be in the `main` context.
### http
http {
  server {
  }
}

Generally, the configuration file may include several server blocks distinguished by ports on which they listen to and by server names. Once nginx decides which server processes a request, it tests the URI specified in the request’s header against the parameters of the location directives defined inside the server block. 

### location
Location / {
  root /data/www;
}
This location block specifies the "/" prefix compared with the URI from the request. For matching requests, the URI will be added to the path specified in the `root` directive, that is, to /data/www, to form the path to the requested file on the local file system. If there are several matching `location` blocks nginx selects the one with the longest prefix. The `location` block above provides the shortest prefix, of length one, and so only if all other `location` blocks fail to provide a match, this block will be used.

Location /images/ {
  root /data;
}
It will be a match for requests starting with /images/ (location / also matchis such requests, but has shorter prefix)

###
