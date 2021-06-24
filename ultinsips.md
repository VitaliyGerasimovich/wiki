# Ultisnips

Snippet trigger character ["code snippet description" [parameter]]
Code snippet content
endsnippet

Examples:

Snippet al "allert(...)"
alert(${1:1024})$0
endsnippet

Snippet cl "console.log(...)"
console.log(${1:1024})$0
endsnippet

snippet if "if (...)"
if (${1:true}) {
  ${VISUAL}
}

snippet today
Today is 'date'
endsnippet

snippet indent
Indent is: '!v indent(".")'
endsnippet


## Parameters of code snippets
- b -> indicates that the trigger character should start on a line
- i -> indicates that the trigger character can be used within words (this
  option is used for continuous presentation)
- w -> indicates that the trigger character must be an alphabetical demarcation
  point before and after the trigger character)
- r -> indicates that the trigger character can be a regular expression
- t -> if there are tabs in the expanded snippet, output as is, even if you
  have expandtab in your vimrc
- m -> represents all the blank characters to the right of the deleted snippet
- e -> represents a custom context
- A -> represents automatic triggering without pressing tab, similar to abbr in
  VIM
