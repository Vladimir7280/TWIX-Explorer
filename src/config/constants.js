import {
	TransactionType,
	MosaicSupplyChangeAction,
	NamespaceRegistrationType,
	AliasAction,
	LinkAction,
	AccountType,
	AccountKeyTypeFlags,
	LockHashAlgorithm,
	NetworkType,
	MetadataType,
	ReceiptType,
	ResolutionType,
	AddressRestrictionFlag,
	MosaicRestrictionFlag,
	OperationRestrictionFlag,
	MosaicRestrictionEntryType,
	MosaicRestrictionType,
	LockStatus,
	BlockType
} from 'twix-sdk';

class Constants {
	static PageSize = 25

	static Message = {
		UNLIMITED: 'UNLIMITED',
		UNAVAILABLE: 'N/A',
		INFINITY: 'INFINITY',
		MOSAIC: 'TOKEN',
		ADDRESS: 'ADDRESS',
		NO_ALIAS: 'NO ALIAS',
		ACTIVE: 'ACTIVE',
		INACTIVE: 'INACTIVE',
		UNKNOWN: 'UNKNOWN',
		EXPIRED: 'EXPIRED'
	}

	static TransactionType = {
		[TransactionType.TRANSFER]: 'Transfer',
		[TransactionType.NAMESPACE_REGISTRATION]: 'Namespace Registration',
		[TransactionType.ADDRESS_ALIAS]: 'Address Alias',
		[TransactionType.MOSAIC_ALIAS]: 'Token Alias',
	    [TransactionType.MOSAIC_DEFINITION]: 'Token Definition',
	    [TransactionType.MOSAIC_SUPPLY_CHANGE]: 'Token Supply Change',
		[TransactionType.PRICE]: 'Price Transaction',
		[TransactionType.MULTISIG_ACCOUNT_MODIFICATION]: 'Multisig Account Modification',
		[TransactionType.AGGREGATE_COMPLETE]: 'Aggregate Complete',
		[TransactionType.AGGREGATE_BONDED]: 'Aggregate Bonded',
		[TransactionType.HASH_LOCK]: 'Hash Lock',
		[TransactionType.SECRET_LOCK]: 'Secret Lock',
		[TransactionType.SECRET_PROOF]: 'Secret Proof',
		[TransactionType.ACCOUNT_ADDRESS_RESTRICTION]: 'Account Address Restriction',
	    [TransactionType.ACCOUNT_MOSAIC_RESTRICTION]: 'Account Token Restriction',
		[TransactionType.ACCOUNT_OPERATION_RESTRICTION]: 'Account Operation Restriction',
		[TransactionType.ACCOUNT_KEY_LINK]: 'Account Key Link',
	    [TransactionType.MOSAIC_ADDRESS_RESTRICTION]: 'Token Address Restriction',
	    [TransactionType.MOSAIC_GLOBAL_RESTRICTION]: 'Token Global Restriction',
		[TransactionType.ACCOUNT_METADATA]: 'Account Metadata',
	    [TransactionType.MOSAIC_METADATA]: 'Token Metadata',
		[TransactionType.NAMESPACE_METADATA]: 'Namespace Metadata',
		[TransactionType.VRF_KEY_LINK]: 'VRF Key Link',
		[TransactionType.VOTING_KEY_LINK]: 'Voting Key Link',
		[TransactionType.NODE_KEY_LINK]: 'Node Key Link'
	}

	static MosaicSupplyChangeAction = {
		[MosaicSupplyChangeAction.Increase]: 'Increase',
		[MosaicSupplyChangeAction.Decrease]: 'Decrease'
	}

	static NamespaceRegistrationType = {
		[NamespaceRegistrationType.RootNamespace]: 'rootNamespace',
		[NamespaceRegistrationType.SubNamespace]: 'Sub Namespace'
	}

	static AliasAction = {
		[AliasAction.Link]: 'Link',
		[AliasAction.Unlink]: 'Unlink'
	}

	static LinkAction = {
		[LinkAction.Link]: 'Link',
		[LinkAction.Unlink]: 'Unlink'
	}

	static AccountType = {
		[AccountType.Unlinked]: 'Unlinked',
		[AccountType.Main]: 'Main',
		[AccountType.Remote]: 'Remote',
		[AccountType.Remote_Unlinked]: 'Remote Unlinked'
	}

	static AccountKeyTypeFlags = {
		[AccountKeyTypeFlags.Unset]: 'Unset',
		[AccountKeyTypeFlags.Linked]: 'Linked',
		[AccountKeyTypeFlags.VRF]: 'VRF',
		[AccountKeyTypeFlags.Node]: 'Node',
		[AccountKeyTypeFlags.All]: 'All'
	}

	static LockHashAlgorithm = {
		[LockHashAlgorithm.Op_Sha3_256]: 'Sha3 256',
		[LockHashAlgorithm.Op_Hash_160]: 'Hash 160',
		[LockHashAlgorithm.Op_Hash_256]: 'Hash 256'
	}

