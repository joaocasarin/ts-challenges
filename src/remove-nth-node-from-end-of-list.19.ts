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
    if (head === null) {
        return null;
    }
    let amount = 0;
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr) {
        curr = curr.next;
        amount++;
    }

    amount -= n;
    curr = head;

    while (amount > 0) {
        prev = curr;
        curr = curr!.next;
        amount--;
    }

    if (curr === head) {
        head = head.next || null;
    } else if (!curr?.next) {
        prev!.next = null;
    } else {
        prev!.next = curr.next;
    }

    return head;
}
