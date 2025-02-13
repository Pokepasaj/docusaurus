---
id: api-config-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`new` serves as a base object template for rendering configurations dynamically

It takes the current props for the entire render the manifest and metadata.

Hence why when you, if you look at the code and you make a new one, it's the current props for the entire render,, the manifest and some metadata

<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local k = import 'konn/main.libsonnet';

    k.lib.config.new(function(ctx,props){

        apiVersion: 'v1',
        kind: 'Service',
        metadata: {
        name: "default",
        }
        }

    )
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
    apiVersion: v1
    kind: Service
    metadata:
      name: default

    ```
     </TabItem>
</Tabs>