# UTK Database Search [![Netlify Status](https://api.netlify.com/api/v1/badges/27a2379b-6dfa-4222-8c97-a54833c54ac5/deploy-status)](https://app.netlify.com/sites/utk-lib-db/deploys)
This is an index database search tool for the University of Tennessee Knoxville Libraries.  It combines several old database search tools into a single frontend for improved simplicity and discoverability for users. 

Development for this is on-going and is only a frontend that interacts with our Solr server.  We are in process of creating a more interactive backend for maintenance of records.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Build Status](#build-status)
- [Contributors](#contributors)

## Technologies Used
1. Typescript
2. React
3. Vite
4. Solr
5. TailwindCSS
6. React Router v7


## Installation
Current this project is only a frontend requires Node 22+ and Yarn 4.6+ and interacts with our Solr server.

1. Clone the repository 
```bash
    git clone git@github.com:utkdigitalinitiatives/utk-libraries.git
```
2. Install dependencies with Yarn
```bash
    yarn install
```

## Usage
1. To run the project, use the following command:
```bash
    yarn vite
```
2. Open a broswer of your choice
```bash
    http://localhost:5173/
```

## Future Enhancements
- ⭐ In-Process - building out a backend with PHP endpoints
- Migrate to Azure
- Containerize with Docker   

## Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/27a2379b-6dfa-4222-8c97-a54833c54ac5/deploy-status)](https://app.netlify.com/sites/utk-lib-db/deploys)

## Contributors
 1. [Imtinan Uddin](https://github.com/imtinan-utk)
 2. [Aaron Albro](https://github.com/di-aaron)
 3. [David Shaw](https://github.com/dshaw11)


