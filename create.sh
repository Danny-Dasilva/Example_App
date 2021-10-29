TEST_VAR=`node -p "require('./package.json').version"`
npm version patch
git commit -am v$TEST_VAR
git tag v$TEST_VAR
git push && git push --tags