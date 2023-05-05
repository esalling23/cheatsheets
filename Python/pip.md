# Pip

Pip is a package installer for Python. It allows you to install and manage Python packages and their dependencies.

## Installation

You can install pip using the following steps:

1. Run this script to get a file called `get-pip.py`: `curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py`
2. Then execute that file: `python3 get-pip.py`

## Common Commands

| Command | Description | Usage Example | Notes |
| --- | --- | --- | --- |
| `pip install` | Install a package | `pip install numpy` | Installs the latest version of the package |
| `pip install <package>==<version>` | Install a specific version of a package | `pip install numpy==1.16.4` | Specify the version number after the package name |
| `pip install --upgrade` | Upgrade a package to the latest version | `pip install --upgrade numpy` | Upgrades to the latest version of the package |
| `pip uninstall` | Uninstall a package | `pip uninstall numpy` | Removes the package from your system |
