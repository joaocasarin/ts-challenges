export class ListNode {
    val: number;

    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let res = false;
    const arr: number[] = [];

    let curr: ListNode | null = head;

    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }

    const reverse = arr.slice().reverse();

    res = arr.every((val, i) => val === reverse[i]);

    return res;
}
