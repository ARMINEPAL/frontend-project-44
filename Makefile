install:
	npm ci

brain-games: 
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

even-games:
	node bin/brain-even.js

calc-games:
	node bin/brain-calc.js

gcd-games:
	node bin/brain-gcd.js

prime-games:
	node bin/brain-prime.js

progression-games:
	node bin/brain-progression.js