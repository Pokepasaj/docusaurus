---
id: api-config-get
title: get
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
`get` is a helper function used to retrieve specific values from a configuration object. This is especially useful when you are dealing with context (`ctx`) and need to extract specific attributes from the configuration, such as a `metadata` field. Since the objects are not rendered immediately, `get` provides a way to safely access these values.

### Parameters
- **`path`** - (string) The path to the property you want to retrieve from the configuration (e.g., '`metadata.name`').
- **`defaultValue`** - (any) The value to return if the property is not found (e.g., '`default`').

### Return Value
The `get` function returns the value of the specified property from the configuration. If the property doesn't exist, it returns the provided `defaultValue`.

## Usage Examples
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
      output: service.get('metadata.name', 'default'),  // we use 'default' in case it doesn`t return anything
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
We introduced `metadata.name` now. Let's see the updated results.
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


<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local deployment = k.config(function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: props.name,
        namespace: props.namespace,
      },
    }, {
      name: 'my-deployment',
      namespace: 'default-namespace',
    });

    {
      name: deployment.get('metadata.name', 'example'),
      namespace: deployment.get('metadata.namespace', 'example'),
      missingField: deployment.get('spec.image', 'missing-image'),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    missingField: missing-image
    name: my-deployment
    namespace: default-namespace

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "missingField": "missing-image",
       "name": "my-deployment",
       "namespace": "default-namespace"
    }
    ```
  </TabItem>
</Tabs>