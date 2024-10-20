import { execSync } from 'child_process';
import fs from 'fs';

// Path to the directory you want to deploy (the dist directory from your build)
const BUILD_DIR = 'dist';

// Ensure the build directory exists
if (!fs.existsSync(BUILD_DIR)) {
  console.error(`Build directory "${BUILD_DIR}" does not exist. Run the build first.`);
  process.exit(1);
}

// Deploy to the gh-pages branch
try {
  // Clean up previous deployment
  execSync('rm -rf .gh-pages');
  
  // Clone the existing gh-pages branch or create a new one
  execSync('git clone --branch gh-pages git@github.com:YOUR_USERNAME/YOUR_REPOSITORY.git .gh-pages || git init .gh-pages');
  
  // Copy the built files to the gh-pages directory
  execSync(`cp -r ${BUILD_DIR}/* .gh-pages/`);

  // Change directory to the gh-pages folder
  process.chdir('.gh-pages');

  // Commit and push changes
  execSync('git add .');
  execSync('git commit -m "Deploying new version"');
  execSync('git push origin gh-pages');

  console.log('Successfully deployed to GitHub Pages.');
} catch (error) {
  console.error('Deployment failed.', error);
  process.exit(1);
}