---
id: api-config-render
title: render
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `render` function is used to generate the final configuration output by processing the provided props. It takes the configuration defined with config and outputs the rendered result in the form of a structured object (JSON or YAML).

### Parameters

- **`props`** – (object) A set of key-value pairs that are passed to the configuration function. These are used within the configuration function to generate the output.
### Return Value
The `render` function returns the rendered configuration, which includes the evaluated props along with any other defined parameters in the configuration.

## Usage Examples
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local render_test = k.config(function(ctx,props){
        type: 'config2',
        props:props
    });
    {
    render_test: render_test.render(props= {  
        foo: 'bar',
    })
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    render_test:
    props:
        foo: bar
    type: config2
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "render_test": {
        "props": {
          "foo": "bar"
        },
        "type": "config2"
      }
    }
    ```
  </TabItem>
</Tabs>



:::note
if you dont supply a ctx it will supply a ctx and if you dont supply props it will supply props that will be empty  `props: {}`
:::


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local render_test = k.config(function(ctx,props){
        type: 'config2',
        props:props
    });
    {
    render_test: render_test.render(props= {  
    //  foo: 'bar',  Now that I have commented the props see how it evaluates 
    })
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    render_test:
      props: {}
      type: config2
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "render_test": {
        "props": { },
        "type": "config2"
      }
    }
    ```
  </TabItem>
</Tabs>

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local render_example = k.config(
      function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
            labels: {
              app: props.appName,
            },
          },
          spec: {
            replicas: props.replicas,
            template: {
              metadata: {
                labels: {
                  app: props.appName,
                },
              },
              spec: {
                containers: [
                  {
                    name: 'nginx-container',
                    image: props.image,
                  },
                ],
              },
            },
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: 'flask-service',
          },
          spec: {
            ports: [
              {
                port: 80,
                targetPort: 5000,
              },
            ],
            selector: {
              app: props.appName,
            },
          },
        },
      ]
    );

    {
      render_example: render_example.render(props={
        appName: 'my-app',
        replicas: 3,
        image: 'nginx:latest',
      }),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    render_example:
      - kind: Deployment
        metadata:
          labels:
            app: my-app
          name: nginx
        spec:
          replicas: 3
          template:
            metadata:
              labels:
                app: my-app
            spec:
              containers:
                - image: nginx:latest
                  name: nginx-container
      - kind: Service
        metadata:
          name: flask-service
        spec:
          ports:
            - port: 80
              targetPort: 5000
          selector:
            app: my-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "render_example": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "my-app"
                },
                "name": "nginx"
             },
             "spec": {
                "replicas": 3,
                "template": {
                   "metadata": {
                      "labels": {
                         "app": "my-app"
                      }
                   },
                   "spec": {
                      "containers": [
                         {
                            "image": "nginx:latest",
                            "name": "nginx-container"
                         }
                      ]
                   }
                }
             }
          },
          {
             "kind": "Service",
             "metadata": {
                "name": "flask-service"
             },
             "spec": {
                "ports": [
                   {
                      "port": 80,
                      "targetPort": 5000
                   }
                ],
                "selector": {
                   "app": "my-app"
                }
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>
