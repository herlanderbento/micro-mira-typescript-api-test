#!/bin/sh

npm run cti create './src/_shared/application' -- -i '*spec.ts' -b && 
npm run cti create './src/_shared/domain' -- -i '*spec.ts' -e 'tests' -b && 
npm run cti create './src/_shared/infra' -- -i '*spec.ts' -i 'migrator-cli.ts' -b && 

npm run cti create './src/modules/mira/application' -- -i '*spec.ts' -b && 
npm run cti create './src/modules/mira/domain' -- -i '*spec.ts' -b && 
npm run cti create './src/modules/mira/infra' -- -i '*spec.ts' -b &&

npm run cti create './src/modules/career/application' -- -i '*spec.ts' -b && 
npm run cti create './src/modules/career/domain' -- -i '*spec.ts' -b && 
npm run cti create './src/modules/career/infra' -- -i '*spec.ts' -b &&

npm run cti create './src/modules/education/application' -- -i '*spec.ts' -b && 
npm run cti create './src/modules/education/domain' -- -i '*spec.ts' -b &&
npm run cti create './src/modules/education/infra' -- -i '*spec.ts' -b 
