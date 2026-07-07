# snare-fixture-buggy-app

A deliberately buggy fixture app used to test [Snare](https://github.com/ayaan-gupta/snare)'s
automated bug-fixing pipeline end to end against a real, running application.

`GET /sum?nums=1,2,3,4` should return `{"sum": 10}` but returns `{"sum": 6}` —
`lib/sum.js` has an off-by-one loop bound that drops the last element.
`test/sum.test.js` fails because of it.

Do not fix the bug directly on this repo by hand — it exists on purpose so
Snare's agent harness has something real to find and fix.
