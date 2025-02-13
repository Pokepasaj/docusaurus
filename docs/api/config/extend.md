---
id: api-config-extend
title: extend
---

Let's say you made a reasonable config and you just want to use it as a template.  
In this example, you can get `c` and extend it.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>

    ```js
    local k = import 'konn/main.libsonnet';

    local a = {
      type: 'config',
    };

    local b = {
      render(ctx, props):: {
        type: 'config',
      },
    };

    local c = k.config(function(ctx, props) {
      type: 'config',
      props: props,
      metadata: {
        name: 'bananas',
      },
    }, {
      bar: 'foo',
    });

    local e = c.extend(function(ctx, config, props) config {
      type: 'config2',
      props: props,
    });

    {
      a: a,
      b: b,
      c: c.render(props={
        foo: 'bar',
      }),
      e: e
    }
    ```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    a:
      type: config
    b: {}
    c:
      metadata:
        name: bananas
      props:
        bar: foo
        foo: bar
      type: config
    e:
      body:
        metadata:
          name: bananas
        props:
          bar: foo
        type: config2
    ```

  </TabItem>
</Tabs>
