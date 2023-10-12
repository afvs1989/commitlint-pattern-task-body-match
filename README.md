# plugin commitlint-pattern-task-body-match
## package.json
```
{
    "devDependencies": {
        "commitlint-pattern-task-body-match": "^1.0.0",
        "@commitlint/cli": "^17.7.2",
        "@commitlint/config-conventional": "^17.7.0",
        "husky": "^8.0.3"
    },
    "husky": {
        "hooks": {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    }
}
```
## Huski hook
```
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

## commitlint.config.js
```
const patternTask = require('commitlint-pattern-task-body-match');
module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?:\[((?:\w+(?:-\w+)*,\s*)*\w+(?:-\w+)*)\])?\s*(\w+):\s*(.+)/,
      headerCorrespondence: ['scope', 'type', 'subject'],
    },
  },
  extends: ['@commitlint/config-conventional'],
  plugins: [patternTask],
  rules: {
    'pattern-task-body-match': [2, 'always', /^(CU-[a-zA-Z0-9]+(?:,\s*CU-[a-zA-Z0-9]+)*)$/]
  }
};
```

## Usage

```
// The regular expression can change for any task manager.
pattern-task-body-match': [2, 'always', /^(CU-[a-zA-Z0-9]+(?:,\s*CU-[a-zA-Z0-9]+)*)$/]
// In this example the commit message is git commit -m "[CU-ER34] feat: add readme.md or [CU-ER34,CU-erxgsa5] feat: add readme.md"
```



