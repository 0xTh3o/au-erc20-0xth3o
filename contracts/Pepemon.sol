// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Pepemon is ERC20 {
    uint256 constant _initial_supply = 169_000_000_000 * (10 ** 18);

    constructor() ERC20("Pepemon", "PPMN") {
        _mint(msg.sender, _initial_supply);
    }
}
