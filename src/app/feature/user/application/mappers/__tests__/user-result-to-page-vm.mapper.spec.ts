import { mapUserResultToPageVm } from '../user-result-to-page-vm.mapper';

describe('mapUserResultToPageVm', () => {
  it('maps success result', () => {
    const result = {
      kind: 'success' as const,
      user: {
        id: '1',
        email: 'test@example.com',
        age: 20,
      },
    };

    const vm = mapUserResultToPageVm(result);

    expect(vm.loading).toBe(false);
    expect(vm.user?.email).toBe('test@example.com');
    expect(vm.error).toBeNull();
  });

  it('maps error result', () => {
    const result = {
        kind: 'error' as const,
        reason: { type: 'UNKNOWN' as const },
    };

    const vm = mapUserResultToPageVm(result);

    expect(vm.loading).toBe(false);
    expect(vm.user).toBeNull();
    expect(vm.error?.type).toBe('UNKNOWN');
  });
});
