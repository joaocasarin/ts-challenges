import removeNthFromEnd, {
    ListNode
} from '@src/remove-nth-node-from-end-of-list.19';

describe('Remove Nth Node From End of List', () => {
    test('should return [1,2,3,5] when given [1,2,3,4,5] and n=2', () => {
        const head = new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        );
        const n = 2;
        const expected = new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(5)))
        );

        expect(removeNthFromEnd(head, n)).toEqual(expected);
    });

    test('should return [1] when given [1] and n=1', () => {
        const head = new ListNode(1);
        const n = 1;
        const expected = null;

        expect(removeNthFromEnd(head, n)).toEqual(expected);
    });

    test('should return [1,2] when given [1,2] and n=1', () => {
        const head = new ListNode(1, new ListNode(2));
        const n = 1;
        const expected = new ListNode(1);

        expect(removeNthFromEnd(head, n)).toEqual(expected);
    });

    test('should return [2] when given [1,2] and n=2', () => {
        const head = new ListNode(1, new ListNode(2));
        const n = 2;
        const expected = new ListNode(2);

        expect(removeNthFromEnd(head, n)).toEqual(expected);
    });
});
