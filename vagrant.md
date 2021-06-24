# Vagrant

## Common commands

- vagrant box => manages boxes: installation, remocal, etc.
- vagrant destroy => stops and deletes all traces of the vagrant machine
- vagrant halt => stops the vagrant machine
- vagrant help => shows the help for a subcommand
- vagrant init => initializes a new Vagrant environment by
  creating Vagrantfile
- vagrant package => packages a running vagrant environment into a box
- vagrant plugin => manages plugin
- vagrant provision => provisions the vagrant machine
- vagrant reload =>  restarts vagrant machine, loads new Vagrantfile configuration
- vagrant resume => resume a suspended vagrant machine
- vagrant ssh => conenects to machine via SSH
- vagrant ssh-config => ouputs OpenSSH valid configurationto connect to the
  machine
- vagrant status => outputs status of the vagrant machine
- vagrant suspend => suspends the machine
- vagrant up => starts and provisions the vagrant environment


## Vagrantfile
- `config.vm.box` => box from Vagrantbox
- `config.vm.provision` => vm provision (i.e. Ansible)
- 
