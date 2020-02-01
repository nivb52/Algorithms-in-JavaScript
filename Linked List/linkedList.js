// linked list
// =============
// used in basic langs such as c and Java
// for : array you don't know the size and
// cases will not need to get specipic index often
// for example: user inbox
// :::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::
module.exports = { linkedList };

// each item (node) in the list is:
function createNode(value) {
  return {
    value,
    next: null
  };
}
// The Linked List :
function linkedList() {
  const _deepClone = node => {
    return JSON.parse(JSON.stringify(node));
  };

  return {
    tail: null,
    head: null,
    length: 0,
    // methods:
    getLength() {
      return this.length;
    },
    push(value) {
      const node = createNode(value);
      // if we have head we have tail
      // (even if they are the same node)
      // so we set last node to point this new node
      if (this.head !== null) this.tail.next = node;
      // if no head, this is 1st item:
      else this.head = node;
      this.length++;
      this.tail = node;

      return node;
    },
    pop() {
      // nodes === 0
      if (this.isEmpty()) return null;
      // nodes === 1 case :
      if (this.length === 1) {
        const node = _deepClone(this.head.value);
        console.log("pop node: ", node);
        this.tail = null;
        this.head = null;
        this.length = 0;
        return node;
      }
      // nodes > 1 case :
      else {
        const node = _deepClone(this.tail.value);
        let beforeLast;
        let current = this.head;
        while (current) {
          if (current.next === this.tail) {
            beforeLast = current;
            break;
          }
          current = current.next;
        }
        beforeLast.next = null;
        this.tail = beforeLast;
        if (this.length === 1) this.tail = this.head;
        this.length--;
        // & poped value :
        return node;
      }
    },
    get(idx) {
      // invailde
      if (idx < 0 || idx > this.length) return null;
      // valide :
      // ------
      // simple cases:
      if (idx === 0) return this.head;
      if (idx === this.length - 1) return this.tail;

      // search case:
      let i = 0;
      let current = this.head;
      while (i < idx) {
        i++;
        current = current.next;
      }

      return current;
    },
    delete(idx) {
      // invailde
      if (idx < 0 || idx > this.length) return null;
      // valide :

      if (idx === 0) {
        let deleted = _deepClone(this.head);
        this.head = this.head.next;
        this.length--;
        return deleted.value;
      }
      //else : idx > 0
      let current = this.head;
      let prev = null;
      let i = 0;
      while (i < idx) {
        i++;
        prev = current;
        current = current.next;
      }
      const deleted = _deepClone(current);
      prev.next = current.next || null; // meaning: prev.next.next
      // case idx is the tail:
      if (prev.next === null) this.tail = prev;
      this.length--;
      return deleted.value;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      const list = [];
      let current = this.head;

      while (current) {
        list.push(current.value);
        current = current.next;
      }
      return list.join(" => ");
    }
  };
}

