/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2)=>{
    const head = new ListNode(0);
    const node = head;
    let carry = 0;

    while(l1 || l2){

        let l1Val = l1 ? l1.val : 0;

        let l2Val = l2 ? l2.val : 0;
        
        let sum = l1Val + l2Val + carry
        let newVal = sum



        if(sum > 9){
            newVal = sum % 10
            carry = 1
        }
        node.next = new ListNode(newVal)
        node = node.next

        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    if(carry){
        node.next = new ListNode(carry)
    }
    return head.next

};

l1 = [2,4,3], l2 = [5,6,4]

addTwoNumbers(l1, l2)
