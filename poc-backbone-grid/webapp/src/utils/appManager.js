/*
* MPP Overlay
* Author: ashfaque.khan@walmart.com
* Description: Base Plugin for Wizard for navigation onto different views on the fly.
* Date: 07-02-2013
*/
var WizardViews = function () {

        var Node = function (view) {
			            var _next = null; //reference next node
			            var _previous = null; //reference previus node
			            var _view = view.ref; //referce current view
			            var _name = view.name;
			            return {
			                setPrevious: function (node) { _previous = node; return this; },
			                getPrevious: function () { return _previous; },
			                setNext: function (node) { _next = node; return this; },
			                getNext: function () { return _next; },
			                getView: function () { return _view; },
			                getName: function () { return _name; }
			            };
			        };

        var _head = null;
        var _tail = null;
        var _current = null;
        
        var options = {
        		first: function () { return _head; },
                last: function () { return _tail; },
                getCurrent: function () { return _current; },
                getViewByName: function(name){
                	var node = _head;
                    while (node !== null) {
                        if (node.getName() !== name) { 
                        	node = node.getNext();
                        }else { 
                        	return node;
                        }
                    }
                },
                insertView: function (view) {
                    if (_tail === null) { // list is empty (implied head is null)                    
                        _current = _tail = _head = new Node(view);
                    }
                    else {//list has nodes                    
                        _tail = _tail.setNext(new Node(view).setPrevious(_tail)).getNext();
                    }
                },
                setCurrentByName: function (name) {
                    var node = _head;
                    while (node !== null) {
                        if (node.getName() !== name) { node = node.getNext(); }
                        else { _current = node; break; }
                    }
                }	
        };
        return options;
    };