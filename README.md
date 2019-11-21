# Knex Undefined JSON Bindings

This repo demonstrates a bug in the knex raw SQL parser where `undefined` values inside a JSON data structure are incorrectly marked as undefined bindings.

## Usage

```
npm install
npm start
```

The following error will be produced:

```
Error: Undefined binding(s) detected for keys [] when compiling RAW query: insert into `knex_bindings_test` (`data`) values (?)
    at Raw.toSQL (/Users/code/knex-undefined-bindings-json/node_modules/knex/lib/raw.js:111:13)
    at /Users/code/knex-undefined-bindings-json/node_modules/knex/lib/runner.js:30:36
    at tryCatcher (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/util.js:16:23)
    at /Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/using.js:185:26
    at tryCatcher (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise.js:547:31)
    at Promise._settlePromise (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise.js:604:18)
    at Promise._settlePromise0 (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise.js:649:10)
    at Promise._settlePromises (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise.js:729:18)
    at Promise._fulfill (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise.js:673:18)
    at PromiseArray._resolve (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise_array.js:127:19)
    at PromiseArray._promiseFulfilled (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise_array.js:145:14)
    at Promise._settlePromise (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise.js:609:26)
    at Promise._settlePromise0 (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise.js:649:10)
    at Promise._settlePromises (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/promise.js:729:18)
    at _drainQueueStep (/Users/code/knex-undefined-bindings-json/node_modules/bluebird/js/release/async.js:93:12)
```
