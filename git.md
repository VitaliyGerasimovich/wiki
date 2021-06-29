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
  5. parent => pointer to preview state of system / project
7. references :
  1. branches (master => default branch)
  2. tags
8. HEAD - top ponter commit
9. Branch - pointer to commit
10. ^ - in width
11. ~ - in depth

- `git-config` :
  - --local => to current projecr
  - --user => to current user
  - --global => to current system
- `git-init`
- `git-log [--oneline --graph --all] [--since="1 weeks ago"] [-p]`
- `git-status` :
  - tracked :
    - modified => after input to file
    - commited => after commit
    - staged => after add
  - untracked
- `git-add [-p]`
- `git-commit -m [-a]`
- `git-show [HEAD^1|2] [v:test/file.c]`
- `git-restore [--staged] [file]`
- `git-diff [--staged] [@[^~][12]] [master..test]`
- `git-mv` => move / rename
- `git-rm [--cached]` => remove
- `git-branch [-dD] [name of branch]`
- `git-checkout [-b] [branch]`
- `git-merge [2-nd branch] [--no-ff]`
- `git-reset [--hard] [--soft]`
- `git-push [--set-upstream origin master] [-f] [--tags]`
- `git-remote add origin [URL]`
- `git-pull [-r]` => fetch && rebase (merge)
- `git-fetch [ origin ]`
- `git-rebase [--continue]`
- `git-tag [-a] [name]`
- `git-cat-file [-p (content) | -t (type)]`
- `git-cherry-pick`
- `git-revert` => depatch
- `git-reflog`
- `git-stash`
- `git-clone`
- `git-rev-parse`
- `git-hash-object [-w] [--stdin]`
- `git-ls-tree`
- `git-update-index`
- `git-write-tree`
- `git-commit-tree`
- `git-bisect`
- `git-rev-parse`
- `git-rev-list`
- `git-format-patch`
- `gitk`
- `git-describe`
