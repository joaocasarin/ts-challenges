import reverseBetween, { ListNode } from '@src/reverse-linked-list-ii-92';

describe('reverse-linked-list-ii-92', () => {
    test('should return 1->4->3->2->5 for head=1->2->3->4->5 left=2 and right=4', () => {
        const head = new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        );

        const expected = new ListNode(
            1,
            new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5))))
        );

        expect(reverseBetween(head, 2, 4)).toEqual(expected);
    });

    test('should return 5 for head=5 left=1 and right=1', () => {
        const head = new ListNode(5);
        const expected = new ListNode(5);

        expect(reverseBetween(head, 1, 1)).toEqual(expected);
    });
});
