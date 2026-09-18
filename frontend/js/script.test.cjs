const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

test('reinicia a partida com Enter depois da colisao', () => {
    const mario = {
        classList: { add() {}, remove() {} },
        style: {},
        src: '',
    };
    const pipe = { offsetLeft: 100, style: {} };
    const message = { classList: { add() {} } };
    let intervalCallback;
    let keydownHandler;
    let reloadCount = 0;

    const context = {
        clearInterval() {},
        document: {
            addEventListener(_event, handler) {
                keydownHandler = handler;
            },
            querySelector(selector) {
                return {
                    '.game-over-message': message,
                    '.mario': mario,
                    '.pipe': pipe,
                }[selector];
            },
        },
        setInterval(callback) {
            intervalCallback = callback;
            return 1;
        },
        setTimeout(callback) {
            callback();
        },
        window: {
            getComputedStyle() {
                return { bottom: '0px' };
            },
            location: {
                reload() {
                    reloadCount += 1;
                },
            },
        },
    };

    const script = readFileSync(join(__dirname, 'script.js'), 'utf8');
    vm.runInNewContext(script, context);

    intervalCallback();
    keydownHandler({ key: 'Enter' });

    assert.equal(reloadCount, 1);
});
