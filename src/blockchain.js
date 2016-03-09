// blockchain definition

var u = require('bitcoin-util')

// definition of the genesis block's header
var genesisHeader = {
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b'),
  timestamp: 1231006505,
  bits: 0x1d00ffff,
  nonce: 2083236893
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    height: 360864,
    header: {
      version: 3,
      prevHash: u.toHash('00000000000000000d92953224570f521b09553194da1ca3c4b31a09a238f4f6'),
      merkleRoot: u.toHash('37f752dccde0e359ce5b028fed86a4e2f937e2d3091d99f795096198cbf5c67c'),
      timestamp: 1434257763,
      bits: 0x18162043,
      nonce: 1801335478
    }
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}
