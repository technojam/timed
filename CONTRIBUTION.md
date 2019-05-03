This is a guide on how to contribute to the project, here the directory structure and the workflow is explained.

## Timed

A website to keep your events organised.

### The directory structure
The directory structure is fairly simple, the `src/` contains

#### `assets/`

contains all the images and any other media content reqired in the rendering of the project.

#### `components/`

Contains all the .tsx files as it's immidiate children and a directory named `types/` that contains all the types requied by the repective component. <br />
This directory follows the following nomenclature: <br />
1. Every file here should be a .tsx file here. <br />
2. The name of any .tsx file is same as the component is exports as default. <br />
3. In case there is no component that a file exports by default then a suitable use case based name must be given in PascalCase. <br />
4. All the types and interfaces required in a file must be imported from a file of the same name as of the file itself from `types/`. <br />


#### `styles/`


Contains all the global .css files as it's immidiate children and directories named same as the components importing them. <br />
There is no restriction on the naming of files in the subdirectories of `styles/`


#### `utils/`

This contains all the utility functions and variables required. <br />
The subdirectories are named as per use case and should contain a `types/` subdirectory just it case it needs to import any types or interfaces.

