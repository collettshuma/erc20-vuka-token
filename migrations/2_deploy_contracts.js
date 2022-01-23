var MyContract = artifacts.require("./VukaToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MyContract,1000000);
};