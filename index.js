module.exports = {
    rules: {
        'pattern-task-body-match': function (parsed, _when, value) {
            const { scope = '' } = parsed;
            if (!value) {
                return [true];
            }
            if(!scope){
                return [
                    false,
                    'Not exist scope',
                ];
            }
            const regex = new RegExp(value, 'ig');
            const matched = scope.match(regex) != null;

            return [
                matched,
                'commit message doest not match with pattern : ' + value,
            ];
        },
    }
};