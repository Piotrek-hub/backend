pragma solidity^0.8.0;

contract Service {
    event UserCreated(address addr, string name);

    mapping(address => string) public users;

    function createUser(string memory username) public {
        require(bytes(users[msg.sender]).length == 0, "User already exists");

        users[msg.sender] = username;

        emit UserCreated(msg.sender, username);
    }
}