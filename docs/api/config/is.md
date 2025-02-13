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

    local a = {
    type: 'config',
    };

    local b = {
    render(ctx, props):: {
        type: 'config',
    },
    };

    local c = k.config(function(ctx, props) {
    kind: 'Namespace',  // if we replace Namespace with Service e will still return true
    type: 'config',
    props: props,
    metadata: {
        name: 'bananas',
    },
    }, {
    bar: 'foo',
    });

    local e = c.override({
    bar: 'baz',
    });

    {
    a: a, 
    b: b,
    c: c.render(props={
        foo: 'bar',
    }),
    e: e.is(['Namespace', 'Service'])
    
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    a:
    type: config
    b: {}
    c:
    kind: Namespace
    metadata:
        name: bananas
    props:
        bar: foo
        foo: bar
    type: config
    e: true
    ```
    </TabItem>
</Tabs>






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
    kind: 'Namespace',  // if we replace Namespace with Service it will still return true
    type: 'config',
    props: props,
    metadata: {
        name: 'bananas',
    },
    }, {
    bar: 'foo',
    });

    local e = c.override({
    bar: 'baz',
    });

    {
    a: a, 
    b: b,
    c: c.render(props={
        foo: 'bar',
    }),
    e: e.is(['Namespace', 'Service'], ['default', 'bananas']) // names will also takes arrays
   // if metadata/name is not default or bananas it will return false
    
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    a:
    type: config
    b: {}
    c:
    kind: Namespace
    metadata:
        name: bananas
    props:
        bar: foo
        foo: bar
    type: config
    e: true
    ```
    </TabItem>
</Tabs>