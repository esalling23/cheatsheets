# Pipenv

Pipenv is a tool that combines pip and virtualenv into a single workflow. It allows you to easily manage virtual environments and dependencies for your Python projects.

## Installation (MacOS)

1. ensure you have installed `pip`
2. run `pip install pipenv`

## Usage

Each project should have it's own virtual environment created by pipenv. 

To activate the virtual environment, use the `pipenv shell` command. 
If there is an existing `Pipfile` or `Pipfile.lock` then simply run `pipenv install` to install all included dependencies.

To install new dependencies, use the `pipenv install` command followed by the package name: `pipenv install package-name`.

To deactivate the virtual environment, simply exit the shell with `exit`.

## Common Commands

| Command | Description | Usage Example | Notes |
| --- | --- | --- | --- |
| `pipenv install` | Install a package | `pipenv install numpy` | Installs the latest version of the package |
| `pipenv install --dev` | Install a package as a dev dependency | `pipenv install --dev pytest` | Installs the package for development only |
| `pipenv shell` | Activate the virtual environment | `pipenv shell` | Activates the virtual environment |
| `pipenv uninstall` | Uninstall a package | `pipenv uninstall numpy` | Removes the package from your virtual environment |
| `pipenv lock` | Generate a lockfile | `pipenv lock` | Generates a `Pipfile.lock` file with exact versions of dependencies |

Note: The `Pipfile.lock` file should be committed to version control so that other developers can reproduce the exact same environment.
