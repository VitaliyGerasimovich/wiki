# Some tips for Vim

- :%! xxd [-r] => rewrite file to hex
- :options => runtime vim options
- g<C-a> / g<C-x> => increment/decrement numeric value
- :mkerc => create rc from current session (default: ".exrc")
- :mkvimrc => create rc from current session (same as :mkerc, but default:
  ".nvimrc")
- :mksession => store current files, windows, ettc. to be able to continue this
  session later
- :h Q_ex => Ex characters
- :set suffixadd
- :h path
- :vimgrep
- :set iskeyword
- "_  => black hole
- "0 => yank register
- "" => last delete/yank ...
- <C-r>=[var]
- substitute()
- ignorecase => \c (ignore) \C (no)
- :h new-regex-engine / two-engines
- /\v => super-magic
- /\V => non-magic
- /\m
- /\M
- i_CTRL_O => one-shot
- mapclear[!] => clear maps Normal and Visual / Insert and Cmdline
- zf => define fold
- :{range}fold => define fold for {range}
- zd => delete one fold under cursor
- zD => delete all fold under cursor
- zo/zc => open/close one fold under cursor
- zO/zC => open/close all fold under cursor
- zm/zr => decrease/increase foldlevel by one
- zM/zR => decrease/increase foldlevel to max
- :h autocmd-event
