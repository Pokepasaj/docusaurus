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
    kind: 'Service',
    props: props,
    metadata: {
        name: 'bananas',
    },
    }, {
    bar: 'foo',
    });

    local e = c.extend(function(ctx, config, props) {
    type: 'config2',
    props: props,
    
    });

    {
    a: a, 
    b: b,
    c: c.render(props={
        foo: 'bar',
    }),
    e: e,
    }
 
    ```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    a:
    type: config
    b: {}
    c:
    kind: Service
    metadata:
        name: bananas
    props:
        bar: foo
        foo: bar
    type: config
    e:
    body:
        props:
        bar: foo
        type: config2

    ```

  </TabItem>
</Tabs>

:::tip Notice
If we comment out props on the extension → props will dissapear because extend gives you config and 
you need to actually tell it to add the config to it.

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
    kind: 'Service',
    props: props,
    metadata: {
        name: 'bananas',
    },
    }, {
    bar: 'foo',
    });

    local e = c.extend(function(ctx, config, props) {
    type: 'config2',
    //props: props,

    });

    {
    a: a, 
    b: b,
    c: c.render(props={
        foo: 'bar',
    }),
    e: e,
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">


    ```yaml
    a:
    type: config
    b: {}
    c:
    kind: Service
    metadata:
        name: bananas
    props:
        bar: foo
        foo: bar
    type: config
    e:
    body:
        type: config2
    ```
  </TabItem>
</Tabs>


:::tip Add Config
Now it has the props from `c` but it does it in such a way that any props that you pass into it  will also pass down

extending does not include the props when you do it but that is why we use [Override](api-config-override)
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
    kind: 'Service',
    props: props,
    metadata: {
        name: 'bananas',
    },
    }, {
    bar: 'foo',
    });

    local e = c.extend(function(ctx, config, props) config {
    type: 'config2',
    
    }, {
        foo: 'bar',
    });

    {
    a: a, 
    b: b,
    c: c.render(props={
        foo: 'bar',
    }),
    e: e,
    
    }
 
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">


    ```yaml
    a:
    type: config
    b: {}
    c:
    kind: Service
    metadata:
        name: bananas
    props:
        bar: foo
        foo: bar
    type: config
    e:
    body:
        kind: Service
        metadata:
        name: bananas
        props:
        foo: bar
        type: config2

    ```
  </TabItem>
</Tabs>