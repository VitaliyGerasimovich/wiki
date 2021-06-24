# TMUX

# General
- `prefix` => M-a
- `prefix + h/j/k/l` => motion via panes
- `prefix + C-h/j/k/l` => motion via windows
- `prefix + H/J/K/L` => resize panes
- `prefix + a` => last windows
- `prefix + o` => previous open windows
- `prefix + r` => resource .tmux.conf
- `prefix + e` => edit .tmux.conf
- `prefix + w` => menu windows/panes
- `prefix + d` => detach session
- `prefix + c` => create new window
- `prefix + C-x` => write to all panes current window
- `prefix + x` => kill current pane
- `prefix + M-s` => kill current session
- `prefix + z` => zoom in / zoom out
- `prefix + $` => rename session
- `prefix + ,` => rename window

## TPM
- `set -g @plugin '...'` => add plugin 
- `prefix + I` => install all plugins / refresh TMUX env
- `prefix + alt + u` => uninstall plugins
- `prefix + U` => updates plugins

## Ressurect
- `prefix + Ctrl-s` => save
- `prefix + Ctrl-r` => restore

## Tips
- `tmux pipe-pane -o 'cat >> ~/output.#I-#P'`
- `tmux send-keys -t (target pane) (keys)`
- `tmux show-options (option)`
- `tmux list-panes`
- `tmux list-windows`
- `tmux list-sessions`

## Window status symbols
- * => denotes the current window
- - => marks the last window
- # => window is monitored and activity has been detected
- ! => a bell has occurred in the window
- ~ => the window has been silent for the monitor-silence interval
- M => the window contains the marked pane
- Z => the window's active pane is zoomed
