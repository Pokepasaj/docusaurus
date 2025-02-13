---
id: api-config-fromYaml
title: fromYaml
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Using .fromYaml() for YAML-Based Object Creation

Similar to [fromJson](api-config-fromJson), Konn provides .fromYaml() to convert YAML text into an equivalent object. This is useful when working with YAML configurations and needing to dynamically transform them into Jsonnet objects.

:::note
This approach is particularly helpful when working with Kubernetes manifests or other YAML-based configurations, allowing seamless integration into your Jsonnet workflow.
:::
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js

    local k = import 'konn/main.libsonnet';
    k.lib.config.fromYaml('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}',{
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
