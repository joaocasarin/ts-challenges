export class ListNode {
    val: number;

    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (list1 == null) return list2;
    if (list2 == null) return list1;
    if (list1.val <= list2.val)
        return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
    return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
}
