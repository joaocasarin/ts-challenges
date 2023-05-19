export class ListNode {
    val: number;

    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number
): ListNode | null {
    if (!head || !head.next || left === right) return head;

    let count = 1;
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    // Traverse to the left position
    while (count < left) {
        prev = curr;
        curr = curr!.next;
        count++;
    }

    // Save the nodes before and after the reversed portion
    const beforeReverse = prev;
    const reversedTail = curr;

    // Reverse the nodes between left and right positions
    while (count <= right) {
        const next = curr!.next;
        curr!.next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    // Connect the reversed portion with the rest of the list
    if (beforeReverse) {
        beforeReverse.next = prev;
    } else {
        head = prev;
    }

    reversedTail!.next = curr;

    return head;
}
