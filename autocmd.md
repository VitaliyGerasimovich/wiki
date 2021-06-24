# Autocmd

:help autocmd-events
:autocmd [Event] [pattern] [command]
:augroup * / END
:autocmd! => clear group

Events:
1. BufNewFile
2. BufWritePre
3. BufRead
4. FileType

Pattern:
1. * => no filter

Command:
1. ex command => :something

