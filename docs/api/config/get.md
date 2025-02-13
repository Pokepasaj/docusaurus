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

Get will help you get a specific thing from inside of an existing config.

So lets say we want want to get the metadata name
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
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
    e: e.get('metadata.name', 'default'), // we use 'default' in case it doesn`t return anything
    
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    a:
    type: config
    b: {}
    c:
    props:
        bar: foo
        foo: bar
    type: config
    e: default  // it`s the default value because it doesn`t exist
    ```
    </TabItem>
</Tabs>

:::info
Okay lets introduce metadata name now and lets see the results
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
    e: e.get('metadata.name', 'default')
    
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
    e: bananas
    ```
    </TabItem>
</Tabs>