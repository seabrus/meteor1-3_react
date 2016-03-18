set -e

BUNDLE_DIR=/tmp/bundle-dir

npm i
meteor build --directory $BUNDLE_DIR --server=http://localhost:3000

cd $BUNDLE_DIR/bundle/programs/server/
npm i

mv $BUNDLE_DIR/bundle /built_app
