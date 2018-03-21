import {Dto} from '../index.js';

test('dto', () => {
    const dto = new Dto({
        k1: 'v1'
    });

    dto.load({
        k2: 'v2',
        k3: 'v3'
    });

    dto.load({
        k3: 'vv3',
        k4: 'v4'
    });

    expect(dto.get('k1')).toBe('v1');
    expect(dto.get('k2')).toBe('v2');
    expect(dto.get('k3')).toBe('vv3');
    expect(dto.get('k4')).toBe('v4');
});
