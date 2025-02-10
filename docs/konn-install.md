---
id: konn-install
title: Installation
---

### There will be a github link to konn here somewhere


## Prerequisites

1. Create .vscode folder in your base directory and create the following files → settings.json → exetensions.json
2. populate them as follows
• settings.json

```
{
  "jsonnet.languageServer.jpath": [
    "./",
    "./lib",
    "./vendor",
  ],
  "jsonnet.languageServer.resolvePathsWithTanka": true,
  "cSpell.words": [
    "multisite"
  ]
}
```

• exetensions.json
```
 {
  "recommendations": [
    "grafana.vscode-jsonnet"
  ]
}
```

3. Go to extension in vscode and install Jsonnet Language Server

Make sure you have a vendor folder in your base directory if you don`t create one and have konn inside of it (this can be change but keep in mind you need to change settings.json for your lib location)


### Examples
