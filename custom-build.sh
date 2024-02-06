#!/bin/bash

# Copy modified interface.d.ts file to node_modules
cp node_modules/@angular/fire/compat/firestore/interfaces.d.ts node_modules/@angular/fire/compat/firestore/interfaces.d.ts

# Run Vercel deployment
vercel --prod
