import reverseList, { ListNode } from '@src/reverse-linked-list-206';

describe('reverse-linked-list-206', () => {
    it('should return null when head is null', () => {
        expect(reverseList(null)).toBeNull();
    });

    it('should return head when head.next is null', () => {
        const head = new ListNode(1);
        expect(reverseList(head)).toBe(head);
    });

    it('should return 5->4->3->2->1', () => {
        const head = new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        );
        const reversed = reverseList(head);
        expect(reversed!.val).toBe(5);
        expect(reversed!.next!.val).toBe(4);
        expect(reversed!.next!.next!.val).toBe(3);
        expect(reversed!.next!.next!.next!.val).toBe(2);
        expect(reversed!.next!.next!.next!.next!.val).toBe(1);
    });

    it('should return 3->2->1', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3)));
        const reversed = reverseList(head);
        expect(reversed!.val).toBe(3);
        expect(reversed!.next!.val).toBe(2);
        expect(reversed!.next!.next!.val).toBe(1);
    });
});
