# Shell (ZSH)

## Configuration
### Startup files
1. **/etc/zshenv**
2. **~/.zshenv**
3. **/etc/zprofile**
4. **~/.zprofile**
5. **/etc/zshrc**
6. **~/.zshrc**
7. **~/.zlogin**
8. **~/.zlogout**
9. **/etc/zlogout**

### Options
- ` setopt (set -o) => list options`
- ` setopt localoptions [option]`
- ` login`
- ` norcs (NO_RCS, zsh -f)`
- ` nobgnice`
- ` sharehistory`
- ` extendedhistory`
- ` noclobber => ">|" | ">!" => can't overwrite file with ">"`
- ` zle`

### Bang-history
- ` print foo bar`
- ` print open closed`
- ` print !-2:1 !:2`
- ` command !!:s/old/new`

#### History files
- `HISTSIZ=[N]`
- `SAVEHIST=[N]`
- `HISTFILE=[file]`

### Environment
- `ZDOTDIR`


## Types shell mode
- **interactive / non-interactive**
- **login / nologin**

## Commands
- `typeset [type var] :`
  - `array [ -a ] => array=(first second ...) :`
    - `array:0:1 => from first => one element`
    - `array[@]`
    - `#array[N]`
    - `array[@]//old/new`
  - `associative array [ -A ] => array=()`
- `hash => rehash`
- `set / unset`
- `function / unfunction`
- `print [ -z ]`
- `echo`
- `pushd / popd => dirs`
- `whence -wm '*'  [ grep reserved ]`
- `which`
- `whatis`
- `((  )) => let`
- `read`
- `shift [array] => array[2,-1]`
- `kill`
- `limit / ulimit`
- `log => watch=all/notme`
- `getopts`
- `bindkey '[key]' [widget] => -M [mode]`
- `zmodload`
- `diff =() =()`
- `stty [ erase '^h' ]`

### Command substitution
- `$()`
- `backquotes`
- `$(<file)`
- `$((  ))`

### Arguments

Expression on line | word splitting | ( two words ) | 'one word' | empty sting
---------|--------------|---------|------|------
$*       |      n       |     2   |  1   |  0
$@       |      n       |     2   |  1   |  0
"$*"     |      n       |     1   |  1   |  1
"$@"     |      n       |     2   |  1   |  1
         |              |         |      |     
$*       |      y       |     2   |  2   |  0
$@       |      y       |     2   |  2   |  0
"$*"     |      y       |     1   |  1   |  1
"$@"     |      y       |     2   |  1   |  1
         |              |         |      |     
${=*}    |      n       |     2   |  2   |  0
${=@}    |      n       |     2   |  2   |  0
"${=*}"  |      n       |     2   |  2   |  1
"${=@}"  |      n       |     2   |  2   |  1

### Types
- builtin commands (builtins)
- commands
- functions

### Conditions
- `[[ $foo = '' ]]`
- `[[ -z $foo ]]`
- `[[ $number -gt 3 ]]`
- `(( $number > 3 ))`
- `[[ file1 -nt file2 ]]`
- `true && something`
- `false || something`
- `case $var in; (*) something ;;`

### Loops
- `while * do; done;`
- `repeat [N] do; something; done;`
- `for ((  ))`

### Subshell
- `(command1; command2; ...)`

**The following are run in the current shell.**

   - All shell builtins and anything which looks like one, such as a precommand modifier and tests with `[['.
   - All complex statements and loops such as if and while. Tests and code inside the block must both be considered separately.
   - All shell functions.
   - All files run by 'source' or '.' as well as startup files.
   - The code inside a `{...}'.
   - The right hand side of a pipeline: this is guaranteed in zsh, but don't rely on it for other shells.
   - All forms of substitution except '...', $(...), =(...), <(...) and >(...). 

**The following are run in a subshell.**

   - All external commands.
   - Anything on the left of a pipe, i.e. all sections of a pipeline but the last.
   - The code inside a `(...)'.
   - Substitutions involving execution of code, i.e. '...', $(...), =(...), <(...) and >(...). (TCL fans note that this is different from the `[...]' command substitution in that language.)
   - Anything started in the background with `&' at the end.
   - Anything which has ever been suspended. This is a little subtle: suppose
   - you execute a set of commands in the current shell and suspend it with \Z. Since the shell needs to return you to the prompt, it forks a subshell to remember the commands it was executing when you interrupted it. If you use fg or bg to restart, the commands will stay in the subshell. This is a special feature of zsh; most shells won't let you interrupt anything in the current shell like that, though you can still abort it with ^C. 

### Running
- **foreground**
- **background**

### Flags / Subscript
- `"${(@)array}"`
- `"${(@)array[N,-N | +N]}"`
- `"${array[@][N,-N | +N]}"`
- `"${(f)command}"`
- `"${(#)array}"`
 
### Example
- `setopt / unsetopt [set -o]`
- `printenv`
- `set`

### Tips
- `foo=something`
- `foo=('first' 'second' ...)`
- `man zshparam`
- `man zshzle`
- `[[ -f ~/.aliasrc ]] && . ~/.aliasrc` 
- `WORDCHARS=${WORDCHARS//[&.;]}`
- `print ${array[(r)${(l.${#${(O@)array//?/X}[1]}..?.)}]}`

## File desctiptors
- `0 => input`
- `1 => output => >&2`
- `2 => error 2>&1 => |&`
- `2<&-`
- `<< => here-doc`
- `<<< => here-string`
- `3-9 => can use this descriptors`
