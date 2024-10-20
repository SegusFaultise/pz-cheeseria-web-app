import { execSync } from 'child_process';
import fs from 'fs';

// Path to the directory you want to deploy (the dist directory from your build)
const BUILD_DIR = 'dist';

// Ensure the build directory exists
if (!fs.existsSync(BUILD_DIR)) {
  console.error(`Build directory "${BUILD_DIR}" does not exist. Run the build first.`);
  process.exit(1);
}

try {
  // Clean up previous deployment
  execSync('rm -rf .gh-pages');

  // Clone the repository and switch to gh-pages branch if it exists, otherwise create it
  execSync('git clone https://github.com/SegusFaultise/pz-cheeseria-web-app.git .gh-pages');
  process.chdir('.gh-pages');
  
  try {
    // Try checking out the gh-pages branch if it exists
    execSync('git checkout gh-pages');
  } catch (error) {
    // Create the gh-pages branch if it doesn't exist
    console.log('gh-pages branch does not exist. Creating a new one.', error);
    execSync('git checkout --orphan gh-pages');
  }

  // Clear old files and copy the new build
  execSync('rm -rf *');
  execSync(`cp -r ../${BUILD_DIR}/* .`);

  // Set Git config for this repository (required by the runner)
  execSync('git config user.email "wilsonzakk8@gmail.com');
  execSync('git config user.name "SegusFaultise"');

  // Commit and push changes
  execSync('git add .');
  execSync('git commit -m "Deploying new version"');
  execSync('git push origin gh-pages');

  console.log('Successfully deployed to GitHub Pages.');
} catch (error) {
  console.error('Deployment failed.', error);
  process.exit(1);
}
