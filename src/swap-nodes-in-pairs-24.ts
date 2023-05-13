export class ListNode {
    val: number;

    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    const aux: ListNode | null = new ListNode(0, head);
    let prev: ListNode | null = aux;
    let curr: ListNode | null = head;

    while (curr && curr.next) {
        // save positions
        const nextPair: ListNode | null = curr.next.next;
        const secNode = curr.next;

        // change nodes
        curr.next = nextPair;
        secNode.next = curr;
        prev.next = secNode;

        // update curr
        prev = curr;
        curr = nextPair;
    }

    return aux.next;
}
