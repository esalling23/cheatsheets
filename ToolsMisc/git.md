# Github

## Useful Flags

| Base Command | Flag | Use |
|--------------|------|-----|
| `git clone` | `--recurse-submodules` | Will also initialize & clone any included submodules |
| `git remote` | `-v` | Displays verbose information about remotes, such as full URLs |

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



