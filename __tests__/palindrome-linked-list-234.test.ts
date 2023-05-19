import isPalindrome, { ListNode } from '@src/palindrome-linked-list-234';

describe('isPalindrome', () => {
    it('should return true for [1, 2, 2, 1]', () => {
        const head = new ListNode(
            1,
            new ListNode(2, new ListNode(2, new ListNode(1)))
        );

        expect(isPalindrome(head)).toBe(true);
    });

    it('should return false for [1, 2]', () => {
        const head = new ListNode(1, new ListNode(2));

        expect(isPalindrome(head)).toBe(false);
    });
});