	static MetadataType = {
		[MetadataType.Account]: 'Account',
	    [MetadataType.Mosaic]: 'Token',
		[MetadataType.Namespace]: 'Namespace'
	}

	static ReceiptType = {
		[ReceiptType.Harvest_Fee]: 'Staking Fee',
		[ReceiptType.LockHash_Created]: 'LockHash Created',
		[ReceiptType.LockHash_Completed]: 'LockHash Completed',
		[ReceiptType.LockHash_Expired]: 'LockHash Expired',
		[ReceiptType.LockSecret_Created]: 'LockSecret Created',
		[ReceiptType.LockSecret_Completed]: 'LockSecret Completed',
		[ReceiptType.LockSecret_Expired]: 'LockSecret Expired',
	    [ReceiptType.Mosaic_Levy]: 'Token Levy',
	    [ReceiptType.Mosaic_Rental_Fee]: 'Token Rental Fee',
		[ReceiptType.Namespace_Rental_Fee]: 'Namespace Rental Fee',
		[ReceiptType.Mosaic_Expired]: 'Token Expired',
		[ReceiptType.Namespace_Expired]: 'Namespace Expired',
		[ReceiptType.Namespace_Deleted]: 'Namespace Deleted',
		[ReceiptType.Inflation]: 'Inflation'
	}

	static ResolutionType = {
		[ResolutionType.Address]: 'Address',
	    [ResolutionType.Mosaic]: 'Token'
	}

	static NetworkType = {
		[NetworkType.MAIN_NET]: 'MAINNET',
		[NetworkType.MIJIN]: 'MIJIN',
		[NetworkType.MIJIN_TEST]: 'MIJIN TESTNET',
		[NetworkType.TEST_NET]: 'TESTNET'
	}

	static RoleType = {
		1: 'Peer node',
		2: 'Api node',
		3: 'Peer Api node',
		4: 'Voting node',
		5: 'Peer Voting node',
		6: 'Api Voting node',
		7: 'Peer Api Voting node'
	}

	static AddressRestrictionFlag = {
		[AddressRestrictionFlag.AllowIncomingAddress]: 'Allow Incoming Addresses',
		[AddressRestrictionFlag.AllowOutgoingAddress]: 'Allow Outgoing Addresses',
		[AddressRestrictionFlag.BlockIncomingAddress]: 'Block Incoming Addresses',
		[AddressRestrictionFlag.BlockOutgoingAddress]: 'Block Outgoing Addresses'
	}

	static MosaicRestrictionFlag = {
	    [MosaicRestrictionFlag.AllowMosaic]: 'Allow Tokens',
	    [MosaicRestrictionFlag.BlockMosaic]: 'Block Tokens'
	}

	static OperationRestrictionFlag = {
		[OperationRestrictionFlag.AllowOutgoingTransactionType]: 'Allow Outgoing Transactions',
		[OperationRestrictionFlag.BlockOutgoingTransactionType]: 'Block Outgoing Transactions'
	}

	static MosaicRestrictionEntryType = {
	    [MosaicRestrictionEntryType.ADDRESS]: 'Token address restriction',
	    [MosaicRestrictionEntryType.GLOBAL]: 'Token global restriction'
	}

	static MosaicRestrictionType = {
		[MosaicRestrictionType.EQ]: 'mosaicRestrictionType.EQ',
		[MosaicRestrictionType.GE]: 'mosaicRestrictionType.GE',
		[MosaicRestrictionType.GT]: 'mosaicRestrictionType.GT',
		[MosaicRestrictionType.LE]: 'mosaicRestrictionType.LE',
		[MosaicRestrictionType.LT]: 'mosaicRestrictionType.LT',
		[MosaicRestrictionType.NE]: 'mosaicRestrictionType.NE',
		[MosaicRestrictionType.NONE]: 'mosaicRestrictionType.NONE'
	}

	static MerkleRootsOrder = ['AccountState', 'Namespace', 'Mosaic', 'Multisig', 'HashLockInfo', 'SecretLockInfo', 'AccountRestriction', 'MosaicRestriction', 'Metadata']

	static ReceiptTransactionStatamentType = {
		BalanceChangeReceipt: 'Balance Change Receipt',
		BalanceTransferReceipt: 'Balance Transfer Receipt',
		InflationReceipt: 'Inflation Receipt',
		ArtifactExpiryReceipt: 'Artifact Expiry Receipt'
	}

	static LockStatusType = {
		[LockStatus.UNUSED]: 'Unused',
		[LockStatus.USED]: 'Used'
	}

	static BlockType = {
		[BlockType.ImportanceBlock]: 'Importance Block',
		[BlockType.NemesisBlock]: 'Nemesis Block',
		[BlockType.NormalBlock]: 'Normal Block'
	}
}

export default Constants;
