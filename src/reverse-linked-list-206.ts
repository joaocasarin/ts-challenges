export class ListNode {
    val: number;

    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default function reverseList(head: ListNode | null): ListNode | null {
    // if (!head || !head.next) return head;

    // let prev: ListNode | null = null;
    // let curr: ListNode | null = head;
    // let next: ListNode | null = head.next;

    // while (curr) {
    //     curr.next = prev;
    //     prev = curr;
    //     curr = next;
    //     if (next) {
    //         next = next.next;
    //     }
    // }

    // return prev;

    if (!head || !head.next) return head;

    const reversed = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return reversed;
}
