const Node = require('./node');

class LinkedList {
    constructor() {
        this._head=null;
        this._tail=null;
        this.length=0;
    }

    append(data) {
        var node = new Node(data);
        if(this.length)
            {
             this._tail.next=node;
             node.prev=this._tail;
             this._tail=node;
            }
        else{this._tail=node;
            this._head=node;   
        }
            this.length++;
        return this;
        }

    head() {
        if(this._head!=null)
        {
        return this._head.data;
        }
        return null;
    }

    tail() {
        if(this._tail!=null){
        return this._tail.data;
        }
        return null;
    }

    _at(index) {
        if(index >= 0 && index < this.length){
            var node = this._head;
            while(index--){
                node = node.next;
            }
            return node;
        }
    }

    at(index) {
        return this._at(index).data
    }

    insertAt(index, data) {
        var node = new Node(data);
        if(index == 0){
            if(this.length == 0){
                this._head = node;
                this._tail = node;
            }
            else{
                node.next = this._head;
                this._head.prev = node;
                this._head = node;
            }
        }
        else{
            var next_node = this._at(index);
            var prev_node = next_node.prev;

            node.next = next_node;
            node.prev = prev_node;

            prev_node.next = node;
            next_node.prev = node;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {
         this._head = null;
         this._tail = null;
         this.length = 0;
         return this;
    }

    deleteAt(index) { 
        if(index == this.length-1) {
            this._tail.prev = this._tail;
            this._tail.next = null;
        }
        else if(index == 0) {
            this._head = this._head.next;
            this._head.prev = null;
        }
        else{
            var current_index = this._at(index);
            var next_node = current_index.next;
            var prev_node = current_index.prev;
            prev_node.next = next_node;
            next_node.prev = prev_node;
        }
        this.length--;
        return this;
    }

    reverse() {
        if(this.length != 0) {
            var list = new LinkedList();
            var node = this._tail;
            while (node) {
                list.append(node.data);
                node = node.prev;
            }
            this._tail = list._tail;
            this._head = list._head;
        }
        return this;
    }

    indexOf(data) {
        var i = 0;
        var current_node = this._head;
        while(current_node){
            if(current_node.data == data){
                return i;
            }
            i++;
            current_node = current_node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
