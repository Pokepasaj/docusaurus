---
id: api-app-init
title: init
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `init` function initializes an application manifest using a specified profile, applying its default properties and merging them with the provided ones.
### Parameters 
- **`ctx`** - (object) The application context.
- **`props`** - (object) Additional properties to apply.
### Return Value
A rendered manifest object with the profile’s properties applied.
## Usage Examples

### Helm like usage

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local app = k.app([
      k.fromYaml([
        importstr './deployment.yaml',
        importstr './svc.yaml',
      ], {
        app: 'nginx123',
        svc: 'my-svc12345',
      }),
    ], {
      enabled: false,
    });
    app.init({
    })
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: nginx123
      spec:
        selector:
          matchLabels:
            app: nginx123
        template:
          metadata:
            labels:
              app: nginx123
          spec:
            containers:
              - image: nginx
    - apiVersion: v1
      kind: Service
      metadata:
        name: my-svc12345
      spec:
        ports:
          - port: 80
            protocol: TCP
            targetPort: 9376
        selector:
          app.kubernetes.io/name: MyApp
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "apiVersion": "apps/v1",
          "kind": "Deployment",
          "metadata": {
             "name": "nginx123"
          },
          "spec": {
             "selector": {
                "matchLabels": {
                   "app": "nginx123"
                }
             },
             "template": {
                "metadata": {
                   "labels": {
                      "app": "nginx123"
                   }
                },
                "spec": {
                   "containers": [
                      {
                         "image": "nginx"
                      }
                   ]
                }
             }
          }
       },
       {
          "apiVersion": "v1",
          "kind": "Service",
          "metadata": {
             "name": "my-svc12345"
          },
          "spec": {
             "ports": [
                {
                   "port": 80,
                   "protocol": "TCP",
                   "targetPort": 9376
                }
             ],
             "selector": {
                "app.kubernetes.io/name": "MyApp"
             }
          }
       }
    ]
    ```
  </TabItem>
  <TabItem value="deployment-template" label="Deployment Template">
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: "%(app)s"
    spec:
      selector:
        matchLabels:
          app: "%(app)s"
      template:
        metadata:
          labels:
            app: "%(app)s"
        spec:
          containers:
          - image: nginx
    ```
  </TabItem>
  <TabItem value="service-template" label="Service Template">
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: "%(svc)s"
    spec:
      selector:
        app.kubernetes.io/name: MyApp
      ports:
        - protocol: TCP
          port: 80
          targetPort: 9376
    ```
  </TabItem>
</Tabs>

### Optional props

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local app = k.app([
      k.fromYaml([
        importstr './deployment.yaml',
        importstr './svc.yaml',

      ], {
        app: 'nginx123',
        svc: 'my-svc12345',
      }),
      function(ctx, props) if props.enabled then (
        {
          apiVersion: 'networking.k8s.io/v1',
          kind: 'Ingress',
          metadata: {
            name: 'minimal-ingress',
            annotations: {
              'nginx.ingress.kubernetes.io/rewrite-target': '/',
            },
          },
          spec: {
            ingressClassName: 'nginx-example',
            rules: [
              {
                http: {
                  paths: [
                    {
                      path: '/testpath',
                      pathType: 'Prefix',
                      backend: {
                        service: {
                          name: 'test',
                          port: {
                            number: 80,
                          },
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        }

      ),
    ], {
      enabled: true, // setting this to false will exclude the ingress
    });

    app.init({

    })
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    - apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: nginx123
      spec:
        selector:
          matchLabels:
            app: nginx123
        template:
          metadata:
            labels:
              app: nginx123
          spec:
            containers:
              - image: nginx
    - apiVersion: v1
      kind: Service
      metadata:
        name: my-svc12345
      spec:
        ports:
          - port: 80
            protocol: TCP
            targetPort: 9376
        selector:
          app.kubernetes.io/name: MyApp
    - apiVersion: networking.k8s.io/v1
      kind: Ingress
      metadata:
        annotations:
          nginx.ingress.kubernetes.io/rewrite-target: /
        name: minimal-ingress
      spec:
        ingressClassName: nginx-example
        rules:
          - http:
              paths:
                - backend:
                    service:
                      name: test
                      port:
                        number: 80
                  path: /testpath
                  pathType: Prefix
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "apiVersion": "apps/v1",
          "kind": "Deployment",
          "metadata": {
             "name": "nginx123"
          },
          "spec": {
             "selector": {
                "matchLabels": {
                   "app": "nginx123"
                }
             },
             "template": {
                "metadata": {
                   "labels": {
                      "app": "nginx123"
                   }
                },
                "spec": {
                   "containers": [
                      {
                         "image": "nginx"
                      }
                   ]
                }
             }
          }
       },
       {
          "apiVersion": "v1",
          "kind": "Service",
          "metadata": {
             "name": "my-svc12345"
          },
          "spec": {
             "ports": [
                {
                   "port": 80,
                   "protocol": "TCP",
                   "targetPort": 9376
                }
             ],
             "selector": {
                "app.kubernetes.io/name": "MyApp"
             }
          }
       },
       {
          "apiVersion": "networking.k8s.io/v1",
          "kind": "Ingress",
          "metadata": {
             "annotations": {
                "nginx.ingress.kubernetes.io/rewrite-target": "/"
             },
             "name": "minimal-ingress"
          },
          "spec": {
             "ingressClassName": "nginx-example",
             "rules": [
                {
                   "http": {
                      "paths": [
                         {
                            "backend": {
                               "service": {
                                  "name": "test",
                                  "port": {
                                     "number": 80
                                  }
                               }
                            },
                            "path": "/testpath",
                            "pathType": "Prefix"
                         }
                      ]
                   }
                }
             ]
          }
       }
    ]
    ```  
    </TabItem>
