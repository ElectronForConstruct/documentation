---
title: Installation
description: ''
position: 1
---

yarn:
```sh
yarn global add @cyn/cli
```

## Démarrage
Prérequis:
- Vos fichiers
- Un fichier de configuration .cynrc.yml

Exemple de fichier de configuration:

```yml
# Theses are the plugins that cyn will load
plugins:
  - '@cyn/plugin-tauri'

# This is your input folder
input: ./src

# These are the cyn commands
commands:

  # `cyn build`
  build:
    description: Package an app with tauri
    steps:
      - name: tauri/setup
        config: {}

      - name: tauri/package
        config: {}

  # `cyn dev`
  dev:
    # Want some logs ?
    debug: false
    description: Preview an app with tauri
    steps:
      # These are all the steps that the command will use
      # They come from plugins
      # Each plugin task can also have multiple internal tasks
      - name: tauri/setup
        config:
          build:
            distDir: ../
            devPath: http://127.0.0.1:8080
            # devPath: https://google.com/
            # devPath: https://preview.construct.net/#vqqutipu
          tauri:
            window:
              title: "My App"
            embeddedServer:
              active: true
            bundle:
              identifier: 'xyz.armaldio.tauri-test'
            allowlist:
              all: true

      - name: tauri/dev
        config: {}
```

## Utilisation du module
Une fois que tout est prêt dans votre fichier de configuration, vous pouvez executer `cyn <commandName>`  
Pour une liste complete des arguments et des fonctionnalités supportées, executez `cyn -h`
