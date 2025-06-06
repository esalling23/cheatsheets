# Github

<!-- TOC -->

- [Github](#github)
  - [Useful Flags](#useful-flags)
  - [Submodules](#submodules)
  - [Working with Multiple Accounts SSH](#working-with-multiple-accounts-ssh)
  - [LFS Large File Storage](#lfs-large-file-storage)

<!-- /TOC -->

## Useful Flags

| Base Command | Flag | Use |
|--------------|------|-----|
| `git clone` | `--recurse-submodules` | Will also initialize & clone any included submodules |
| `git remote` | `-v` | Displays verbose information about remotes, such as full URLs |

## Submodules

[Helpful Guide](https://www.vogella.com/tutorials/GitSubmodules/article.html#cloning-a-repository-that-contains-submodules)

> If you want to clone a repository including its submodules you can use the `--recursive` parameter.
>
> ```
> git clone --recursive [URL to Git repo]
> ```
>
> If you already have cloned a repository and now want to load it’s submodules you have to use submodule update.
>
> ```
> git submodule update --init
> ```
> 
> if there are nested submodules:
> ```
> git submodule update --init --recursive
> ```

## Working with Multiple Accounts (SSH)

Edit `~/.ssh/config`

Example: 

```sh
Host *
  UseKeychain yes

Host github.com
  HostName github.com
  IdentityFile ~/.ssh/id_esalling23
  IdentitiesOnly yes
  
Host github-amplify
  HostName github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes

Host bitbucket.org
  HostName bitbucket.org
  IdentityFile ~/.ssh/id_workin_bitbucket
  IdentitiesOnly yes
```

Then clone/etc using `git@host-name` for ex `git@github-amplify` or `git@bitbucket.org`

Example: `git clone git@github-amplify:org-name/repo-name.git`

## LFS (Large File Storage)

[Quick Guide](https://sabicalija.github.io/git-lfs-intro/)

Basic commands
```
# Clone 

# Pull after clone
git lfs pull
```