<template>
	<div title="">
		<div v-if="iconUrl[0]" class="row">
			<div v-for="item in iconUrl">
				<div class="column">
					<a :href="item.link" target="_blank" rel="noopener noreferrer"><img :src=item.icon :title="item.link" class='mosaic-logo'/></a>
				</div>
			</div>
		</div>
		<div v-else title="Info: N/A">
			<p>N/A</p>
		</div>
	</div>
</template>

<script lang="ts">
import { KeyGenerator } from 'twix-sdk';
import IconTWIX from '../../styles/img/logo_32.png';
import tokenWebsiteURL from '../../styles/img/www-icon.svg';
import tokenMailTo from '../../styles/img/email-icon.svg';
import tokenTwitter from '../../styles/img/twitter-icon.svg';
import tokenTelegram from '../../styles/img/telegram-icon.svg';
import tokenDiscord from '../../styles/img/discord-icon.svg';
import IconErr from '../../styles/img/error-icon.svg';
import defaultConfig from '../../config/default.json';
export default {
	props: {
		value: {
			type: Array,
			required: true
		}
	},
	computed: {
		tokenDetails(){
		},
		iconUrl() {
			const tokenInfo =[];
			defaultConfig.metadataSchema.tokenDetails.forEach(el => {
				let foundKey = this.value.findIndex(element => element.scopedMetadataKey === KeyGenerator.generateUInt64Key(el).toHex())
    			if( foundKey > -1) {
					if(el === 'tokenWebsiteURL') {
						if(this.value[foundKey].value.startsWith("https://")) tokenInfo.push({icon: tokenWebsiteURL, link: this.value[foundKey].value});
					}
					if(el === 'tokenMailTo') {
						if(this.value[foundKey].value.startsWith("mailto:")) tokenInfo.push({icon: tokenMailTo, link: this.value[foundKey].value});
					}
					if(el === 'tokenTwitter') {
						if(this.value[foundKey].value.startsWith("https://twitter.com/")) tokenInfo.push({icon: tokenTwitter, link: this.value[foundKey].value});
					}
					if(el === 'tokenTelegram') {
						if(this.value[foundKey].value.startsWith("https://t.me/")) tokenInfo.push({icon: tokenTelegram, link: this.value[foundKey].value});
					}
					if(el === 'tokenDiscord') {
						if(this.value[foundKey].value.startsWith("https://discord.gg/")) tokenInfo.push({icon: tokenDiscord, link: this.value[foundKey].value});
					}
				}
				});
            return tokenInfo? tokenInfo : [];
		},
		iconHttp() {
			return this.value[0].value
		}
	},
    methods: {
        iconUrlErr(event) {
            event.target.src=IconErr;
            event.target.title="Image Error";
        }
    }
};
</script>

<style lang="scss" scoped>
.mosaic-logo {
    height: 32px;
    width: 32px;
    }
.row {
  flex-basis: 200px;
  width: 240px;
}
.column {
  flex: 20%;
  padding: 5px;
}
</style>