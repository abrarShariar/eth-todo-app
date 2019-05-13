pragma solidity ^0.5.0;


contract ToDoList {
    // state vars
    uint public taskCount = 0;

    // struct
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    // called when intitialized
    constructor() public {
        createTask("Hack dapp");
    }

    function createTask (string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }

    function showTask (uint id) {
        return tasks[id];
    }
}