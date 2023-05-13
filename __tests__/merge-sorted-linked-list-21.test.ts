import mergeTwoLists, { ListNode } from '@src/merge-sorted-linked-list-21';

describe('mergeTwoLists', () => {
    test('should return null if both lists are null', () => {
        expect(mergeTwoLists(null, null)).toBeNull();
    });

    test('should return list1 if list2 is null', () => {
        const list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
        expect(mergeTwoLists(list1, null)).toBe(list1);
    });

    test('should return list2 if list1 is null', () => {
        const list2 = new ListNode(1, new ListNode(2, new ListNode(3)));
        expect(mergeTwoLists(null, list2)).toBe(list2);
    });

    test('should return merged list if both lists are not null', () => {
        const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        const mergedList = new ListNode(
            1,
            new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(3, new ListNode(4, new ListNode(4)))
                )
            )
        );
        expect(mergeTwoLists(list1, list2)).toEqual(mergedList);
    });
});
