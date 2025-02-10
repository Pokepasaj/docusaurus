---
id: app
title: app
---
   This module handles application configurations, allowing for the creation and rendering of configurations through multiple stages.

• new → creates a new manifest with specified features, properties, profiles, and extensions. Filter & map allow further customization for the configurations rendering

• render → resolves and renders the configuration trough extensions and filters

• init → initilizes the configuration with profile-specific properties, merging them with the global ones

• resolve → resolves configurations from sources like features, extensions & individual config objects filtering out null values

• feature → Extracts and processes feature configurations, filtering out null values.

• extensions → Applies extensions to configurations and includes additional extensions from features.

• extend → Creates a new extended manifest by adding new properties, profiles, and configurations.

• filter  → Returns a new manifest with an additional filter function applied. 

• map → Returns a new manifest with a mapping function applied to transform configurations.

• find → Searches the manifest and returns the first configuration that matches the given condition.

• get → Retrieves a configuration by a specific path in its body.

• kget → Retrieves a configuration by its kind and metadata.name fields.


### Examples