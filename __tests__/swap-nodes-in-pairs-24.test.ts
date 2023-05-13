import swapPairs, { ListNode } from '@src/swap-nodes-in-pairs-24';

describe('swap-nodes-in-pairs-24', () => {
    test('should return [2,1,4,3] for [1,2,3,4]', () => {
        const head = new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        );
        const expected = new ListNode(
            2,
            new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))
        );

        expect(swapPairs(head)).toEqual(expected);
    });

    test('should return [2,1,4,3,5] for [1,2,3,4,5]', () => {
        const head = new ListNode(
            1,
            new ListNode(
                2,
                new ListNode(3, new ListNode(4, new ListNode(5, null)))
            )
        );
        const expected = new ListNode(
            2,
            new ListNode(
                1,
                new ListNode(4, new ListNode(3, new ListNode(5, null)))
            )
        );

        expect(swapPairs(head)).toEqual(expected);
    });

    test('should return null for null', () => {
        expect(swapPairs(null)).toEqual(null);
    });

    test('should return [1] for [1]', () => {
        const head = new ListNode(1, null);
        const expected = new ListNode(1, null);

        expect(swapPairs(head)).toEqual(expected);
    });
});
