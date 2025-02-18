---
id: api-config-is
title: is
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

*is* - kubernetes specific (it`s the same as [get](api-config-get) except it checks if a config a certain kind of config) 


:::tip
Works like a Boolean

Best recommendation to test either of these out is to get your hands dirty and experiment
:::

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local service = k.config(function(ctx, props) {
        kind: 'Namespace',  // if we replace Namespace with Service e will still return true
        type: 'config',
        metadata: {
        name: 'random',
    },
    });

    {
    output: service.is(['Namespace', 'Service'])
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output: true
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "output": true
    }
    ```
  </TabItem>
</Tabs>






<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local service = k.config(function(ctx, props) {
        kind: 'Namespace',  // if we replace Namespace with Service e will still return true
        type: 'config',
        metadata: {
        name: 'not default or random',
    },
    });

    {
    output: service.is(['Namespace', 'Service'], ['default', 'random'])
    }
    // names will also takes arrays
    // if metadata/name is not default or random it will return false
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output: false
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "output": false
    }
    ```
  </TabItem>
</Tabs>