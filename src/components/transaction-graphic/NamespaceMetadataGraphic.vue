<template>
	<div>
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			:width="getPixels(transactionGraphicWidth)"
			:height="getPixels(transactionGraphicHeight)"
			:viewBox="transactionGraphicViewbox"
			xml:space="preserve"
		>
			<AccountIcon
				:x="subjectPositionX"
				:y="subjectPositionY"
				:width="subjectWidth"
				:height="subjectHeight"
				:address="signer"
			/>
			<NamespaceIcon
				:x="objectPositionX"
				:y="objectPositionY"
				:width="subjectWidth"
				:height="subjectHeight"
				:namespace="namespace"
			/>
			<Arrow :x="arrowPositionX" :y="arrowPositionY" />
			<MetadataCircle
				:x="getCircleIconPositionX(0)"
				:y="circleIconPositionY"
				:title="transactionType"
				:data="metadataInfo"
			/>
			<text :x="transactionTypeTextPositionX" :y="transactionTypeTextPositionY" text-anchor="middle" class="message">
				{{ transactionType }}
				<title>{{ transactionType }}</title>
			</text>
		</svg>
	</div>
</template>

<script>
import GraphicComponent from '../graphics/GraphicComponent.vue';
import AccountIcon from '../graphics/AccountIcon.vue';
import NamespaceIcon from '../graphics/NamespaceIcon.vue';
import MetadataCircle from '../graphics/MetadataCircle.vue';
import Arrow from '../graphics/Arrow.vue';
import { TransactionType } from 'twix-sdk';

export default {
	extends: GraphicComponent,

	components: {
		AccountIcon,
		NamespaceIcon,
		Arrow,
		MetadataCircle
	},

	props: {
		type: {
			type: Number,
			default: TransactionType.ACCOUNT_METADATA
		},
		signer: {
			type: String,
			required: true,
			default: ''
		},
		targetAddress: {
			type: String,
			required: true,
			default: ''
		},
		targetNamespaceId: {
			type: String,
			required: true,
			default: ''
		},
		scopedMetadataKey: {
			type: String
		},
		metadataValue: {
			type: String,
			required: true,
			default: ''
		},
		valueSizeDelta: {
			type: Number
		}
	},

	data() {
		return {
			width: this.transactionGraphicWidth,
			heigth: this.transactionGraphicHeight
		};
	},

	computed: {
		transactionType() {
			return this.getTransactionTypeCaption(this.type);
		},

		circleIconsToDisplay() {
			return [true];
		},

		metadataInfo() {
			return {
				targetAddress: this.targetAddress,
				metadataValue: this.metadataValue,
				valueSizeDelta: this.valueSizeDelta,
				scopedMetadataKey: this.scopedMetadataKey
			};
		},

		namespace() {
			return {
				namespaceName: this.targetNamespaceId,
				namespaceId: this.targetNamespaceId
			};
		}
	}
};
</script>
