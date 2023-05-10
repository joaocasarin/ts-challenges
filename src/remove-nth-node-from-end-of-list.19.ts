export class ListNode {
    val: number;

    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default function removeNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    let result = head;

    result = new ListNode(n, head);

    return result;
}

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
