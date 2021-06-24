# Ansible

## Options
- `-f [number]` => number of forks
- `-i [inventory]` => inventory file (can be changed in default config)
- `-a [command]` => ad-hoc command
- `-b [--ask-become-pass]` => become root

## Modules
- `setup` => all information
- `yum -a "name=package state=[some state]"` => yum module. | state - present
- `service "name=service state=[some state]"` => SysV, systemd.. module. |
  state - started

## Files
- `/etc/ansible/ansible.cfg`

## Tips
1. Group can be placed anywhere.
2. `ansible-doc [name of doc]` !!!

## Inventory
Text file that contains a list of servers or nodes that you are managing and
configuring. Usually, the servers are listed based on their hostnames or IP
addresses.

They can be listed according to groups.

`[servers]`
`10.10.10.10`
`20.20.20.20`

## Playbook
Set of configuration management scripts that define how tasks are to be executed
on remote hosts or a group of host machines. The scripts or instructions are
written in YAML format.

`---`
`- name: some name`
`  hosts: servers`

`  tasks:`
  `- name: name task`
  `  module: parametr=value`

## Play
Script or an instruction that defines the ask to be carried out on a server.

## Variables
Can include letters, numerals, and underscores, but must always begin with
letters. 3 types:
- Playbook variables
- Inventory variables
- Special variables

`vars:`
`Var name1: 'value'`

## Facts
Ssytem properties gathered by Ansible when it executes a playbook on a host
system.

## My commands
- `ansible -i [inventory] [group] -b -m yum "name=chrony state=present"`
- `ansible -i [inventory] [group] -a "free -m"` 
- `ansible -i [inventory] [group] -a "df -h"` 
- `ansible -i [inventory] [group] -a "date"` 
- `ansible -i [inventory] [group] -a "command" --limit "ip"`  => limit group
- `ansible -i [inventory] [group] -m async_status -a "jid=jobid"`  => check status job

  some IP | "192.168.1.1" , "*.1"
