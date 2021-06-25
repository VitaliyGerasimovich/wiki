# Git

Git is a content-addressable filesystem. It means that at the core of Git is a
simple key-value data store. You can insert any kind of content into a Git
repository, for which Git will hand you back a unique key you can use later to
retieve that content.

1. Version Control System (VCS)
2. Git - decentralized version control system
3. Every commit has hash
4. blob - object [binary large object file] => contents anything file
5. tree - object => describe filesystem structure on some level filesystem
   [recursive structure can contents point to tree or blob]
6. commit - object pointer to tree object and content some information:
  1. author => creater of commit
  2. commiter => who working with this commit (can be different persons)
  3. date
  4. message
  5. parents => pointer to preview state of system / project
7. 
8. references :
  1. branches (master => default branch)
  2. tags
9. HEAD - top ponter commit
10. Branch - pointer to commit

- `git config` :
  - --local => to current projecr
  - --user => to current user
  - --global => to current system
- `git init`
- `git log`
- `git status` :
  - tracked :
    - modified => after input to file
    - commited => after commit
    - staged => after add
  - untracked
- `git add`
- `git commit -m [-a]`
- `git show`
- `git restore [--staged] [file]`
- `git diff [--staged]`
- `git mv` => move / rename
- `git rm [--cached]` => remove
- `git branch [-dD] [name of branch]`
- `git checkout [-b] [branch]`
- `git merge [2-nd branch]`
- `git reset [--hard]`
- `git push [--set-upstream origin master] [-f] [--tags]`
- `git pull`
- `git remote add origin [URL]`
- `git fetch [ origin ]`
- `git rebase`
- `git tag [-a] [name]`
- `git cat-file [-p]`