</Tabs>


### Adding ENVs

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local extension = import '../../vendor/konn/extension.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';
    local k = import 'konn/main.libsonnet';


    // Create an extension for the deployment
    local ext = extension.new(
      function(ctx, target, props) target {
        metadata+: {
          extended: true,
          profile: ctx.profile(),
        },
      },
      // only take affect for Deployments, if you remove selector it will take affect on everything
      selector=function(ctx, target, props) target.is('Deployment'),
    );

    // Define the configuration with additional properties
    local appTest = app.new(
      props={
        app: 'nginx',
        svc: 'my-svc',
      },
      profiles={
        dev: {
          name: 'dev',
        },
        prd: {
          name: 'prd',
        },
      },
      features=[
        feature.new([
          k.fromYaml(
            [
              importstr './deployment.yaml',
              importstr './svc.yaml',
            ],
          ),
        ], extensions=[ext]), // using the profile trough ext we defined at the start
        feature.new(
          [
            [{
              kind: 'Deployment',
              metadata: {
                name: 'flask',
              },
            }],
          ],
        ),
      ],
    );

    // Init the app with a profile of your choosing
    {
      output: appTest.init(profile='prd'),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - apiVersion: apps/v1
        kind: Deployment
        metadata:
          extended: true
          name: nginx
          profile: prd
        spec:
          selector:
            matchLabels:
              app: nginx
          template:
            metadata:
              labels:
                app: nginx
            spec:
              containers:
                - image: nginx
      - apiVersion: v1
        kind: Service
        metadata:
          name: my-svc
        spec:
          ports:
            - port: 80
              protocol: TCP
              targetPort: 9376
          selector:
            app.kubernetes.io/name: MyApp
      - kind: Deployment
        metadata:
          extended: true
          name: flask
          profile: prd
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "apiVersion": "apps/v1",
             "kind": "Deployment",
             "metadata": {
                "extended": true,
                "name": "nginx",
                "profile": "prd"
             },
             "spec": {
                "selector": {
                   "matchLabels": {
                      "app": "nginx"
                   }
                },
                "template": {
                   "metadata": {
                      "labels": {
                         "app": "nginx"
                      }
                   },
                   "spec": {
                      "containers": [
                         {
                            "image": "nginx"
                         }
                      ]
                   }
                }
             }
          },
          {
             "apiVersion": "v1",
             "kind": "Service",
             "metadata": {
                "name": "my-svc"
             },
             "spec": {
                "ports": [
                   {
                      "port": 80,
                      "protocol": "TCP",
                      "targetPort": 9376
                   }
                ],
                "selector": {
                   "app.kubernetes.io/name": "MyApp"
                }
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "extended": true,
                "name": "flask",
                "profile": "prd"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>
