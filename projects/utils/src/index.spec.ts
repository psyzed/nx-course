import { getUUID } from '.';

describe('Base tests', () => {
  test('should generate proper uuid', () => {
    expect(getUUID).toBeTruthy();
  });
});
