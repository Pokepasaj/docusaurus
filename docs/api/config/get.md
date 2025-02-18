---
id: api-config-get
title: get
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## *Why use get?*
`Get` is a helper
Whenever you are using context you cant reference objects inside of it directly because they are not rendered yet.

:::tip configs
The configs inside of an object are actual config objects.
:::

Get will help you get something specific from inside of an existing config.

So lets say we want want to get the metadata name:


We import konn, assign service the k.config function which takes ctx and props.


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet'; 
    // import konn and assign it as k


    local service = k.config(function(ctx, props) {
    kind: 'Service',
    //assign service the k.config function which takes ctx and props.
    });

    {
    output: service.get('metadata.name', 'default'), 
    // we use 'default' in case we don`t have a match just like this example
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output: default
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "output": "default"
    }
    ```
  </TabItem>
</Tabs>

:::info adding metadata name 
Okay lets introduce metadata name now and lets see the results
:::

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';


    local service = k.config(function(ctx, props) {
    kind: 'Service',
    metadata: {
        name: "my-svc",
    },
    });

    {
    output: service.get('metadata.name', 'default'), 
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output: my-svc
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "output": "my-svc"
    }

    ```
  </TabItem>
</Tabs>