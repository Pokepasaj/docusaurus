---
id: api-config-fromJson
title: fromJson
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### In Konn, you can generate a plain object using k.config(). This function allows you to define an object with specific properties:

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local k = import 'konn/main.libsonnet';
    k.config(function(ctx, props)
    {
        type: 'test',
    })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
    type: test
    ```
  </TabItem>
</Tabs>



### Using .fromJson() for Template-Based Object Creation

Similar to [fromYaml](api-config-fromYaml)
If you prefer to generate an object from a JSON string instead, Konn provides .fromJson(), which allows you to convert JSON text into an equivalent object.


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';
    k.fromJson('{ "kind" : "ConfigMap"}')
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
    - kind: ConfigMap

    ```
    </TabItem>
</Tabs>


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js

    local k = import 'konn/main.libsonnet';
    k.lib.config.fromJson('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}',{
        name: 'nginx',
    })
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
    apiVersion: v1
    kind: Pod
    metadata:
        name: nginx
    ```
    </TabItem>
</Tabs>

:::tip Use case
Using .fromJson() is useful when you have JSON-based configurations and need to transform them dynamically while maintaining JSON format.
:::