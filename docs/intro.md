---
sidebar_position: 1
---

# Intro

## Getting Started

lets say we want to make a deployment and a service we will start by creating templates (I know this looks like HELM but bare with me it`s way more flexible)

### Deployment & SVC Template
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: %(name)s
  labels:
    name: %(name)s
spec:
  replicas: %(replicas)s
  selector:
    matchLabels:
      name: %(name)s
  template:
    metadata:
      labels:
        name: %(name)s
    spec:
      containers:
        - name: node
          image: %(image)s
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: %(ports.node)s
```

```yaml
apiVersion: v1
kind: Service
metadata:
  name: %(name)s
spec:
  ports:
    - name: http
      port: %(ports.http)s
      targetPort: %(ports.node)s
  selector:
    name: %(name)s
```

Note:
We use the python style template (fstring) you have to refer to jsonnet documents for that
replicas: %(replicas)s → it`s always important that if you are to make a string template like this that you provide something with it hence if we comment it out it will break rendering 


### Manifests
Now that we have our templates we should create our manifests which will utilize the templates
example-deployment.libsonnet and example-svc.libsonnet files have been created and their content is:


```jsonnet
example-deployment.libsonnet

local k = import 'konn/main.libsonnet'; 

k.manifest(
  props={
    replicas: 1,
    name: 'example',
    image: '750126809429.dkr.ecr.eu-central-1.amazonaws.com/flaskapp',
    
	ports: {
      node: 3000,
    },
    //
  },
    render=function(ctx, props) (
    [k.yaml(importstr './template-deploy.yaml', props + {

      "ports.node": props.ports.node,
     }),
    
     ] 
  ),
)
```

Okay starting from top to bottom we first import konn and assign it to k
Second we use the manifest function to create a new manifest object this function take ctx and props 
• props: Defines key values that will be passed into the manifest.
   
Third we user render function: it takes ctx and props
Inside the function we use k.yaml to parse our yaml file template-deploy.yaml 
The properties are then passed into out yaml template
"ports.node": props.ports.node, ensures that ports.node is properly mapped inside the template. (dot notation was causing issues so we have to add port.node like that)

Now we evaluate it using vscode → ctrl + shit + p → jsonnet: Evaluate File (YAML) → this will open a separate window with the output

This is the YAML output
```yaml
body:
  - apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        name: example
      name: example
    spec:
      replicas: 1
      selector:
        matchLabels:
          name: example
      template:
        metadata:
          labels:
            name: example
        spec:
          containers:
            - image: 750126809429.dkr.ecr.eu-central-1.amazonaws.com/flaskapp
              imagePullPolicy: IfNotPresent
              name: node
              ports:
                - containerPort: 3000
```

Next we create example-svc.libsonnet
```jsonnet
local k = import 'konn/main.libsonnet';

//
k.manifest(
  function(ctx, props) (
    [k.yaml(importstr './svc-template.yaml', props + {
      "ports.http": props.ports.http,
      "ports.node": props.ports.node,
    })]
  ),
  {

    name: 'node',
    ports: {
      http: 80,
      node: 3000,
    },
  }
)
```

We are just following the same steps here.

YAML output
```yaml
body:
  - apiVersion: v1
    kind: Service
    metadata:
      name: node
    spec:
      ports:
        - name: http
          port: 80
          targetPort: 3000
      selector:
        name: node
```


### Extending the extensions

Okay now we can call get both the svc and deployment all together in one output and edit the props or extend them in this one file
main.libsonnet


```jsonnet
local k = import 'konn/main.libsonnet';


k.feature(
    props={
        name: 'example123',
    },
    configs=[
        import 'example-deployment.libsonnet',
        import 'example-svc.libsonnet'
    ]
)
```
k.feature → The function creates a new feature instance, passing all these values.

configs → Includes both of our libsonnet files


Now when we evaluate notice that the props from main.libsonnet are prioritized  and all names both on Deployment and the SVC have been changed to example123
```yaml
body:
  - apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        name: example123
      name: example123
    spec:
      replicas: 1
      selector:
        matchLabels:
          name: example123
      template:
        metadata:
          labels:
            name: example123
        spec:
          containers:
            - image: 750126809429.dkr.ecr.eu-central-1.amazonaws.com/flaskapp
              imagePullPolicy: IfNotPresent
              name: node
              ports:
                - containerPort: 3000
  - apiVersion: v1
    kind: Service
    metadata:
      name: example123
    spec:
      ports:
        - name: http
          port: 80
          targetPort: 3000
      selector:
        name: example123
```

Lets say you don`t want main.libsonnet to edit the name of the svc and we want to keep the name in our extension example-svc.libsonnet


```jsonnet
local k = import 'konn/main.libsonnet';
local svc = import 'example-svc.libsonnet';

k.feature(
    props={
        name: 'example123',
    },
    configs=[
        import 'example-deployment.libsonnet',
       // import 'example-svc.libsonnet'  → we comment out this import unless we want service with the name example123 and the one we imported below
    ]
) +{
    svcname:svc,
}
```
Notice i imported the svc after the props are introduced and after the function is closed. 
Now every value and prop from the extension will be taken in account instead for the SVC
```yaml
body:
  - apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        name: example123
      name: example123
    spec:
      replicas: 1
      selector:
        matchLabels:
          name: example123
      template:
        metadata:
          labels:
            name: example123
        spec:
          containers:
            - image: 750126809429.dkr.ecr.eu-central-1.amazonaws.com/flaskapp
              imagePullPolicy: IfNotPresent
              name: node
              ports:
                - containerPort: 3000
svcname:
  body:
    - apiVersion: v1
      kind: Service
      metadata:
        name: node
      spec:
        ports:
          - name: http
            port: 80
            targetPort: 3000
        selector:
          name: node
```

<!-- ```bash
npm init docusaurus@latest my-website classic
```

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.


## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.


let`s say we want to make a deployment and a service we will start by creating templates (I know this looks like HELM but bare with me it`s way more flexible)
 -->






<!-- =============================================================
Let`s say you don`t want main.libsonnet to edit the name of the svc and we want to keep the name in our extension example-svc.libsonnet


```jsonnet
local k = import 'konn/main.libsonnet';
local svc = import 'example-svc.libsonnet';

k.feature(
    props={
        name: 'example123',
    },
    configs=[
        import 'example-deployment.libsonnet',
       // import 'example-svc.libsonnet'  → we comment out this import unless we want service with the name example123 and the one we imported below
    ]
) +{
    svcname:svc,
}
```
Notice i imported the svc after the props are introduced and after the function is closed. 
Now every value and prop from the extension will be taken in account instead for the SVC
```yaml
body:
  - apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        name: example123
      name: example123
    spec:
      replicas: 1
      selector:
        matchLabels:
          name: example123
      template:
        metadata:
          labels:
            name: example123
        spec:
          containers:
            - image: 750126809429.dkr.ecr.eu-central-1.amazonaws.com/flaskapp
              imagePullPolicy: IfNotPresent
              name: node
              ports:
                - containerPort: 3000
svcname:
  body:
    - apiVersion: v1
      kind: Service
      metadata:
        name: node
      spec:
        ports:
          - name: http
            port: 80
            targetPort: 3000
        selector:
          name: node
``` -->